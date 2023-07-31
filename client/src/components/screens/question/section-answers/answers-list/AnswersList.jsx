import {useEffect, useState} from 'react';
import _ from 'lodash';

import AnswerItem from './answer-item/AnswerItem';
import {StyledAnswersList} from './StyledAnswersList';

const AnswersList = ({answers}) => {
    const [sortedAnswers, setSortedAnswers] = useState([]);

    useEffect(() => {
        if (answers) {
            setSortedAnswers(_.sortBy(answers, 'createdAt'));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answers])
    return (
        <StyledAnswersList>
            {sortedAnswers.map(answer =>
                <AnswerItem
                    key={answer.id}
                    answer={answer}
                />
            )}
        </StyledAnswersList>
    );
};

export default AnswersList;