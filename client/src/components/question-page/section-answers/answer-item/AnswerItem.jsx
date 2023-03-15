import React, {useState} from 'react';
import classes from './AnswerItem.module.css'
import userAvatarImg from "../../../../static/questions-page/userAvatar.svg";
import {ROUTE_LOGIN} from "../../../../utils/consts";
import {formatDate} from "../../../../utils/questions-page/formatDate";
import reportBtnHoverImg from "../../../../static/question-page/reportBtnHover.svg";
import reportBtnImg from "../../../../static/question-page/reportBtn.svg";
import commentOnBtnImg from "../../../../static/question-page/commentOnBtn.svg";
import commentOffBtnImg from "../../../../static/question-page/commentOffBtn.svg";
import gradeUpBtnImg from "../../../../static/question-page/gradeUpBtn.svg";
import gradeDownBtnImg from "../../../../static/question-page/gradeDownBtn.svg";

const AnswerItem = ({answer}) => {
    const [hoveredReport, setHoveredReport] = useState(false);
    const [hoveredComment, setHoveredComment] = useState(false);
    const [grade, setGrade] = useState(0)
    const [isReport, setIsReport] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [commentText, setCommentText] = useState('')

    const handleMouseEnter = (handler) => () => handler(true);
    const handleMouseLeave = (handler) => () => handler(false);

    const handleGradeUp = () => {
        setGrade((prevGrade) => prevGrade + 1);
    };

    const handleGradeDown = () => {
        setGrade((prevGrade) => prevGrade - 1);
    };

    const handleReport = () => {
        setIsReport(!isReport)
    }

    const handleComment = () => {
        setIsComment(!isComment)
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        if (commentText) {
            // const newComment = {id: Date.now(), text: commentText, avatar: userAvatarImg}
            setCommentText('')
        }
    }
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
                <div className={classes.btnBox}>
                    <button className={classes.reportBtn} onClick={handleReport}>
                        <img
                            src={(isReport && reportBtnHoverImg) || (hoveredReport ? reportBtnHoverImg : reportBtnImg)}
                            alt='report'
                            onMouseEnter={handleMouseEnter(setHoveredReport)}
                            onMouseLeave={handleMouseLeave(setHoveredReport)}
                        />
                    </button>
                    <button className={classes.reportBtn} onClick={handleComment}>
                        <img
                            src={
                                isComment
                                    ?
                                    (hoveredComment ? commentOffBtnImg : commentOnBtnImg)
                                    :
                                    (!hoveredComment ? commentOffBtnImg : commentOnBtnImg)
                            }
                            alt='comment'
                            onMouseEnter={handleMouseEnter(setHoveredComment)}
                            onMouseLeave={handleMouseLeave(setHoveredComment)}
                        />
                    </button>
                </div>
            </div>
            <div className={classes.answerTextBox}>
                <div className={classes.gradeBox}>
                    <button className={classes.gradeBtn} onClick={handleGradeUp}>
                        <img src={gradeUpBtnImg} alt='like'/>
                    </button>
                    <div>
                        <p className={classes.grade}>
                            {grade}
                        </p>
                    </div>
                    <button className={classes.gradeBtn} onClick={handleGradeDown}>
                        <img src={gradeDownBtnImg} alt='dislike'/>
                    </button>
                </div>
                <p className={classes.answerText}>{answer.text}</p>
            </div>
            <div className={classes.commentBox}>
                {isComment
                    ?
                    <div className={classes.commentBox__content}>
                        {answer.comments && answer.comments.length > 0 &&
                            <div className={classes.commentList}>
                                {answer.comments.map(comment =>
                                    <div className={classes.commentItem} key={comment.id}>
                                        <div className={classes.commentAvatar}>
                                            <img src={userAvatarImg} alt='user-avatar'/>
                                        </div>
                                        <div className={classes.commentTextBox}>
                                            <p className={classes.commentText}>{comment.text}</p>
                                            <p className={classes.commentDate}>{formatDate(comment.createdAt)}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        }
                        <form className={classes.commentSendForm} onSubmit={handleSubmitForm}>
                            <div className={classes.userAvatar}>
                                <img src={userAvatarImg} alt='user-avatar'/>
                            </div>
                            <input
                                type='text'
                                placeholder='Comment'
                                value={commentText}
                                onChange={e => setCommentText(e.target.value)}
                            />
                            <button>
                                Send
                            </button>
                        </form>
                    </div>
                    :
                    <button className={classes.answerBtn} onClick={() => setIsComment(!isComment)}>Comment</button>
                }
            </div>
        </div>
    );
};

export default AnswerItem;