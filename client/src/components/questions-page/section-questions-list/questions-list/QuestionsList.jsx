import React, {useEffect, useState} from 'react';
import styles from './QuestionList.module.css';
import Loader from '../../../UI/loaders/loader/Loader';
import QuestionItem from '../question-item/QuestionItem';
import _ from 'lodash';
import {useSelector} from 'react-redux';

const QuestionsList = ({isLoading}) => {
    const {questions} = useSelector(state => state.questionsReducer);
    const [sortedByTimeQuestions, setSortedByTimeQuestions] = useState([]);


    const fetchSortedByTimeQuestions = () => {
        if (questions && questions.length > 0) {
            setSortedByTimeQuestions(_.sortBy(questions, 'createdAt').reverse());
        } else {
            setSortedByTimeQuestions([]);
        }
    };

    useEffect(() => {
        fetchSortedByTimeQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questions]);

    return (
        <div className={styles.questionsList}>
            {isLoading
                ?
                <Loader />
                :
                sortedByTimeQuestions.map((question) => (
                    <QuestionItem
                        key={question.id}
                        question={question}
                    />
                ))}
        </div>
    );
};

export default QuestionsList;