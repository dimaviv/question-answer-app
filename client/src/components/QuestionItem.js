import React from 'react';
import {Card, Image} from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import {QUESTION_ROUTE} from "../utils/consts";

const QuestionItem = ({question}) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push(QUESTION_ROUTE + '/' + question.id)}>
            <Card style={{width:500, cursor:'pointer'}} border={"light"}>
                <div className="text-justify comment mt-4 float-right">
                <Image width={50} height={50} src={'https://i.imgur.com/CFpa3nK.jpg'} />
                    <h4>{question.userId}</h4> <span>- {question.createdAt}</span>
                    <p>{question.text}</p>
                </div>
            </Card>
        </div>
    );
};

export default QuestionItem;