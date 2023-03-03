import React, {useCallback, useEffect, useState} from 'react';
import classes from './SectionQuestionsList.module.css'
import decorTriangleImg from "../../../static/home-page/decor/decor__triangle.svg";
import {useSelector} from "react-redux";
import UserPlaceItem from "./user-place-item/UserPlaceItem";
import QuestionItem from "./question-item/QuestionItem";
import {useNavigate} from "react-router-dom";
import {ROUTE_LOGIN} from "../../../utils/consts";
import {topImages} from "../../../utils/questions-page/img-places";


const SectionQuestionsList = () => {
    const navigate = useNavigate()
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
                <button onClick={() => navigate(ROUTE_LOGIN)}>
                    I want to ask...
                </button>
            </div>
            <div className={classes.questionsContainer}>
                <div className={classes.leftBar__questionsList}>
                    {selectedCategoryQuestions.map(question =>
                        <QuestionItem
                            key={question.id}
                            question={question}
                            selectedCategory={selectedCategory}
                        />
                    )}
                </div>
                <div className={classes.rightBar__usersRating}>
                    <div className={classes.title}>
                        {/*<p>Top 10 {selectedCategory.name}</p>*/}
                        <p>Top 10</p>
                    </div>
                    <div className={classes.usersRatingBox}>
                        {users.map((user, index) =>
                            <UserPlaceItem
                                key={user.id}
                                user={user}
                                img={topImages[index]}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionQuestionsList;