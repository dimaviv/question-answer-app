import React, {useState} from 'react';
import styles from './SectionAskQuestion.module.css';
import {createQuestion} from 'http/questionAPI';
import {useNavigate} from 'react-router-dom';
import useCategory from 'hooks/UseCategory';

const SectionAskQuestion = () => {
    const navigate = useNavigate();
    const selectedCategory = useCategory();

    const [questionText, setQuestionText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const categoryId = selectedCategory ? selectedCategory.id : null;
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

    const clearValues = () => {
        setQuestionText('');
        setSelectedFile(null);
    };

    const handleFileInput = e => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (questionText !== '' && categoryId && currentUser) {
            const newQuestion = {
                text: questionText,
                userId: currentUser.id,
                categoryId: categoryId,
                file: selectedFile
            };
            createQuestion(newQuestion)
                .then(
                    () => {
                        console.log('Question created');
                        clearValues();
                        navigate(`/subject/${selectedCategory.name.toLowerCase().replace(/\s+/g, '')}`);
                    }
                )
                .catch(
                    error => console.error('Error while getting data:', error)
                );
        }
    };

    return (
        <div className={styles.sectionAskQuestion}>
            <div className={styles.sectionAskQuestion__content}>
                <div className={styles.askQuestionContainer}>
                    <form
                        className={styles.askQuestionForm}
                        onSubmit={handleSubmitForm}
                    >
                        <div className={styles.questionTextBox}
                        >
                      <textarea
                          className={styles.questionText}
                          placeholder="I want to ask..."
                          value={questionText}
                          onChange={e => setQuestionText(e.target.value)}
                      />
                        </div>
                        <div className={styles.btnBox}>
                            <div className={styles.leftSideBtnBox}>
                                <input
                                    type="file"
                                    id="fileInput"
                                    value={selectedFile ? selectedFile.name : ''}
                                    onChange={handleFileInput}
                                />
                            </div>
                            <div className={styles.rightSideBtnBox}>
                                <button
                                    type="submit"
                                    className={styles.btnSend}
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