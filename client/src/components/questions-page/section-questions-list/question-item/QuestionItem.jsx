import React from 'react';
import styles from './QuestionItem.module.css';
import {ROUTE_LOGIN} from '../../../../utils/consts';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import useCategory from '../../../../hooks/UseCategory';
import {formatDate} from '../../../../utils/questions-page/format-date';
import userAvatarImg from '../../../../static/questions-page/userAvatar.svg';
import {getEmailPrefix} from '../../../../utils/questions-page/get-email-prefix';

const QuestionItem = ({question}) => {
    const selectedCategory = useCategory(); // Hook returns selected category
    const navigate = useNavigate();

    const {isAuth} = useSelector(state => state.authReducer)
    const {categories} = useSelector(state => state.categoriesReducer);
    const pathToCategory = selectedCategory && selectedCategory.name.toLowerCase().replace(/\s+/g, '');
    const itemCategory = categories.find(category => category.id === question.categoryId);

    const handleRedirectQuestion = (questionId) => {
        if (isAuth) {
            sessionStorage.setItem('questionId', questionId);
            navigate(`/categories/${pathToCategory}/${questionId}`);
        } else {
            navigate(ROUTE_LOGIN)
        }
    };

    return (
        <div className={styles.questionItem}>
            <div className={styles.questionItem__userInfoContainer}>
                <div className={styles.userInfoContainer__avatarBox}>
                    <img src={userAvatarImg}
                         alt=""
                    />
                </div>
                <a className={styles.userInfoContainer__userName}
                   href={ROUTE_LOGIN}
                >
                    {question.user.login ? question.user.login : getEmailPrefix(question.user.email)}
                </a>
                <p className={styles.userInfoContainer__categoryName}>
                    {itemCategory.name}
                </p>
                <p className={styles.userInfoContainer__dateAdd}>
                    {formatDate(question.createdAt)}
                </p>
            </div>
            <div className={styles.questionItem__textContainer}>
                <p className={styles.textContainer__text}>
                    {question.text}
                </p>
            </div>
            <button className={styles.questionItem__btnRedirect}
                    onClick={() => handleRedirectQuestion(question.id)}
            >
                Answer
            </button>
        </div>
    );
};

export default QuestionItem;