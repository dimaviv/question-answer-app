import {useNavigate} from 'react-router-dom';
import {useRef, useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';

import {createQuestion} from 'api/questionAPI';
import {StyledSectionAskQuestion} from './StyledSectionAskQuestion';
import CategoriesSelect from 'components/ui/select/categories/Categories';

const SectionAskQuestion = () => {
    const navigate = useNavigate();
    const formQuestionRef = useRef(null);

    const queryClient = useQueryClient();
    const mutation = useMutation(
        newQuestion => createQuestion(newQuestion),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['questions'])
                    .then(() => {
                        formQuestionRef.current.reset();
                    });
            }
        }
    );

    const [errors, setErrors] = useState({});

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requiredFields = ['text', 'categoryId'];
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
            const fileInput = document.getElementById('questionFile');
            const file = fileInput.files[0];
            formData.append('file', file ? file : null);

            const fields = Object.fromEntries(formData);
            mutation.mutate(fields);
        }
    };

    return (
        <StyledSectionAskQuestion>
            <div className={'sectionAskQuestion__content'}>
                <div className={'askQuestionContainer'}>
                    <form className={'askQuestionForm'}
                          ref={formQuestionRef}
                          onSubmit={handleSubmitForm}
                    >
                      <textarea id={'questionText'}
                                name={'text'}
                                className={'questionText'}
                                placeholder='I want to ask...'
                      />
                        {errors.text &&
                            <label htmlFor={'questionText'}>
                                {errors.text}
                            </label>
                        }
                        <CategoriesSelect id={'questionCategoryId'} />
                        {errors.categoryId &&
                            <label htmlFor={'questionCategoryId'}>
                                {errors.categoryId}
                            </label>
                        }
                        <div className={'btnBox'}>
                            <div className={'leftSideBtnBox'}>
                                <input id={'questionFile'}
                                       name={'file'}
                                       type='file'
                                />
                            </div>
                            <div className={'rightSideBtnBox'}>
                                <button type='submit'
                                        className={'btnSend'}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </StyledSectionAskQuestion>
    );
};

export default SectionAskQuestion;