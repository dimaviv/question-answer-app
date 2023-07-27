import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';

import {createQuestion} from 'api/questionAPI';
import {StyledSectionAskQuestion} from './StyledSectionAskQuestion';

const SectionAskQuestion = () => {
    const navigate = useNavigate();
    const {selectedCategory} = useSelector(state => state.categoriesReducer);

    const queryClient = useQueryClient();
    const mutation = useMutation(
        newQuestion => createQuestion(newQuestion),
        {
            onSuccess: () => queryClient.invalidateQueries(['questions'])
        }
    );

    const [errors, setErrors] = useState({});

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requiredFields = ['text'];
        let isValid = true;

        if (selectedCategory && !(Object.keys(selectedCategory).length > 0)) {
            isValid = false;
        }
        for (const field of requiredFields) {
            if (!formData.get(field).trim()) {
                isValid = false;
                setErrors(prevState => ({...prevState, [field]: 'This field is required'}));
            } else {
                setErrors((prevErrors) => ({...prevErrors, [field]: ''}));
            }
        }

        if (isValid) {
            formData.append('categoryId', selectedCategory.id);
            const fileInput = document.getElementById('questionFile');
            const file = fileInput.files[0];
            formData.append('file', file ? file : null);

            const fields = Object.fromEntries(formData);
            mutation.mutate(fields);

            e.target.reset();
        }
    };

    return (
        <StyledSectionAskQuestion>
            <div className={'sectionAskQuestion__content'}>
                <div className={'askQuestionContainer'}>
                    <form className={'askQuestionForm'}
                          onSubmit={handleSubmitForm}
                    >
                        <div className={'questionTextBox'}
                        >
                      <textarea id={'questionText'}
                                name={'text'}
                                className={'questionText'}
                                placeholder='I want to ask...'
                      />
                            {errors.text &&
                                <label id={'textError'}
                                       htmlFor={'questionText'}
                                >
                                    {errors.text}
                                </label>
                            }
                        </div>
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