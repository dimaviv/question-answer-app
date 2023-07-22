import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {useActions} from 'hooks/useActions';
import {fetchOneQuestion} from 'api/questionAPI';
import HomePage from 'components/ui/loading/home-page/HomePage';
import {ROUTE_ERROR} from 'utils/consts';
import Question from 'components/screens/question/Question';

const QuestionPage = () => {
    const navigate = useNavigate();
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

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
        isLoading ? (
            <HomePage />
        ) : (
            <Question />
        )
    );
};

export default QuestionPage;