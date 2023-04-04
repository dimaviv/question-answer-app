import React, {useEffect, useState} from 'react';
import styles from './SectionQuestionsList.module.css';
import decorTriangleImg from '../../../static/home-page/decor/decor__triangle.svg';
import {useNavigate, useParams} from 'react-router-dom';
import useCategory from '../../../hooks/UseCategory';
import {fetchQuestions} from '../../../http/questionAPI';
import {useActions} from '../../../hooks/UseActions';
import UserTopList from './user-top-list/UserTopList';
import QuestionsList from './questions-list/QuestionsList';

const SectionQuestionsList = () => {
    const navigate = useNavigate();
    const selectedCategory = useCategory(); // Hook returns selected category

    const {setQuestions} = useActions(); // Hook for simple using useDispatch
    const categoryName = useParams().categoryName;

    const [isLoading, setIsLoading] = useState(true);
    const pathToAskQuestionPage = selectedCategory && `/${(selectedCategory.name.toLowerCase()).replace(/\s+/g, '')}/ask`

    useEffect(() => {
        if (selectedCategory) {
            fetchQuestions(
                categoryName !== 'all' ? selectedCategory.id : null,
                null,
                null,
                null
            )
                .then(data => {
                        setQuestions(data.rows);
                        setIsLoading(false);
                })
                .catch(
                    error => console.error('Error while getting data:', error)
                );


        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory]);


    return (
        <div className={styles.sectionQuestionList}>
            <div className={styles.sectionQuestionList__decorTriangleContainer}>
                <img src={decorTriangleImg}
                     alt=""
                />
            </div>
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
                        onClick={() => navigate(pathToAskQuestionPage)}
                >
                    I want to ask...
                </button>
            </div>
            <div className={styles.sectionQuestionList__container}>
                <QuestionsList isLoading={isLoading} />
                <UserTopList />
            </div>
        </div>
    );
};

export default SectionQuestionsList;