import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import SectionAskQuestion from './section-ask-question/SectionAskQuestion';
import Layout from 'components/layout/Layout';
import {COMPANY_NAME} from 'utils/consts';
import {StyledAskQuestion} from './StyledAskQuestion';

const AskQuestion = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

    useEffect(() => {
        document.title = `Ask a ${Object.keys(selectedCategory).length !== 0 ? selectedCategory.name.toLowerCase() : "..."} question | ${COMPANY_NAME}`;
    }, [selectedCategory]);
    return (
        <Layout title={`Ask a ${Object.keys(selectedCategory).length !== 0 ? selectedCategory.name.toLowerCase() : "..."} question | ${COMPANY_NAME}`}
                description={`Page where you can ask your question about ${selectedCategory.name}`}
        >
            <StyledAskQuestion>
                <SectionAskQuestion />
            </StyledAskQuestion>
        </Layout>
    );
};

export default AskQuestion;