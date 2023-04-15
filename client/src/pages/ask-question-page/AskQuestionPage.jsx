import React from 'react';
import styles from './AskQuestionPage.module.css'
import SectionAskQuestion from "components/ask-question-page/section-ask-question/SectionAskQuestion";
import useCategory from "hooks/UseCategory";

const AskQuestionPage = () => {
    useCategory();

    return (
        <div className={styles.askQuestionPage}>
           <SectionAskQuestion/>
        </div>
    );
};

export default AskQuestionPage;