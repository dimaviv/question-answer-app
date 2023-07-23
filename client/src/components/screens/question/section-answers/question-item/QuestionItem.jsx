import {useState} from 'react';
import {useSelector} from 'react-redux';

import {StyledQuestionItem} from './StyledQuestionItem';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import {ROUTE_LOGIN} from 'utils/consts';
import {formatDate} from 'utils/pages/questions/format-date';
import reportBtnHoverImg from 'static/pages/question/reportBtnHover.svg';
import reportBtnImg from 'static/pages/question/reportBtn.svg';
import {stringToColor} from 'utils/pages/questions/string-to-color';
import {wc_hex_is_light} from 'utils/pages/questions/get-text-color';

const QuestionItem = ({question}) => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer);

    const avatarColor = stringToColor(question.user.login ? question.user.login : getEmailPrefix(question.user.email));

    const avatarStyle = {
        backgroundColor: avatarColor,
        color: wc_hex_is_light(avatarColor) ? '#000000' : '#FFFFFF'
    };

    const [hoveredReport, setHoveredReport] = useState(false);
    const [isReport, setIsReport] = useState(false);

    const handleMouseEnter = () => {
        setHoveredReport(true);
    };

    const handleMouseLeave = () => {
        setHoveredReport(false);
    };

    const handleReport = () => {
        setIsReport(!isReport);
    };
    return (
        <StyledQuestionItem>
            <div className={'questionContainer__titleContainer'}>
                <div className={'userInfoContainer__avatarBox'}>
                    {question.user.provider ? (
                        question.user.provider === 'google' ? (
                            <img src={` https://lh3.googleusercontent.com${question.user.avatar}`}
                                 alt={`${question.user.login ? question.user.login : getEmailPrefix(question.user.email)} avatar`}
                            />
                        ) : (
                            <img src={` https://facebook${question.user.avatar}`}
                                 alt={`${question.user.login ? question.user.login : getEmailPrefix(question.user.email)} avatar`}
                            />
                        )
                    ) : (
                        question.user.avatar ? (
                            <img src={question.user.avatar}
                                 alt={`${question.user.login ? question.user.login : getEmailPrefix(question.user.email)} avatar`}
                            />
                        ) : (
                            <div className={'defaultAvatar'}
                                 style={avatarStyle}
                            >
                                {question.user.login ? question.user.login : getEmailPrefix(question.user.email).charAt(0)}
                            </div>
                        )
                    )}
                </div>
                <a className={'titleContainer__userName'}
                   href={ROUTE_LOGIN}
                >
                    {question.user.login ? question.user.login : getEmailPrefix(question.user.email)}
                </a>
                <p className={'titleContainer__categoryName'}>
                    {selectedCategory.name}
                </p>
                <p className={'titleContainer__dateAdd'}>
                    {formatDate(question.createdAt)}
                </p>
                <button className={'titleContainer__btnReport'}
                        onClick={handleReport}
                >
                    <img
                        src={(isReport && reportBtnHoverImg) || (hoveredReport ? reportBtnHoverImg : reportBtnImg)}
                        alt='report'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </button>
            </div>
            <div className={'questionContainer__textContainer'}>
                <p className={'textContainer__text'}>
                    {question.text}
                </p>
            </div>
            <button className={'questionContainer__btnAnswer'}>
                Answer
            </button>
        </StyledQuestionItem>
    );
};

export default QuestionItem;