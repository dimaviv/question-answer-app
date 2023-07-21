import {useEffect} from 'react';

import styles from './Questions.module.css';
import SectionCategoryAsk from './section-category-ask/SectionCategoryAsk';
import SectionQuestionsList from './section-questions-list/SectionQuestionsList';
import Layout from 'components/layout/Layout';
import useCategory from 'hooks/UseCategory';
import {COMPANY_NAME} from 'utils/consts';

const Questions = () => {
    const selectedCategory = useCategory();

    useEffect(() => {
        document.title = `${selectedCategory ? selectedCategory.name : "..."} | ${COMPANY_NAME}`;
    }, [selectedCategory]);

    return (
        <Layout title={selectedCategory ? selectedCategory.name : "..."}
                description={`Page about ${selectedCategory}`}
        >
            <div className={styles.questionsPage}>
                <SectionCategoryAsk />
                <SectionQuestionsList />
            </div>
        </Layout>
    );
};

export default Questions;