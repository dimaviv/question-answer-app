import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {fetchQuestions} from 'api/questionAPI';
import {useActions} from 'hooks/UseActions';
import UserTopList from './user-top-list/UserTopList';
import QuestionsList from './questions-list/QuestionsList';
import {ROUTE_ASK_QUESTION, ROUTE_LOGIN} from 'utils/consts';
import Loader from 'components/ui/loaders/loader/Loader';
import {StyledSectionQuestionsList} from './StyledSectionQuestionsList';

const SectionQuestionsList = () => {
    const navigate = useNavigate();
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

    const {isAuth} = useSelector(state => state.authReducer);
    const {questions} = useSelector(state => state.questionsReducer);

    const {setQuestions} = useActions(); // Hook for simple using useDispatch
    const categoryName = useParams().categoryName;

    const [isLoading, setIsLoading] = useState(true);
    const [isQuestionsLoading, setIsQuestionLoading] = useState(false);

    const [limit, setLimit] = useState(10);

    const pathToAskQuestionPage = selectedCategory && `${ROUTE_ASK_QUESTION}/${categoryName}`;

    const handleRedirectToAsk = () => {
        if (isAuth) {
            navigate(pathToAskQuestionPage);
        } else {
            navigate(ROUTE_LOGIN);
        }
    };

    const handleShowMore = () => {
        setLimit(limit + 10);
    };

    useEffect(() => {
        setQuestions([]);
        if (selectedCategory) {
            setIsQuestionLoading(true);
            fetchQuestions(
                categoryName !== 'all' ? selectedCategory.id : null,
                null,
                limit,
                null
            )
                .then(data => {
                    setQuestions(data.rows);
                    setIsLoading(false);
                    setIsQuestionLoading(false);
                })
                .catch(
                    error => console.error('Error while getting data:', error)
                );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory, limit]);


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
                <div className={'container__questionListContainer'}>
                    <QuestionsList isLoading={isLoading} />
                    {isQuestionsLoading ? (
                        <Loader />
                    ) : (
                        questions &&
                        questions.length > 0 &&
                        questions.length % 10 === 0 && (
                            <button onClick={handleShowMore}
                                    className={'questionListContainer__showMoreBtn'}
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