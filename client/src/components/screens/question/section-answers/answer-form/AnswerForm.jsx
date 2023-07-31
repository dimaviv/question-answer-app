import {useRef, useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';

import {StyledAnswerForm} from './StyledAnswerForm';
import {createAnswer} from 'api/answer';

const AnswerForm = ({questionId, setIsAnswerForm}) => {
    const formAnswerRef = useRef(null);
    const queryClient = useQueryClient();
    const mutation = useMutation(
        newAnswer => createAnswer(newAnswer),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('question')
                    .then(() => {
                        formAnswerRef.current.reset();
                        setIsAnswerForm(false);
                    });
            }
        }
    );
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requiredFields = ['text'];
        let isValid = true;
        let newErrors = {};

        if (!questionId) {
            isValid = false;
        }

        for (const field of requiredFields) {
            if (!formData.get(field).trim()) {
                isValid = false;
                newErrors = {...newErrors, [field]: 'This field is required'};
            } else {
                newErrors = {...newErrors, [field]: ''};
            }
        }

        setErrors(newErrors);

        if (isValid) {
            formData.append('questionId', questionId);
            const fileInput = document.getElementById('answerFile');
            const file = fileInput.files[0];
            formData.append('file', file ? file : null);
            const fields = Object.fromEntries(formData);
            mutation.mutate(fields);
        }
    };
    return (
        <StyledAnswerForm ref={formAnswerRef}
                          onSubmit={handleSubmit}
        >
            <textarea id={'answerText'}
                      name={'text'}
                      placeholder='Your answer..'
            />
            {errors.text && (
                <label htmlFor={'answerText'}>
                    {errors.text}
                </label>
            )}
            <input id={'answerFile'}
                   name={'file'}
                   type='file'
            />
            <button type={'submit'}
                    className={'submitBtn'}
            >
                Submit
            </button>
        </StyledAnswerForm>
    );
};

export default AnswerForm;