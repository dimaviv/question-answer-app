import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useQuery} from 'react-query';

import UserTopList from './user-top-list/UserTopList';
import QuestionsList from './questions-list/QuestionsList';
import {ROUTE_ASK_QUESTION, ROUTE_LOGIN} from 'utils/consts';
import {StyledSectionQuestionsList} from './StyledSectionQuestionsList';
import {fetchQuestions} from 'api/question';
import Loader from 'components/ui/loading/loader/Loader';
import QuestionsLoading from 'components/ui/loading/questions/Questions';

const SectionQuestionsList = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer);
    const categoryName = useParams().categoryName;
    const navigate = useNavigate();
    const {isAuth} = useSelector(state => state.authReducer);

    const [limit, setLimit] = useState(10);

    const {data: questions, isLoading: isQuestionsLoading, isError: isQuestionsError} = useQuery(
        ['questions', categoryName !== 'all' ? selectedCategory.id : null, null, limit, null],
        () => Object.keys(selectedCategory).length > 0 && fetchQuestions(categoryName !== 'all' ? selectedCategory.id : null, null, limit, null),
        {
            keepPreviousData: true,
        }
    );

    const getMoreQuestions = () => {
        setLimit((prevState) => prevState + 10);
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
                        onClick={() => {
                            navigate(`/${isAuth ? ROUTE_ASK_QUESTION : ROUTE_LOGIN}`);
                        }}
                >
                    I want to ask...
                </button>
            </div>
            <div className={'sectionQuestionList__container'}>
                <div className={'container__questionListContainer'}>
                    {(!questions || isQuestionsLoading || isQuestionsError) ? (
                        <QuestionsLoading />
                    ) : (
                        <QuestionsList questions={questions?.rows || []} />
                    )}
                    {(questions && questions.rows.length < questions.count) && (
                        isQuestionsLoading ? (
                            <Loader />
                        ) : (
                            <button onClick={getMoreQuestions}
                                    className={'showMoreBtn'}
                            >
                                Show more
                            </button>
                        )
                    )}
                </div>
                <UserTopList />
            </div>
        </StyledSectionQuestionsList>
    );
};

export default SectionQuestionsList;