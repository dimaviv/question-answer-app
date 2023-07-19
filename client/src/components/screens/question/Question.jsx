import classes from './Question.module.css';
import SectionAnswers from './section-answers/SectionAnswers';

const Question = () => {
    return (
        <div className={classes.questionPage}>
            <SectionAnswers />
        </div>
    );
};

export default Question;