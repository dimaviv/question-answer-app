import {useState} from 'react';

import styles from './SectionCategoryAsk.module.css';
import searchImg from 'static/icons/search.svg';
import useCategory from 'hooks/UseCategory';

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
        <div className={styles.sectionCategoryAsk}>
            <div className={styles.sectionCategoryAsk__container}>
                <div className={styles.container__askQuestionContainer}>
                    <div className={styles.askQuestionContainer__titleContainer}>
                        <div className={styles.titleContainer__decorTextBox}>
                            <h1 className={styles.decorTextBox__text}>
                                {selectedCategory && selectedCategory.name}
                            </h1>
                        </div>
                    </div>
                    <div className={styles.askQuestionContainer__searchContainer}>
                        <form className={styles.searchContainer__searchForm}
                              onSubmit={handleSubmitForm}
                        >
                            <div className={styles.searchForm__container}>
                                <input className={styles.container__inputQuestion}
                                       id="search-input"
                                       type="text"
                                       placeholder="Type your question..."
                                       value={searchAnswer}
                                       onChange={handleChange}
                                />
                                <button className={styles.container_btnSearch}>
                                    <img src={searchImg}
                                         alt=""
                                    />
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