import React, {useEffect, useState} from 'react';
import classes from './QuestionPage.module.css';
import SectionAnswers from '../../components/question-page/section-answers/SectionAnswers';
import {useActions} from '../../hooks/UseActions';
import {fetchOneQuestion} from '../../http/questionAPI';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import LoaderPage from '../../components/UI/loaders/loader-page/LoaderPage';
import useCategory from '../../hooks/UseCategory';
import {ROUTE_ERROR} from '../../utils/consts';

const QuestionPage = () => {
    const navigate = useNavigate();
    const selectedCategory = useCategory();
    const [isLoading, setIsLoading] = useState(true);
    const {setQuestion, setQuestionCategory} = useActions();
    const questionId = useParams().questionId;
    const {categories} = useSelector(state => state.categoriesReducer);

    useEffect(() => {
        if (selectedCategory && questionId) {
            fetchOneQuestion(questionId)
                .then(data => {
                        if (data.categoryId === selectedCategory.id) {
                            setQuestion(data);
                            setQuestionCategory(categories.find((category) => category.id === data.categoryId));
                            setIsLoading(false);
                        } else {
                            throw new Error('PAGE NOT FOUND (404)');
                        }
                    }
                )
                .catch(error => {
                        console.error('Error while getting data:', error);
                        navigate(ROUTE_ERROR);
                    }
                );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory, questionId]);

    return (
        isLoading
            ?
            <LoaderPage />
            :
            <div className={classes.questionPage}>
                <SectionAnswers />
            </div>
    );
};

export default QuestionPage;