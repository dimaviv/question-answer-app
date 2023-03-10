import React, {useState} from 'react';
import classes from './AnswerItem.module.css'
import userAvatarImg from "../../../../static/questions-page/userAvatar.svg";
import {ROUTE_LOGIN} from "../../../../utils/consts";
import {formatDate} from "../../../../utils/questions-page/formatDate";
import reportBtnHoverImg from "../../../../static/question-page/reportBtnHover.svg";
import reportBtnImg from "../../../../static/question-page/reportBtn.svg";
import gradeUpBtnImg from "../../../../static/question-page/gradeUpBtn.svg";
import gradeDownBtnImg from "../../../../static/question-page/gradeDownBtn.svg";

const AnswerItem = ({answer}) => {
    const [hovered, setHovered] = useState(false);
    const [grade, setGrade] = useState(0)

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleGradeUp = () => {
        setGrade((prevGrade) => prevGrade + 1);
    };

    const handleGradeDown = () => {
        setGrade((prevGrade) => prevGrade - 1);
    };
    return (
        <div className={classes.answerBox}>
            <div className={classes.answerTitle}>
                <div className={classes.avatar}>
                    <img src={userAvatarImg} alt=''/>
                </div>
                <a href={ROUTE_LOGIN} className={classes.userName}>
                    userNick
                </a>
                <p className={classes.categoryName}>
                    Learner
                </p>
                <p className={classes.date}>
                    {formatDate(answer.createdAt)}
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
            <div className={classes.answerText}>
                <div className={classes.gradeBox}>
                    <button className={classes.gradeBtn} onClick={handleGradeUp}>
                        <img src={gradeUpBtnImg} alt='like'/>
                    </button>
                    <div>
                        <p>
                            {grade}
                        </p>
                    </div>
                    <button className={classes.gradeBtn} onClick={handleGradeDown}>
                        <img src={gradeDownBtnImg} alt='dislike'/>
                    </button>
                </div>
                <p>{answer.text}</p>
            </div>
            <button className={classes.answerBtn}>Comment</button>
        </div>
    );
};

export default AnswerItem;