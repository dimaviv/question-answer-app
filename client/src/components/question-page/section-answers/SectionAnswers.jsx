import React from 'react';
import classes from './SectionAnswers.module.css'
import userAvatarImg from "../../../static/questions-page/userAvatar.svg";
import {ROUTE_LOGIN} from "../../../utils/consts";
import {useSelector} from "react-redux";
import {formatDate} from "../../../utils/questions-page/formatDate";

const SectionAnswers = () => {
    const {question} = useSelector(state => state.questionsReducer)
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

    return (
        <div className={classes.sectionAnswers}>
            <div className={classes.answersContainer}>
                <div className={classes.mainQuestionBox}>
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
                    <button>Answer</button>
                </div>
            </div>
        </div>
    );
};

export default SectionAnswers;