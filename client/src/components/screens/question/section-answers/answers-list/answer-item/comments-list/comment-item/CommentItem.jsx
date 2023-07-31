import {StyledCommentItem} from './StyledCommentItem';
import {formatDate} from 'utils/pages/questions/format-date';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import {stringToColor} from 'utils/pages/questions/string-to-color';
import {wc_hex_is_light} from 'utils/pages/questions/get-text-color';

const CommentItem = ({comment}) => {
    const avatarColor = stringToColor(comment.user.login ? comment.user.login : getEmailPrefix(comment.user.email));

    const avatarStyle = {
        backgroundColor: avatarColor,
        color: wc_hex_is_light(avatarColor) ? '#000000' : '#FFFFFF'
    };

    return (
        <StyledCommentItem>
            <div className={'commentItem__commentInfoContainer'}>
                <div className={'commentInfoContainer__avatarBox'}>
                    {comment.user.provider ? (
                        comment.user.provider === 'google' ? (
                            <img src={` https://lh3.googleusercontent.com${comment.user.avatar}`}
                                 alt={`${comment.user.login ? comment.user.login : getEmailPrefix(comment.user.email)} avatar`}
                            />
                        ) : (
                            <img src={` https://facebook${comment.user.avatar}`}
                                 alt={`${comment.user.login ? comment.user.login : getEmailPrefix(comment.user.email)} avatar`}
                            />
                        )
                    ) : (
                        comment.user.avatar ? (
                            <img src={comment.user.avatar}
                                 alt={`${comment.user.login ? comment.user.login : getEmailPrefix(comment.user.email)} avatar`}
                            />
                        ) : (
                            <div className={'commentInfoContainer__defaultAvatar'}
                                 style={avatarStyle}
                            >
                                {comment.user.login ? comment.user.login : getEmailPrefix(comment.user.email).charAt(0)}
                            </div>
                        )
                    )}
                </div>
                <p className={'commentInfoContainer__commentText'}>
                    {comment.text}
                </p>
                <p className={'commentInfoContainer__dateAdd'}>
                    &bull; {formatDate(comment.createdAt)}
                </p>
            </div>
        </StyledCommentItem>
    );
};

export default CommentItem;