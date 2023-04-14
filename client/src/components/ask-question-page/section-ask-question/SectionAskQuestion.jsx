import React, {useState} from 'react';
import classes from './SectionAskQuestion.module.css'
import {createQuestion} from "http/questionAPI";
import {useNavigate} from "react-router-dom";
import useCategory from 'hooks/UseCategory';

const SectionAskQuestion = () => {
    const navigate = useNavigate()
    const selectedCategory = useCategory()

    const [questionText, setQuestionText] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

    const clearValues = () => {
        setQuestionText('')
        setSelectedFile(null)
    }

    const handleFileInput = e => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(selectedCategory && questionText !== '') {
            const newQuestion = {
                text: questionText,
                categoryId: selectedCategory.id,
                file: selectedFile
            }
            createQuestion(newQuestion)
                .then(
                    () => {
                        console.log('Question created')
                        clearValues()
                        navigate(`/categories/${selectedCategory.name.toLowerCase().replace(/\s+/g, "")}`)
                    }
                )
                .catch(
                    error => console.error('Error while getting data:', error)
                )
        }
    }

    return (
        <div className={classes.sectionAskQuestion}>
            <div className={classes.sectionAskQuestion__content}>
                <div className={classes.askQuestionContainer}>
                    <form
                        className={classes.askQuestionForm}
                        onSubmit={handleSubmitForm}
                    >
                        <div className={classes.questionTextBox}
                        >
                      <textarea
                          className={classes.questionText}
                          placeholder='I want to ask...'
                          value={questionText}
                          onChange={e => setQuestionText(e.target.value)}
                      />
                        </div>
                        <div className={classes.btnBox}>
                            <div className={classes.leftSideBtnBox}>
                                <input
                                    type='file'
                                    id="fileInput"
                                    value={selectedFile ? selectedFile.name : ''}
                                    onChange={handleFileInput}
                                />
                            </div>
                            <div className={classes.rightSideBtnBox}>
                                <button
                                    type='submit'
                                    className={classes.btnSend}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionAskQuestion;