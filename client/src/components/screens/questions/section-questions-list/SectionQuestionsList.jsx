import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';

import {fetchQuestions} from 'api/questionAPI';
import UserTopList from './user-top-list/UserTopList';
import QuestionsList from './questions-list/QuestionsList';
import {ROUTE_ASK_QUESTION, ROUTE_LOGIN} from 'utils/consts';
import Loader from 'components/ui/loading/loader/Loader';
import {StyledSectionQuestionsList} from './StyledSectionQuestionsList';
import {checkArr} from 'utils/check-arr';
import QuestionsLoading from '../../../ui/loading/questions/Questions';

const SectionQuestionsList = () => {
    const navigate = useNavigate();
    const categoryName = useParams().categoryName;
    const {isAuth} = useSelector(state => state.authReducer);
    const {selectedCategory} = useSelector(state => state.categoriesReducer);
    const [limit, setLimit] = useState(10);

    const {data: questions, isLoading: isQuestionsLoading, isError: isQuestionsError} = useQuery(
        ['questions', categoryName !== 'all' ? selectedCategory.id : null, null, limit, null],
        () => fetchQuestions(categoryName !== 'all' ? selectedCategory.id : null, null, limit, null),
        {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
        }
    );
    const [isLoading, setIsLoading] = useState(true);
    const pathToAskQuestionPage = selectedCategory && `${ROUTE_ASK_QUESTION}/${categoryName}`;

    const handleRedirectToAsk = () => {
        if (isAuth) {
            navigate(pathToAskQuestionPage);
        } else {
            navigate(ROUTE_LOGIN);
        }
    };

    const handleShowMore = () => {
        setLimit(prevState => prevState + 10);
    };

    return (
        <StyledSectionQuestionsList>
            <div className={'sectionQuestionList__decorTriangle'}></div>
            <div className={'sectionQuestionList__askQuestionContainer'}>
                <div className={'askQuestionContainer__titleContainer'}>
                    <h1 className={'titleContainer__text'}>
                        Answer questions
                    </h1>
                    <div className={'titleContainer__decorTextBox'}>
                        <h2 className={'decorTextBox__text'}>
                            Or
                        </h2>
                    </div>
                    <h1 className={'titleContainer__text'}>
                        Ask your own
                    </h1>
                </div>
                <button className={'askQuestionContainer__redirectBtn'}
                        onClick={handleRedirectToAsk}
                >
                    I want to ask...
                </button>
            </div>
            <div className={'sectionQuestionList__container'}>
                {(isQuestionsLoading || isQuestionsError || !questions) ? (
                    <div className={'container__questionListContainer'}>
                        <QuestionsLoading />
                    </div>
                ) : (
                    <div className={'container__questionListContainer'}>
                        <QuestionsList questions={questions} />
                        {isQuestionsLoading ? (
                            <Loader />
                        ) : (
                            checkArr(questions) && (
                                <button onClick={handleShowMore}
                                        className={'questionListContainer__showMoreBtn'}
                                >
                                    Show more
                                </button>
                            )
                        )}
                    </div>
                )}
                <UserTopList />
            </div>
        </StyledSectionQuestionsList>
    );
};

export default SectionQuestionsList;