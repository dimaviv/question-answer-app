import React from 'react';
import classes from './QuestionsPage.module.css'
import SectionCategoryAsk from "../../components/questions-page/section-category-ask/SectionCategoryAsk";
import SectionQuestionsList from "../../components/questions-page/section-questions-list/SectionQuestionsList";

const QuestionsPage = () => {


    return (
        <div className={classes.questionsPage}>
            <SectionCategoryAsk/>
            <SectionQuestionsList/>
        </div>
    );
};

export default QuestionsPage;