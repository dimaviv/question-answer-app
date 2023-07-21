import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import styles from './QuestionItem.module.css';
import {ROUTE_LOGIN} from 'utils/consts';
import {formatDate} from 'utils/pages/questions/format-date';
import userAvatarImg from 'static/pages/questions/userAvatar.svg';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';

const QuestionItem = ({question}) => {
    const navigate = useNavigate();
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

    const {isAuth} = useSelector(state => state.authReducer)
    const {categories} = useSelector(state => state.categoriesReducer);
    const pathToCategory = selectedCategory && selectedCategory.name.toLowerCase().replace(/\s+/g, '');
    const itemCategory = categories.find(category => category.id === question.categoryId);

    const handleRedirectQuestion = (questionId) => {
        if (isAuth) {
            sessionStorage.setItem('questionId', questionId);
            navigate(`/subject/${pathToCategory}/${questionId}`);
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