import React from 'react';
import classes from "./QuestionItem.module.css";
import {ROUTE_LOGIN} from "../../../../utils/consts";
import userAvatarImg from '../../../../static/questions-page/userAvatar.svg'
import {useNavigate} from "react-router-dom";
import {formatDate} from "../../../../utils/questions-page/formatDate";

const QuestionItem = ({question, selectedCategory}) => {
    const navigate = useNavigate()
    const pathToCategory = (selectedCategory.name.toLowerCase()).replace(/\s+/g, "")

    const handleRedirectQuestion = (questionId) => {
        sessionStorage.setItem('questionId', JSON.stringify(questionId))
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
                    {selectedCategory.name}
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