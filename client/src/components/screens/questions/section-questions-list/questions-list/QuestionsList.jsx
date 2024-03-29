import QuestionItem from './question-item/QuestionItem';
import {checkArr} from 'utils/check-arr';
import {StyledQuestionsList} from './StyledQuestionsList';

const QuestionsList = ({questions}) => {

    return (
        <StyledQuestionsList>
            {checkArr(questions) ? (
                questions.map((question) => (
                    <QuestionItem key={question.id}
                                  question={question}
                    />
                ))
            ) : (
                <div className={'emptyList'}>
                    <p className={'emptyList__text'}>
                        Be the first to ask a question in this category!
                    </p>
                </div>
            )}
        </StyledQuestionsList>
    );
};

export default QuestionsList;