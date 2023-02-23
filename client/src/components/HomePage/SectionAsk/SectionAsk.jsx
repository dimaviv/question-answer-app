import React, {useState} from 'react';
import classes from './SectionAsk.module.css'
import searchImg from "../../../static/Icons/search.svg";

const SectionAsk = () => {
    const [searchAnswer, setSearchAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearchAnswer(e.target.value);
    }

    return (
        <div className={classes.sectionAsk}>
            <div className={classes.contentContainer}>
                <div className={classes.askQuestionContainer}>
                    <div className={classes.mainTitleContainer}>
                        <h1 className={classes.title}>
                            What is your question?
                        </h1>
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
                                    <img src={searchImg} alt='' />
                                </button>
                            </div>
                            <label htmlFor='search-input'>
                                Get an answer to your question and get a cash reward for it
                            </label>
                        </form>
                    </div>
                </div>
                <div className={classes.secondTitleContainer}>
                    <div className={classes.decorBox}>
                        <h1 className={classes.title}>
                            How does it work?
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SectionAsk;