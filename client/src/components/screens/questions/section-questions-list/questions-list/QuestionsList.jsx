import {useSelector} from 'react-redux';

import styles from './QuestionsList.module.css';
import Loader from 'components/ui/loaders/loader/Loader';
import QuestionItem from './question-item/QuestionItem';
import {checkArr} from 'utils/check-arr';

const QuestionsList = ({isLoading}) => {
    const {questions} = useSelector(state => state.questionsReducer);

    return (
        <div className={styles.questionsList}>
            {isLoading ? (
                <Loader />
            ) : (
                checkArr(questions) ? (
                    questions.map((question) => (
                        <QuestionItem
                            key={question.id}
                            question={question}
                        />
                    ))
                ) : (
                    <div className={styles.emptyList}>
                        <p className={styles.emptyList__text}>
                            Be the first to ask a question in this category!
                        </p>
                    </div>
                )
            )}
        </div>
    );
};

export default QuestionsList;