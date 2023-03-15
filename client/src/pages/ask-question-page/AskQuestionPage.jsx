import React from 'react';
import classes from './AskQuestionPage.module.css'
import SectionAskQuestion from "../../components/ask-question-page/section-ask-question/SectionAskQuestion";

const AskQuestionPage = () => {

    return (
        <div className={classes.askQuestionPage}>
           <SectionAskQuestion/>
        </div>
    );
};

export default AskQuestionPage;