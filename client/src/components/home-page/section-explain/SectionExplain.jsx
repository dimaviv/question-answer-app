import React from 'react';
import classes from './SectionExplain.module.css'
import askQuestionImg from '../../../static/home-page/explain-frame/askQuestion.svg'
import giveAnswerImg from '../../../static/home-page/explain-frame/answerQuestion.svg'
import getMoneyImg from '../../../static/home-page/explain-frame/getMoney.svg'
import decorTriangleImg from '../../../static/home-page/decor/decor__triangle.svg'
import {ROUTE_HOME} from "../../../utils/consts";

const SectionExplain = () => {
    return (
        <div className={classes.sectionExplain}>
            <div className={classes.sectionDecorTriangle}>
                <img src={decorTriangleImg} alt=''/>
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.explainFrame}>
                    <p><span>Ask</span> questions</p>
                    <img src={askQuestionImg} alt='Ask question' />
                </div>
                <div className={classes.explainFrame}>
                    <img src={giveAnswerImg} alt='Give answers' />
                    <p><span>Give</span> answers</p>
                </div>
                <div className={classes.explainFrame}>
                    <p><span>Get</span> real money</p>
                    <img src={getMoneyImg} alt='Get real money' />
                </div>
                <div className={classes.showExplainFrame}>
                    <a href={ROUTE_HOME}>See our reward system >></a>
                </div>
            </div>
        </div>
    );
};

export default SectionExplain;