import React, {useCallback, useEffect, useState} from 'react';
import classes from './SectionQuestionsList.module.css'
import decorTriangleImg from "../../../static/home-page/decor/decor__triangle.svg";
import top1Img from "../../../static/questions-page/user-rate/top-1.svg";
import {useSelector} from "react-redux";
import {ROUTE_LOGIN} from "../../../utils/consts";

const SectionQuestionsList = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer)
    const {questions} = useSelector(state => state.questionsReducer)
    const {users} = useSelector(state => state.usersReducer)

    const [selectedCategoryQuestions, setSelectedCategoryQuestions] = useState([])

    const fetchQuestions = useCallback(() => {
        const newArray = []
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].categoryId === selectedCategory.id) {
                newArray.push(questions[i])
            }
        }
        setSelectedCategoryQuestions(newArray)
    }, [questions, selectedCategory]);

    useEffect(() => {
        fetchQuestions()
    }, [fetchQuestions])

    return (
        <div className={classes.sectionQuestionList}>
            <div className={classes.sectionDecorTriangle}>
                <img src={decorTriangleImg} alt=''/>
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
                <button>
                    I want to ask...
                </button>
            </div>
            <div className={classes.questionsContainer}>
                <div className={classes.leftBar__questionsList}>
                    {selectedCategoryQuestions.map(question =>
                        <div className={classes.questionBox} key={question.id}>
                            <div className={classes.questionBox__title}>
                                <div className={classes.avatar}>
                                    <img src={question.avatar} alt={question.user}/>
                                </div>
                                <a href={ROUTE_LOGIN} className={classes.userName}>
                                    {question.user}
                                </a>
                                <p className={classes.categoryName}>
                                    {selectedCategory.name}
                                </p>
                                <p className={classes.date}>
                                    {question.date}
                                </p>
                            </div>
                            <div className={classes.questionBox__text}>
                                <p>{question.question}</p>
                            </div>
                            <button>Answer</button>
                        </div>
                    )}
                </div>
                <div className={classes.rightBar__usersRating}>
                    <div className={classes.title}>
                        <p>Top 10 {selectedCategory.name}</p>
                    </div>
                    <div className={classes.usersRatingBox}>
                        {users.map(user =>
                            <div className={classes.userBox} key={user.id}>
                                <div className={classes.leftBar__userInform}>
                                    <div className={classes.ratingBox}>
                                        <img src={top1Img} alt='top 1' />
                                    </div>
                                    <div className={classes.user}>
                                        <div>
                                            <img src={user.avatar} alt='' />
                                        </div>
                                        <a href={ROUTE_LOGIN}>{user.name}</a>
                                    </div>
                                </div>
                                <div className={classes.rightBar__userScore}>
                                    <p>{user.score}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionQuestionsList;