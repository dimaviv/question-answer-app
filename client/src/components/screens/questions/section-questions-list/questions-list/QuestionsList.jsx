import {useSelector} from 'react-redux';

import Loader from 'components/ui/loading/loader/Loader';
import QuestionItem from './question-item/QuestionItem';
import {checkArr} from 'utils/check-arr';
import {StyledQuestionsList} from './StyledQuestionsList';

const QuestionsList = ({isLoading}) => {
    const {questions} = useSelector(state => state.questionsReducer);

    return (
        <StyledQuestionsList>
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
                    <div className={'emptyList'}>
                        <p className={'emptyList__text'}>
                            Be the first to ask a question in this category!
                        </p>
                    </div>
                )
            )}
        </StyledQuestionsList>
    );
};

export default QuestionsList;