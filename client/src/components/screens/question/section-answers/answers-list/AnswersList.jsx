import React, {useEffect, useState} from 'react';
import styles from './AnswersList.module.css';
import AnswerItem from './answer-item/AnswerItem';
import _ from 'lodash';

const AnswersList = ({question}) => {
    const [sortedAnswers, setSortedAnswers] = useState([]);

    useEffect(() => {
        if (question.answers) {
            setSortedAnswers(_.sortBy(question.answers, 'createdAt'));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [question.answers, question]);
    return (
        <div className={styles.answersList}>
            {sortedAnswers.map(answer =>
                <AnswerItem
                    key={answer.id}
                    answer={answer}
                />
            )}
        </div>
    );
};

export default AnswersList;