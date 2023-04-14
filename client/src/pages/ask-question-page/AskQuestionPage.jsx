import React from 'react';
import classes from './AskQuestionPage.module.css'
import SectionAskQuestion from "components/ask-question-page/section-ask-question/SectionAskQuestion";
import useCategory from "hooks/UseCategory";

const AskQuestionPage = () => {
    useCategory();

    return (
        <div className={classes.askQuestionPage}>
           <SectionAskQuestion/>
        </div>
    );
};

export default AskQuestionPage;