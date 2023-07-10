import React, {useState} from 'react';
import styles from './SectionAnswers.module.css';
import {useSelector} from 'react-redux';
import AnswersList from './answers-list/AnswersList';
import {ROUTE_LOGIN} from 'utils/consts';
import {formatDate} from 'utils/pages/questions/format-date';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import userAvatarImg from 'static/pages/questions/userAvatar.svg';
import reportBtnImg from 'static/pages/question/reportBtn.svg';
import reportBtnHoverImg from 'static/pages/question/reportBtnHover.svg';

const SectionAnswers = () => {
    const {question} = useSelector(state => state.questionsReducer);
    const {questionCategory} = useSelector(state => state.categoriesReducer);

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
        <div className={styles.sectionAnswers}>
            <div className={styles.sectionAnswers__container}>
                <div className={styles.container__questionContainer}>
                    <div className={styles.questionContainer__titleContainer}>
                        <div className={styles.titleContainer__avatarBox}>
                            <img src={userAvatarImg}
                                 alt=""
                            />
                        </div>
                        <a className={styles.titleContainer__userName}
                           href={ROUTE_LOGIN}
                        >
                            {question.user.login ? question.user.login : getEmailPrefix(question.user.email)}
                        </a>
                        <p className={styles.titleContainer__categoryName}>
                            {questionCategory && questionCategory.name}
                        </p>
                        <p className={styles.titleContainer__dateAdd}>
                            {formatDate(question.createdAt)}
                        </p>
                        <button className={styles.titleContainer__btnReport}
                                onClick={handleReport}
                        >
                            <img
                                src={(isReport && reportBtnHoverImg) || (hoveredReport ? reportBtnHoverImg : reportBtnImg)}
                                alt="report"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </button>
                    </div>
                    <div className={styles.questionContainer__textContainer}>
                        <p className={styles.textContainer__text}>
                            {question.text}
                        </p>
                    </div>
                    <button className={styles.questionContainer__btnAnswer}>
                        Answer
                    </button>
                </div>
                <div className={styles.container__answersTitleContainer}>
                    <div className={styles.answersTitleContainer__decorTextBox}>
                        <h1 className={styles.decorTextBox__text}>
                            {(question.answers && question.answers.length > 0)
                                ?
                                'Answers'
                                :
                                'Write your answer first'
                            }
                        </h1>
                    </div>
                </div>
                {question.answers && question.answers.length > 0 &&
                    <AnswersList />
                }
            </div>
        </div>
    );
};

export default SectionAnswers;