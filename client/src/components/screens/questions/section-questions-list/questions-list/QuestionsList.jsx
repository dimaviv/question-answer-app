import {StyledQuestionsList} from './StyledQuestionsList';
import QuestionItem from './question-item/QuestionItem';

const QuestionsList = ({questions}) => {

    return (
        <StyledQuestionsList>
            {questions && questions.length > 0 ? (
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