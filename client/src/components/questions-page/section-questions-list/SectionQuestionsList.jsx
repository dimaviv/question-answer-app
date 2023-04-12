import React, {useEffect, useState} from 'react';
import styles from './SectionQuestionsList.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import useCategory from '../../../hooks/UseCategory';
import {fetchQuestions} from '../../../http/questionAPI';
import {useActions} from '../../../hooks/UseActions';
import UserTopList from './user-top-list/UserTopList';
import QuestionsList from './questions-list/QuestionsList';
import {useSelector} from 'react-redux';
import {ROUTE_LOGIN} from '../../../utils/consts';
import Loader from '../../UI/loaders/loader/Loader';

const SectionQuestionsList = () => {
    const navigate = useNavigate();
    const selectedCategory = useCategory(); // Hook returns selected category
    const {isDarkMode} = useSelector(state => state.darkModeReducer);
    const {isAuth} = useSelector(state => state.authReducer);
    const {questions} = useSelector(state => state.questionsReducer);

    const {setQuestions} = useActions(); // Hook for simple using useDispatch
    const categoryName = useParams().categoryName;

    const [isLoading, setIsLoading] = useState(true);
    const [isQuestionsLoading, setIsQuestionLoading] = useState(false);
    const [limit, setLimit] = useState(10);
    const pathToAskQuestionPage = selectedCategory && `/categories/${(selectedCategory.name.toLowerCase()).replace(/\s+/g, '')}/ask`;

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
        <div className={styles.sectionQuestionList}>
            <div className={`${styles.sectionQuestionList__decorTriangle} ${isDarkMode && styles.sectionQuestionList__decorTriangle_dark}`}></div>
            <div className={styles.sectionQuestionList__askQuestionContainer}>
                <div className={styles.askQuestionContainer__titleContainer}>
                    <h2 className={styles.titleContainer__text}>
                        Answer questions
                    </h2>
                    <div className={styles.titleContainer__decorTextBox}>
                        <h2 className={styles.decorTextBox__text}>
                            Or
                        </h2>
                    </div>
                    <h2 className={styles.titleContainer__text}>
                        Ask your own
                    </h2>
                </div>
                <button className={styles.askQuestionContainer__btnRedirect}
                        onClick={handleRedirectToAsk}
                >
                    I want to ask...
                </button>
            </div>
            <div className={styles.sectionQuestionList__container}>
                <div className={styles.container__questionListContainer}>
                    <QuestionsList isLoading={isLoading} />
                    {isQuestionsLoading
                        ?
                        <Loader />
                        :
                        questions && questions.length % 10 === 0 &&
                        <button onClick={handleShowMore}
                                className={styles.questionListContainer__btnShowMore}
                        >
                            Show more
                        </button>
                    }
                </div>
                <UserTopList />
            </div>
        </div>
    );
};

export default SectionQuestionsList;