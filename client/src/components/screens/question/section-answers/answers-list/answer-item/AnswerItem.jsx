import {useState} from 'react';
import {Link} from 'react-router-dom';

import {ROUTE_LOGIN} from 'utils/consts';
import CommentsList from './comments-list/CommentsList';
import {formatDate} from 'utils/pages/questions/format-date';
import reportBtnHoverImg from 'static/pages/question/reportBtnHover.svg';
import reportBtnImg from 'static/pages/question/reportBtn.svg';
import commentOffBtnImg from 'static/pages/question/commentOffBtn.svg';
import commentOnBtnImg from 'static/pages/question/commentOnBtn.svg';
import {StyledAnswerItem} from './StyledAnswerItem';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import {stringToColor} from 'utils/pages/questions/string-to-color';
import {wc_hex_is_light} from 'utils/pages/questions/get-text-color';

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

    const avatarColor = stringToColor(answer.user.login ? answer.user.login : getEmailPrefix(answer.user.email));

    const avatarStyle = {
        backgroundColor: avatarColor,
        color: wc_hex_is_light(avatarColor) ? '#000000' : '#FFFFFF'
    };

    return (
        <StyledAnswerItem>
            <div className={'answerItem__userInfoContainer'}>
                <div className={'userInfoContainer__avatarBox'}>
                    {answer.user.provider ? (
                        answer.user.provider === 'google' ? (
                            <img src={` https://lh3.googleusercontent.com${answer.user.avatar}`}
                                 alt={`${answer.user.login ? answer.user.login : getEmailPrefix(answer.user.email)} avatar`}
                            />
                        ) : (
                            <img src={` https://facebook${answer.user.avatar}`}
                                 alt={`${answer.user.login ? answer.user.login : getEmailPrefix(answer.user.email)} avatar`}
                            />
                        )
                    ) : (
                        answer.user.avatar ? (
                            <img src={answer.user.avatar}
                                 alt={`${answer.user.login ? answer.user.login : getEmailPrefix(answer.user.email)} avatar`}
                            />
                        ) : (
                            <div className={'defaultAvatar'}
                                 style={avatarStyle}
                            >
                                {answer.user.login ? answer.user.login : getEmailPrefix(answer.user.email).charAt(0)}
                            </div>
                        )
                    )}
                </div>
                <Link className={'userInfoContainer__userName'}
                      to={`/${ROUTE_LOGIN}`}
                >
                    {answer.user.login ? answer.user.login : getEmailPrefix(answer.user.email)}
                </Link>
                <p className={'userInfoContainer__categoryName'}>
                    learner
                </p>
                <p className={'userInfoContainer__dateAdd'}>
                    {formatDate(answer.createdAt)}
                </p>
                <div className={'userInfoContainer__btnBox'}>
                    <button className={'btnBox__btnReport'}
                            onClick={handleReport}
                    >
                        <img
                            src={(isReport && reportBtnHoverImg) || (hoveredReport ? reportBtnHoverImg : reportBtnImg)}
                            alt='report'
                            onMouseEnter={handleMouseEnter(setHoveredReport)}
                            onMouseLeave={handleMouseLeave(setHoveredReport)}
                        />
                    </button>
                    <button className={'btnBox__btnCommentOff'}
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
                            alt='comment'
                            onMouseEnter={handleMouseEnter(setHoveredComment)}
                            onMouseLeave={handleMouseLeave(setHoveredComment)}
                        />
                    </button>
                </div>
            </div>
            <div className={'answerItem__content'}>
                <div className={'textContainer__gradeBox'}>
                    <button className={'gradeBox__btnGrade up'}
                            onClick={handleGradeUp}
                    >
                    </button>
                    <div className={'gradeBox__gradeTextContainer'}>
                        <p className={`gradeTextContainer__text ${grade < 0 && 'gradeTextContainer__text_red'} ${grade > 0 && 'gradeTextContainer__text_green'}`}>
                            {grade}
                        </p>
                    </div>
                    <button className={'gradeBox__btnGrade down'}
                            onClick={handleGradeDown}
                    >
                    </button>
                </div>
                <div className={'answerItem__textContainer'}>
                    <p className={'textContainer__text'}>
                        {answer.text}
                    </p>
                </div>
            </div>
            <div className={'answerItem__commentContainer'}>
                {isComment
                    ?
                    <CommentsList answer={answer} />
                    :
                    <button className={'commentContainer__btnAnswer'}
                            onClick={() => setIsComment(!isComment)}
                    >
                        Comment
                    </button>
                }
            </div>
        </StyledAnswerItem>
    );
};

export default AnswerItem;