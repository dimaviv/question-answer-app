import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneQuestion} from "../http/questionAPI";


const Question = () => {

    const [question, setQuestion] = useState({answers:[]})
    const {id} = useParams()

    useEffect(() => {
        fetchOneQuestion(id).then(data =>setQuestion(data))

    },[])

    return (
        <Container>
            <Card style={{width:500, cursor:'pointer'}} border={"light"}>
                <div className="text-justify comment mt-4 float-right">
                    <Image width={50} height={50} src={'https://i.imgur.com/CFpa3nK.jpg'} />
                    <h4>{question.userId}</h4> <span>- {question.createdAt}</span>
                    <p>{question.title}</p>
                </div>
            </Card>
            <h2>Ответы</h2>
            {question.answers.map(answer =>
                <Row className="ml-5" key={answer.id}>
                    <Card style={{width:500, cursor:'pointer'}} border={"light"}>
                        <div className="text-justify comment mt-4 float-right">
                            <Image width={50} height={50} src={'https://i.imgur.com/CFpa3nK.jpg'} />
                            <h4>{answer.userId}</h4> <span>- {answer.createdAt}</span>
                            <p>{answer.text}</p>
                        </div>
                    </Card>
                </Row>
            )}


        </Container>
    );
};

export default Question;