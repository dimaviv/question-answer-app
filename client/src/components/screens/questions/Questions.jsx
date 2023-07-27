import SectionCategoryAsk from './section-category-ask/SectionCategoryAsk';
import SectionQuestionsList from './section-questions-list/SectionQuestionsList';
import {StyledQuestions} from './StyledQuestions';

const Questions = () => {

    return (
        <StyledQuestions>
            <SectionCategoryAsk />
            <SectionQuestionsList />
        </StyledQuestions>
    );
};

export default Questions;