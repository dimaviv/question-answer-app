import React, {useState} from 'react';
import classes from './SectionAnswers.module.css'
import userAvatarImg from "../../../static/questions-page/userAvatar.svg";
import {ROUTE_LOGIN} from "../../../utils/consts";
import {useSelector} from "react-redux";
import {formatDate} from "../../../utils/questions-page/formatDate";
import reportBtnImg from "../../../static/question-page/reportBtn.svg"
import reportBtnHoverImg from "../../../static/question-page/reportBtnHover.svg"
import AnswerItem from "./answer-item/AnswerItem";

const SectionAnswers = () => {
    const {question} = useSelector(state => state.questionsReducer)
    const {selectedCategory} = useSelector(state => state.categoriesReducer)
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={classes.sectionAnswers}>
            <div className={classes.answersContainer}>
                <div className={classes.questionBox}>
                    <div className={classes.questionTitle}>
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
                        <button className={classes.reportBtn}>
                            <img
                                src={hovered ? reportBtnHoverImg : reportBtnImg}
                                alt='report'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </button>
                    </div>
                    <div className={classes.questionText}>
                        <p>{question.text}</p>
                    </div>
                    <button className={classes.answerBtn}>Answer</button>
                </div>
                <div className={classes.answersTitleContainer}>
                    <div className={classes.decorBox}>
                        <h1 className={classes.text}>
                            {question.answers && question.answers.length > 0 ? 'Answers' : 'Write your answer first'}
                        </h1>
                    </div>
                </div>
                {question.answers && question.answers.length > 0 &&
                    <div className={classes.answersBox}>
                        {question.answers.map(answer =>
                            <AnswerItem
                                key={answer.id}
                                answer={answer}
                            />
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default SectionAnswers;