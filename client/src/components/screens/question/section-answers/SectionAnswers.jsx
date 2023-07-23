import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';

import AnswersList from './answers-list/AnswersList';
import {fetchOneQuestion} from 'api/questionAPI';
import {checkArr} from 'utils/check-arr';
import {StyledSectionAnswers} from './StyledSectionAnswers';
import QuestionLoading from 'components/ui/loading/question/Question';
import QuestionItem from './question-item/QuestionItem';
import NotFoundPage from 'pages/NotFound';
import {useSelector} from 'react-redux';

const SectionAnswers = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer)
    const questionId = useParams().questionId;
    const {data: question, isLoading, isError} = useQuery(['question', questionId], () => fetchOneQuestion(questionId));

    if(!question || (question.categoryId !== selectedCategory.id)) {
        return (
            <NotFoundPage/>
        )
    }
    return (
        <StyledSectionAnswers>
            {(isLoading || isError || !question) ? (
                <QuestionLoading />
            ) : (
                <div className={'sectionAnswers__container'}>
                    <QuestionItem question={question} />
                    <div className={'container__answersTitleContainer'}>
                        <div className={'answersTitleContainer__decorTextBox'}>
                            <h1 className={'decorTextBox__text'}>
                                {checkArr(question.answers) ? (
                                    'Answers'
                                ) : (
                                    'Write your answer first'
                                )}
                            </h1>
                        </div>
                    </div>
                    {checkArr(question.answers) > 0 &&
                        <AnswersList question={question} />
                    }
                </div>
            )}
        </StyledSectionAnswers>
    );
};

export default SectionAnswers;