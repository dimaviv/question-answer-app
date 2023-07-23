import React, {useState} from 'react';
import styles from './AnswerItem.module.css';
import {ROUTE_LOGIN} from 'utils/consts';
import CommentsList from './comments-list/CommentsList';
import {formatDate} from 'utils/pages/questions/format-date';
import userAvatarImg from 'static/pages/questions/userAvatar.svg';
import reportBtnHoverImg from 'static/pages/question/reportBtnHover.svg';
import reportBtnImg from 'static/pages/question/reportBtn.svg';
import commentOnBtnImg from 'static/pages/question/commentOnBtn.svg';
import commentOffBtnImg from 'static/pages/question/commentOffBtn.svg';
import gradeUpBtnImg from 'static/pages/question/gradeUpBtn.svg';
import gradeDownBtnImg from 'static/pages/question/gradeDownBtn.svg';

const AnswerItem = ({answer}) => {
    const [hoveredReport, setHoveredReport] = useState(false);
    const [hoveredComment, setHoveredComment] = useState(false);
    const [isReport, setIsReport] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [grade, setGrade] = useState(0);

    const handleMouseEnter = (handler) => () => handler(true);
    const handleMouseLeave = (handler) => () => handler(false);

    const handleGradeUp = () => {
        setGrade((prevGrade) => prevGrade + 1);
    };

    const handleGradeDown = () => {
        setGrade((prevGrade) => prevGrade - 1);
    };

    const handleReport = () => {
        setIsReport(!isReport);
    };

    const handleComment = () => {
        setIsComment(!isComment);
    };

    return (
        <div className={styles.answerItem}>
            <div className={styles.answerItem__userInfoContainer}>
                <div className={styles.userInfoContainer__avatarBox}>
                    <img src={userAvatarImg}
                         alt=""
                    />
                </div>
                <a className={styles.userInfoContainer__userName}
                   href={ROUTE_LOGIN}
                >
                    userNick
                </a>
                <p className={styles.userInfoContainer__categoryName}>
                    Learner
                </p>
                <p className={styles.userInfoContainer__dateAdd}>
                    {formatDate(answer.createdAt)}
                </p>
                <div className={styles.userInfoContainer__btnBox}>
                    <button className={styles.btnBox__btnReport}
                            onClick={handleReport}
                    >
                        <img
                            src={(isReport && reportBtnHoverImg) || (hoveredReport ? reportBtnHoverImg : reportBtnImg)}
                            alt="report"
                            onMouseEnter={handleMouseEnter(setHoveredReport)}
                            onMouseLeave={handleMouseLeave(setHoveredReport)}
                        />
                    </button>
                    <button className={styles.btnBox__btnCommentOff}
                            onClick={handleComment}
                    >
                        <img
                            src={
                                isComment
                                    ?
                                    (hoveredComment ? commentOffBtnImg : commentOnBtnImg)
                                    :
                                    (!hoveredComment ? commentOffBtnImg : commentOnBtnImg)
                            }
                            alt="comment"
                            onMouseEnter={handleMouseEnter(setHoveredComment)}
                            onMouseLeave={handleMouseLeave(setHoveredComment)}
                        />
                    </button>
                </div>
            </div>
            <div className={styles.answerItem__textContainer}>
                <div className={styles.textContainer__gradeBox}>
                    <button className={styles.gradeBox__btnGrade}
                            onClick={handleGradeUp}
                    >
                        <img src={gradeUpBtnImg}
                             alt="like"
                        />
                    </button>
                    <div className={styles.gradeBox__gradeTextContainer}>
                        <p className={
                            `${styles.gradeTextContainer__text} ${grade < 0 && styles.gradeTextContainer__text_red} ${grade > 0 && styles.gradeTextContainer__text_green}`
                        }>
                            {grade}
                        </p>
                    </div>
                    <button className={styles.gradeBox__btnGrade}
                            onClick={handleGradeDown}
                    >
                        <img src={gradeDownBtnImg}
                             alt="dislike"
                        />
                    </button>
                </div>
                <p className={styles.textContainer__text}>
                    {answer.text}
                </p>
            </div>
            <div className={styles.answerItem__commentContainer}>
                {isComment
                    ?
                    <CommentsList answer={answer} />
                    :
                    <button className={styles.commentContainer__btnAnswer}
                            onClick={() => setIsComment(!isComment)}
                    >
                        Comment
                    </button>
                }
            </div>
        </div>
    );
};

export default AnswerItem;