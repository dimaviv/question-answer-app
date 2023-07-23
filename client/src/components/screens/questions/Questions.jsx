import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import SectionCategoryAsk from './section-category-ask/SectionCategoryAsk';
import SectionQuestionsList from './section-questions-list/SectionQuestionsList';
import Layout from 'components/layout/Layout';
import {COMPANY_NAME} from 'utils/consts';
import {StyledQuestions} from './StyledQuestions';

const Questions = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

    useEffect(() => {
        document.title = `${Object.keys(selectedCategory).length !== 0 ? selectedCategory.name : "..."} | ${COMPANY_NAME}`;
    }, [selectedCategory]);

    return (
        <Layout title={`${Object.keys(selectedCategory).length !== 0 ? selectedCategory.name : "..."} | ${COMPANY_NAME}`}
                description={`Page with questions about ${selectedCategory}`}
        >
            <StyledQuestions>
                <SectionCategoryAsk />
                <SectionQuestionsList />
            </StyledQuestions>
        </Layout>
    );
};

export default Questions;