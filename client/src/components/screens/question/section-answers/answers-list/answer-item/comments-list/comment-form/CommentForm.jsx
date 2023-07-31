import {useMutation, useQueryClient} from 'react-query';
import {useRef, useState} from 'react';

import {StyledCommentForm} from './StyledCommentForm';
import {createComment} from 'api/comment';

const CommentForm = ({questionId, answerId}) => {
    const formCommentRef = useRef(null);
    const queryClient = useQueryClient();
    const mutation = useMutation(
        newComment => createComment(newComment),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
                    .then(() => {
                        formCommentRef.current.reset();
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
            formData.append('answerId', answerId);
            formData.append('questionId', questionId);
            const fields = Object.fromEntries(formData);
            mutation.mutate(fields);
        }
    };
    return (
        <StyledCommentForm ref={formCommentRef}
                           onSubmit={handleSubmit}
        >
            <div className={'content'}>
                <input id={'commentText'}
                       name={'text'}
                       className={`sendForm__inputComment ${errors.text ? 'error' : ''}`}
                       type='text'
                       placeholder='Comment'
                />
                <button type={'submit'}
                        className={'sendForm__btnSend'}
                >
                    Send
                </button>
            </div>
            {errors.text && (
                <label htmlFor={'commentText'}
                       className={'errorText'}
                >
                    {errors.text}
                </label>
            )}
        </StyledCommentForm>
    );
};

export default CommentForm;