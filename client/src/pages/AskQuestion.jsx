import useCategory from "hooks/UseCategory";
import AskQuestion from 'components/screens/ask-question/AskQuestion';

const AskQuestionPage = () => {
    useCategory();

    return (
        <AskQuestion />
    );
};

export default AskQuestionPage;