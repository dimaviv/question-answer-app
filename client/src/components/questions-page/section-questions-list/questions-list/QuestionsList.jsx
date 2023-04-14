import React from 'react';
import styles from './QuestionsList.module.css';
import Loader from 'components/UI/loaders/loader/Loader';
import QuestionItem from './../question-item/QuestionItem';
import {useSelector} from 'react-redux';

const QuestionsList = ({isLoading}) => {
    const {questions} = useSelector(state => state.questionsReducer);

    return (
        <div className={styles.questionsList}>
            {isLoading
                ?
                <Loader />
                :
                questions.map((question) => (
                    <QuestionItem
                        key={question.id}
                        question={question}
                    />
                ))}
        </div>
    );
};

export default QuestionsList;