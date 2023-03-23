import React from 'react';
import classes from "./QuestionItem.module.css";
import {ROUTE_LOGIN} from "../../../../utils/consts";
import userAvatarImg from '../../../../static/questions-page/userAvatar.svg'
import {useNavigate} from "react-router-dom";
import {formatDate} from "../../../../utils/questions-page/format-date";
import {useSelector} from "react-redux";

const QuestionItem = ({question, selectedCategory}) => {
    const navigate = useNavigate()
    const pathToCategory = (selectedCategory.name.toLowerCase()).replace(/\s+/g, "")
    const {categories} = useSelector(state => state.categoriesReducer)

    const categoryName = categories.find(category => category.id === question.categoryId)

    const handleRedirectQuestion = (questionId) => {
        sessionStorage.setItem('questionId', questionId)
        navigate(`/${pathToCategory}/${questionId}`)
    }

    return (
        <div className={classes.questionBox}>
            <div className={classes.title}>
                <div className={classes.avatar}>
                    <img src={userAvatarImg} alt=''/>
                </div>
                <a href={ROUTE_LOGIN} className={classes.userName}>
                    userNick
                </a>
                <p className={classes.categoryName}>
                    {categoryName.name}
                </p>
                <p className={classes.date}>
                    {formatDate(question.createdAt)}
                </p>
            </div>
            <div className={classes.text}>
                <p>{question.text}</p>
            </div>
            <button onClick={() => handleRedirectQuestion(question.id)}>Answer</button>
        </div>
    );
};

export default QuestionItem;