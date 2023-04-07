import React, {useState} from 'react';
import styles from './CommentsList.module.css';
import {formatDate} from '../../../../../utils/questions-page/format-date';
import userAvatarImg from '../../../../../static/questions-page/userAvatar.svg';

const CommentsList = ({answer}) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (commentText) {
            // const newComment = {id: Date.now(), text: commentText, avatar: userAvatarImg}
            setCommentText('');
        }
    };

    return (
        <div className={styles.commentsList}>
            {(answer.comments && answer.comments.length > 0) &&
                <div className={styles.commentsList__content}>
                    {answer.comments.map(comment =>
                        <div className={styles.content__commentItem}
                             key={comment.id}
                        >
                            <div className={styles.commentItem__commentInfoContainer}>
                                <div className={styles.commentInfoContainer__avatarBox}>
                                    <img src={userAvatarImg}
                                         alt="user-avatar"
                                    />
                                </div>
                                <p className={styles.commentInfoContainer__commentText}>
                                    {comment.text}
                                </p>
                                <p className={styles.commentInfoContainer__dateAdd}>
                                    {formatDate(comment.createdAt)}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            }
            <form className={styles.commentsList__sendForm}
                  onSubmit={handleSubmitForm}
            >
                {/*<div className={styles.sendForm__userAvatarBox}>*/}
                {/*    <img src={userAvatarImg}*/}
                {/*         alt="user-avatar"*/}
                {/*    />*/}
                {/*</div>*/}
                <input className={styles.sendForm__inputComment}
                    type="text"
                    placeholder="Comment"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
                <button className={styles.sendForm__btnSend}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default CommentsList;