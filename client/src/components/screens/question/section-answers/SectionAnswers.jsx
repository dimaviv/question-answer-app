import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {useState} from 'react';
import {useSelector} from 'react-redux';

import AnswersList from './answers-list/AnswersList';
import {fetchOneQuestion} from 'api/question';
import {StyledSectionAnswers} from './StyledSectionAnswers';
import QuestionLoading from 'components/ui/loading/question/Question';
import QuestionItem from './question-item/QuestionItem';
import NotFoundPage from 'pages/NotFound';
import AnswerForm from './answer-form/AnswerForm';

const SectionAnswers = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer);
    const questionId = useParams().questionId;
    const {data: question, isLoading, isError} = useQuery(
        ['question', questionId],
        () => fetchOneQuestion(questionId)
    );
    const [isAnswerForm, setIsAnswerForm] = useState(false);

    if (!question || question.categoryId !== selectedCategory.id) {
        return (
            <NotFoundPage />
        );
    }
    return (
        <StyledSectionAnswers>
            {(isLoading || isError || !question) ? (
                <QuestionLoading />
            ) : (
                <div className={'sectionAnswers__container'}>
                    <QuestionItem question={question}
                                  selectedCategory={selectedCategory}
                                  isAnswerForm={isAnswerForm}
                                  setIsAnswerForm={setIsAnswerForm}
                    />
                    <div className={'container__answersTitleContainer'}>
                        <div className={'answersTitleContainer__decorTextBox'}>
                            <h1 className={'decorTextBox__text'}>
                                {question.answers.length > 0 ? (
                                    'Answers'
                                ) : (
                                    'Write your answer first'
                                )}
                            </h1>
                        </div>
                    </div>
                    {isAnswerForm && (
                        <AnswerForm questionId={questionId}
                                    setIsAnswerForm={setIsAnswerForm}
                        />
                    )}
                    {question.answers.length > 0 &&
                        <AnswersList answers={question.answers} />
                    }
                    {isAnswerForm && (
                        <div className={'answerBackground'}
                             onClick={() => setIsAnswerForm(false)}
                        >

                        </div>
                    )}
                </div>
            )}
        </StyledSectionAnswers>
    );
};

export default SectionAnswers;