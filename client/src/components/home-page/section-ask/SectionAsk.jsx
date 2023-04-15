import React, {useState} from 'react';
import styles from './SectionAsk.module.css';
import searchImg from 'static/icons/search.svg';

const SectionAsk = () => {
    const [searchAnswer, setSearchAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearchAnswer(e.target.value);
    };

    return (
        <div className={styles.sectionAsk}>
            <div className={styles.sectionAsk__container}>
                <div className={styles.container__askQuestion}>
                    <div className={styles.askQuestion__titleContainer}>
                        <h1 className={styles.titleContainer__text}>
                            What is your question?
                        </h1>
                    </div>
                    <div className={styles.askQuestion__searchContainer}>
                        <form className={styles.searchContainer__searchForm}
                              onSubmit={handleSubmit}
                        >
                            <div className={styles.searchForm__container}>
                                <input
                                    className={styles.container__inputQuestion}
                                    id="search-input"
                                    type="text"
                                    placeholder="Type your question..."
                                    value={searchAnswer}
                                    onChange={handleChange}
                                />
                                <button className={styles.container__btnSearch}>
                                    <img src={searchImg}
                                         alt=""
                                    />
                                </button>
                            </div>
                            <label className={styles.searchForm__bottomText}
                                   htmlFor="search-input"
                            >
                                Get an answer to your question and get a cash reward for it
                            </label>
                        </form>
                    </div>
                </div>
                <div className={styles.container__explainTitle}>
                    <div className={styles.explainTitle__decorTextBox}>
                        <h2 className={styles.decorTextBox__text}>
                            How does it work?
                        </h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SectionAsk;