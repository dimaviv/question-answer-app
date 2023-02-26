import React from 'react';
import classes from './QuestionsPage.module.css'
import SectionCategoryAsk from "../../components/QuestionsPage/SectionCategoryAsk/SectionCategoryAsk";

const QuestionsPage = () => {


    return (
        <div className={classes.questionsPage}>
            <SectionCategoryAsk/>
        </div>
    );
};

export default QuestionsPage;