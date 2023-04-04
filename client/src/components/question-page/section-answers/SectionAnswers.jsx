import React, {useState} from 'react';
import styles from './SectionAnswers.module.css';
import userAvatarImg from '../../../static/questions-page/userAvatar.svg';
import {ROUTE_LOGIN} from '../../../utils/consts';
import {useSelector} from 'react-redux';
import {formatDate} from '../../../utils/questions-page/format-date';
import reportBtnImg from '../../../static/question-page/reportBtn.svg';
import reportBtnHoverImg from '../../../static/question-page/reportBtnHover.svg';
import AnswersList from './answers-list/AnswersList';

const SectionAnswers = () => {
    const {question} = useSelector(state => state.questionsReducer);
    const {questionCategory} = useSelector(state => state.categoriesReducer);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
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
                            userNick
                        </a>
                        <p className={styles.titleContainer__categoryName}>
                            {questionCategory && questionCategory.name}
                        </p>
                        <p className={styles.titleContainer__dateAdd}>
                            {formatDate(question.createdAt)}
                        </p>
                        <button className={styles.titleContainer__btnReport}>
                            <img
                                src={hovered ? reportBtnHoverImg : reportBtnImg}
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