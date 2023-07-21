import styles from './Question.module.css';
import SectionAnswers from './section-answers/SectionAnswers';

const Question = () => {
    return (
            <div className={styles.questionPage}>
                <SectionAnswers />
            </div>
    );
};

export default Question;