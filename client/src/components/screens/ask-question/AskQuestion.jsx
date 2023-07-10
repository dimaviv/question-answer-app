import styles from './AskQuestion.module.css';
import SectionAskQuestion from './section-ask-question/SectionAskQuestion';

const AskQuestion = () => {
    return (
        <div className={styles.askQuestionPage}>
            <SectionAskQuestion/>
        </div>
    );
};

export default AskQuestion;