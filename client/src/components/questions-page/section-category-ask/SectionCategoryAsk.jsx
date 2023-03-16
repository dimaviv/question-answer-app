import React, {useState} from 'react';
import classes from './SectionCategoryAsk.module.css'
import searchImg from "../../../static/icons/search.svg";
import {useSelector} from "react-redux";

const SectionCategoryAsk = () => {
    const [searchAnswer, setSearchAnswer] = useState('');
    const {selectedCategory} = useSelector(state => state.categoriesReducer)

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearchAnswer(e.target.value);
    }

    return (
        <div className={classes.sectionCategoryAsk}>
            <div className={classes.contentContainer}>
                <div className={classes.askQuestionContainer}>
                    <div className={classes.mainTitleContainer}>
                        <div className={classes.decorBox}>
                            <h1 className={classes.title}>
                                {selectedCategory.name}
                            </h1>
                        </div>
                    </div>
                    <div className={classes.searchFormContainer}>
                        <form className={classes.searchForm} onSubmit={handleSubmitForm}>
                            <div className={classes.searchBtnBox}>
                                <input
                                    id='search-input'
                                    type='text'
                                    placeholder='Type your question...'
                                    value={searchAnswer}
                                    onChange={handleChange}
                                />
                                <button type='submit'>
                                    <img src={searchImg} alt=''/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCategoryAsk;