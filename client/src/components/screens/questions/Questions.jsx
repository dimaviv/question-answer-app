import styles from './Questions.module.css';

import SectionCategoryAsk from './section-category-ask/SectionCategoryAsk';
import SectionQuestionsList from './section-questions-list/SectionQuestionsList';

const Questions = () => {
    return (
        <div className={styles.questionsPage}>
            <SectionCategoryAsk />
            <SectionQuestionsList />
        </div>
    );
};

export default Questions;