import {useState} from 'react';
import searchImg from 'static/icons/search.svg';
import {StyledSectionAsk} from './StyledSectionAsk';

const SectionAsk = () => {
    const [searchAnswer, setSearchAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearchAnswer(e.target.value);
    };

    return (
        <StyledSectionAsk>
            <div className={'sectionAsk__container'}>
                <div className={'container__askQuestion'}>
                    <div className={'askQuestion__titleContainer'}>
                        <h1 className={'titleContainer__text'}>
                            What is your question?
                        </h1>
                    </div>
                    <div className={'askQuestion__searchContainer'}>
                        <form className={'searchContainer__searchForm'}
                              onSubmit={handleSubmit}
                        >
                            <div className={'searchForm__container'}>
                                <input
                                    className={'container__inputQuestion'}
                                    id="search-input"
                                    type="text"
                                    placeholder="Type your question..."
                                    value={searchAnswer}
                                    onChange={handleChange}
                                />
                                <button className={'container__btnSearch'}>
                                    <img src={searchImg}
                                         alt=""
                                    />
                                </button>
                            </div>
                            <label className={'searchForm__bottomText'}
                                   htmlFor="search-input"
                            >
                                Get an answer to your question and get a cash reward for it
                            </label>
                        </form>
                    </div>
                </div>
                <div className={'container__explainTitle'}>
                    <div className={'explainTitle__decorTextBox'}>
                        <h1 className={'decorTextBox__text'}>
                            How does it work?
                        </h1>
                    </div>
                </div>
            </div>
        </StyledSectionAsk>

    );
};

export default SectionAsk;