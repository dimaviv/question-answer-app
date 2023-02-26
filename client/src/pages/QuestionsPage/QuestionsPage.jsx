import React from 'react';
import classes from './QuestionsPage.module.css'
import SectionCategoryAsk from "../../components/QuestionsPage/SectionCategoryAsk/SectionCategoryAsk";
import SectionQuestionsList from "../../components/QuestionsPage/SectionQuestionsList/SectionQuestionsList";

const QuestionsPage = () => {


    return (
        <div className={classes.questionsPage}>
            <SectionCategoryAsk/>
            <SectionQuestionsList/>
        </div>
    );
};

export default QuestionsPage;