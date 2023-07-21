import {useState} from 'react';

import searchImg from 'static/icons/search.svg';
import useCategory from 'hooks/UseCategory';
import {StyledSectionCategoryAsk} from './StyledSectionCategoryAsk';

const SectionCategoryAsk = () => {
    const selectedCategory = useCategory();
    const [searchAnswer, setSearchAnswer] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearchAnswer(e.target.value);
    };

    return (
        <StyledSectionCategoryAsk>
            <div className={'sectionCategoryAsk__container'}>
                <div className={'container__askQuestionContainer'}>
                    <div className={'askQuestionContainer__titleContainer'}>
                        <div className={'titleContainer__decorTextBox'}>
                            <h1 className={'decorTextBox__text'}>
                                {selectedCategory && selectedCategory.name}
                            </h1>
                        </div>
                    </div>
                    <div className={'askQuestionContainer__searchContainer'}>
                        <form className={'searchContainer__searchForm'}
                              onSubmit={handleSubmitForm}
                        >
                            <div className={'searchForm__container'}>
                                <input className={'container__inputQuestion'}
                                       id="search-input"
                                       type="text"
                                       placeholder="Type your question..."
                                       value={searchAnswer}
                                       onChange={handleChange}
                                />
                                <button className={'container_btnSearch'}>
                                    <img src={searchImg}
                                         alt=""
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyledSectionCategoryAsk>
    );
};

export default SectionCategoryAsk;