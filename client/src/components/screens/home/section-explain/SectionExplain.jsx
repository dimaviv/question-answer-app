import React from 'react';
import styles from './SectionExplain.module.css';
import {ROUTE_HOME} from 'utils/consts';
import askQuestionImg from 'static/pages/home/explain-frame/askQuestion.svg';
import giveAnswerImg from 'static/pages/home/explain-frame/answerQuestion.svg';
import getMoneyImg from 'static/pages/home/explain-frame/getMoney.svg';
import {useSelector} from 'react-redux';

const SectionExplain = () => {
    const {isDarkMode} = useSelector(state => state.darkModeReducer)

    return (
        <div className={styles.sectionExplain}>
            <div className={`${styles.sectionExplain__decorTriangle} ${isDarkMode && styles.sectionExplain__decorTriangle_dark}`}></div>
            <div className={styles.sectionExplain__container}>
                <div className={styles.container__explainFrame}>
                    <p className={styles.explainFrame__text}>
                        <span>Ask</span> questions
                    </p>
                    <img src={askQuestionImg}
                         alt="Ask question"
                    />
                </div>
                <div className={styles.container__explainFrame}>
                    <img src={giveAnswerImg}
                         alt="Give answers"
                    />
                    <p className={styles.explainFrame__text}>
                        <span>Give</span> answers
                    </p>
                </div>
                <div className={styles.container__explainFrame}>
                    <p className={styles.explainFrame__text}>
                        <span>Get</span> real money
                    </p>
                    <img src={getMoneyImg}
                         alt="Get real money"
                    />
                </div>
                <div className={styles.container__showExplainFrame}>
                    <a className={styles.showExplainFrame__text}
                        href={ROUTE_HOME}
                    >
                        See our reward system >>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionExplain;