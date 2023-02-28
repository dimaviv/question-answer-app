import React from 'react';
import classes from "./QuestionItem.module.css";
import {ROUTE_LOGIN} from "../../../../utils/consts";

const QuestionItem = (props) => {
    function formatDate(date) {
        const currentDate = new Date();
        const addedDate = new Date(date);
        const timeDiff = currentDate.getTime() - addedDate.getTime();
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
        const minuteDiff = Math.floor(timeDiff / (1000 * 60));
        const secondDiff = Math.floor(timeDiff / 1000);

        if (dayDiff === 0) {
            if (hourDiff === 0) {
                if (minuteDiff === 0) {
                    return `- ${secondDiff} sec ago`;
                } else {
                    return `- ${minuteDiff} min ago`;
                }
            } else {
                if (hourDiff === 1) {
                    return `- 1 hour ago`;
                }
                return `- ${hourDiff} hours ago`;
            }
        } else {
            if (dayDiff === 1) {
                return `- 1 day ago`;
            }
            return `- ${dayDiff} days ago`;
        }
    }

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
                    {formatDate(props.question.date)}
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