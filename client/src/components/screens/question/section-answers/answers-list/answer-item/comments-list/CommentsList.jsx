import {useState} from 'react';
import {formatDate} from 'utils/pages/questions/format-date';
import userAvatarImg from 'static/pages/questions/userAvatar.svg';
import {StyledCommentsList} from './StyledCommentsList';

const CommentsList = ({answer}) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmitForm = async (e) => {
        e.preventDefault();
    };

    return (
        <StyledCommentsList>
            {(answer.comments && answer.comments.length > 0) &&
                <div className={'commentsList__content'}>
                    {answer.comments.map(comment =>
                        <div className={'content__commentItem'}
                             key={comment.id}
                        >
                            <div className={'commentItem__commentInfoContainer'}>
                                <div className={'commentInfoContainer__avatarBox'}>
                                    <img src={userAvatarImg}
                                         alt="user-avatar"
                                    />
                                </div>
                                <p className={'commentInfoContainer__commentText'}>
                                    {comment.text}
                                </p>
                                <p className={'commentInfoContainer__dateAdd'}>
                                    {formatDate(comment.createdAt)}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            }
            <form className={'commentsList__sendForm'}
                  onSubmit={handleSubmitForm}
            >
                {/*<div className={'sendForm__userAvatarBox'}>*/}
                {/*    <img src={userAvatarImg}*/}
                {/*         alt="user-avatar"*/}
                {/*    />*/}
                {/*</div>*/}
                <input className={'sendForm__inputComment'}
                    type="text"
                    placeholder="Comment"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
                <button className={'sendForm__btnSend'}>
                    Send
                </button>
            </form>
        </StyledCommentsList>
    );
};

export default CommentsList;