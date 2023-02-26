import React, {useCallback, useEffect, useState} from 'react';
import classes from './SectionCategoryAsk.module.css'
import searchImg from "../../../static/Icons/search.svg";
import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/UseActions";

const SectionCategoryAsk = () => {
    const {categories, selectedCategory} = useSelector(state => state.categoriesReducer)

    const {setSelectedCategory} = useActions()

    const fetchCategories = useCallback(() => {
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === parseInt(localStorage.getItem('categoryId'))) {
                setSelectedCategory(categories[i])
            }
        }
    }, [categories, setSelectedCategory]);

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const [searchAnswer, setSearchAnswer] = useState('');

    const handleSubmit = (e) => {
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
                        <form className={classes.searchForm} onSubmit={handleSubmit}>
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