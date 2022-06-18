import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCategories, fetchQuestions} from "../http/questionAPI";
import QuestionItem from "../components/QuestionItem";

const Questions = observer(() => {
    const {question} = useContext(Context)

    useEffect(()=>{
        fetchCategories().then(data => question.setCategories(data))
        fetchQuestions().then(data => question.setQuestions(data.rows))
    }, [])

    return (
        <div>
            <ul>
                {question.categories.map(category =>
                    <li>{category.title}</li>
                )}
            </ul>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-12 pb-4">
                        <h1>Questions</h1>
                        {question.questions.map( qn =>
                            <QuestionItem key={qn.id} question={qn} />

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Questions;