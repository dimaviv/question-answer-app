import React from 'react';
import classes from './QuestionPage.module.css'
import SectionAnswers from "../../components/question-page/section-answers/SectionAnswers";

const QuestionPage = () => {
    return (
        <div className={classes.questionPage}>
            <SectionAnswers/>
        </div>
    );
};

export default QuestionPage;