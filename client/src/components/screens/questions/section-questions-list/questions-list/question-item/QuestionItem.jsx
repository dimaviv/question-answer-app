import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useQuery} from 'react-query';

import {ROUTE_LOGIN, ROUTE_QUESTION} from 'utils/consts';
import {formatDate} from 'utils/pages/questions/format-date';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import {fetchCategories} from 'api/categoryAPI';
import {checkArr} from 'utils/check-arr';
import {translitWord} from 'utils/translit';
import {StyledQuestionItem} from './StyledQuestionItem';
import {stringToColor} from 'utils/pages/questions/string-to-color';
import {wc_hex_is_light} from 'utils/pages/questions/get-text-color';

const QuestionItem = ({question}) => {
    const navigate = useNavigate();
    const {selectedCategory} = useSelector(state => state.categoriesReducer);
    const {data: categories, isLoading, isError} = useQuery('categories', fetchCategories);

    const {isAuth} = useSelector(state => state.authReducer);
    const categoryPathFromName = (categoryName) => {
        const translitName = translitWord(categoryName);
        const encodedName = encodeURIComponent(translitName);
        return encodedName.replace('%20', '-');
    };

    const itemCategory = checkArr(categories) ? categories.find(category => category.id === question.categoryId) : {};

    const handleRedirectQuestion = (questionId) => {
        if (isAuth) {
            const pathToCategory = categoryPathFromName(selectedCategory.name);
            sessionStorage.setItem('questionId', questionId);
            navigate(`${ROUTE_QUESTION}/${pathToCategory}/${questionId}`);
        } else {
            navigate(ROUTE_LOGIN);
        }
    };

    const avatarColor = stringToColor(question.user.login ? question.user.login : getEmailPrefix(question.user.email))

    const avatarStyle = {
        backgroundColor: avatarColor,
        color: wc_hex_is_light(avatarColor) ? '#000000' : '#FFFFFF'
    };

    return (
        <StyledQuestionItem>
            <div className={'questionItem__userInfoContainer'}>
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
                <a className={'userInfoContainer__userName'}
                   href={ROUTE_LOGIN}
                >
                    {question.user.login ? (
                        question.user.login
                    ) : (
                        getEmailPrefix(question.user.email)
                    )}
                </a>
                <p className={'userInfoContainer__categoryName'}>
                   {itemCategory.name}
                </p>
                <p className={'userInfoContainer__dateAdd'}>
                    {formatDate(question.createdAt)}
                </p>
            </div>
            <div className={'questionItem__textContainer'}>
                <p className={'textContainer__text'}>
                    {question.text}
                </p>
            </div>
            <button className={'questionItem__btnRedirect'}
                    onClick={() => handleRedirectQuestion(question.id)}
            >
                Answer
            </button>
        </StyledQuestionItem>
    );
};

export default QuestionItem;