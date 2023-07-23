import {StyledQuestionsLoading} from './StyledQuestions';

const QuestionsLoading = () => {
    const numQuestions = 5;

    const divElements = Array.from({length: numQuestions}, (_, index) => (
        <div key={index}></div>
    ));
    return (
        <StyledQuestionsLoading>
            {divElements}
        </StyledQuestionsLoading>
    );
};

export default QuestionsLoading;