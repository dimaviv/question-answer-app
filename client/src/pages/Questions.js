import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategories, fetchQuestions} from "../http/questionAPI";
import QuestionItem from "../components/QuestionItem";
import Pages from "../components/Pages";

const Questions = observer(() => {
    const {question} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => question.setCategories(data))
        fetchQuestions(null, null, 5, 1).then(data => {
            question.setQuestions(data.rows)
            question.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchQuestions(question.selectedCategory?.id, null, 5, question.page).then(data => {
            question.setQuestions(data.rows)
            question.setTotalCount(data.count)
        })
    }, [question.page, question.selectedCategory])

    return (
        <div>
            <ul>
                <li
                    onClick={() => question.setSelectedCategory(null)}>Всі
                </li>
                {question.categories.map(category =>
                    <li
                        onClick={() => question.setSelectedCategory(category)}>{category.name}</li>
                )}
            </ul>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-12 pb-4">
                        <h1>Questions</h1>
                        {question.questions.map(qn =>
                            <QuestionItem key={qn.id} question={qn}/>
                        )}
                    </div>
                </div>
            </div>
            <Pages/>
        </div>
    );
});

export default Questions;