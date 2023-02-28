import React from 'react';
import classes from "./QuestionItem.module.css";
import {ROUTE_LOGIN} from "../../../../utils/consts";

const QuestionItem = (props) => {
    return (
        <div className={classes.questionBox}>
            <div className={classes.title}>
                <div className={classes.avatar}>
                    <img src={props.question.avatar} alt={props.question.user}/>
                </div>
                <a href={ROUTE_LOGIN} className={classes.userName}>
                    {props.question.user}
                </a>
                <p className={classes.categoryName}>
                    {props.selectedCategory.name}
                </p>
                <p className={classes.date}>
                    {props.question.date}
                </p>
            </div>
            <div className={classes.text}>
                <p>{props.question.question}</p>
            </div>
            <button>Answer</button>
        </div>
    );
};

export default QuestionItem;