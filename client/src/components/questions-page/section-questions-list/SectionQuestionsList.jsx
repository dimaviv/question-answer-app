import React, {useCallback, useEffect, useState} from 'react';
import classes from './SectionQuestionsList.module.css';
import decorTriangleImg from '../../../static/home-page/decor/decor__triangle.svg';
import {useSelector} from 'react-redux';
import UserPlaceItem from './user-place-item/UserPlaceItem';
import QuestionItem from './question-item/QuestionItem';
import {topImages} from '../../../utils/questions-page/img-places';
import Loader from '../../UI/loaders/loader/Loader';
import _ from 'lodash';
import {useNavigate, useParams} from 'react-router-dom';
import useCategory from '../../../hooks/UseCategory';
import {fetchQuestions} from '../../../http/questionAPI';
import {useActions} from '../../../hooks/UseActions';

const SectionQuestionsList = () => {
    const navigate = useNavigate();
    const selectedCategory = useCategory();
    const {setQuestions} = useActions();
    const {questions} = useSelector(state => state.questionsReducer);
    const {users} = useSelector(state => state.usersReducer);
    const categoryName = useParams().categoryName;

    const [isLoading, setIsLoading] = useState(true);
    const [top10List, setTop10List] = useState([]);
    const [sortedByTimeQuestions, setSortedByTimeQuestions] = useState([]);

    const fetchTop10ListCallback = useCallback(() => {
        setTop10List(_.sortBy(users, 'score').reverse().slice(0, 10));
    }, [users]);

    const fetchSortedByTimeQuestionsCallback = useCallback(() => {
        setSortedByTimeQuestions(_.sortBy(questions, 'createdAt').reverse());
    }, [questions]);

    useEffect(() => {
        fetchTop10ListCallback();
        fetchSortedByTimeQuestionsCallback();
    }, [fetchSortedByTimeQuestionsCallback, fetchTop10ListCallback]);

    useEffect(() => {
        if (selectedCategory) {
            fetchQuestions(
                categoryName !== 'all'
                    ?
                    selectedCategory.id
                    :
                    null,
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
        <div className={classes.sectionQuestionList}>
            <div className={classes.sectionDecorTriangle}>
                <img src={decorTriangleImg}
                     alt=""
                />
            </div>
            <div className={classes.askContainer}>
                <div className={classes.titleContainer}>
                    <h2 className={classes.titleText}>Answer questions</h2>
                    <div className={classes.decorBox}>
                        <h2 className={classes.decorBox__text}>
                            Or
                        </h2>
                    </div>
                    <h2 className={classes.titleText}>Ask your own</h2>
                </div>
                <button onClick={() => navigate(`/${(selectedCategory.name.toLowerCase()).replace(/\s+/g, '')}/ask`)}>
                    I want to ask...
                </button>
            </div>
            <div className={classes.questionsContainer}>
                <div className={classes.leftBar__questionsList}>
                    {isLoading
                        ?
                        <Loader />
                        :
                        sortedByTimeQuestions.map((question) => (
                            <QuestionItem
                                key={question.id}
                                question={question}
                            />
                        ))}
                </div>
                <div className={classes.rightBar__usersRating}>
                    <div className={classes.title}>
                        <p>Top 10</p>
                    </div>
                    {top10List && top10List.length > 0 &&
                        <div className={classes.usersRatingBox}>
                            {top10List.map((user, index) => (
                                <UserPlaceItem
                                    key={user.id}
                                    user={user}
                                    img={topImages[index]}
                                />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SectionQuestionsList;