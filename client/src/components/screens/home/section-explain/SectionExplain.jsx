import {ROUTE_HOME} from 'utils/consts';
import askQuestionImg from 'static/pages/home/explain-frame/askQuestion.svg';
import giveAnswerImg from 'static/pages/home/explain-frame/answerQuestion.svg';
import getMoneyImg from 'static/pages/home/explain-frame/getMoney.svg';
import {StyledSectionExplain} from './StyledSectionExplain';

const SectionExplain = () => {
    return (
        <StyledSectionExplain>
            <div className={'sectionExplain__decorTriangle'}></div>
            <div className={'sectionExplain__container'}>
                <div className={'container__explainFrame'}>
                    <p className={'explainFrame__text'}>
                        <span>Ask</span> questions
                    </p>
                    <img src={askQuestionImg}
                         alt="Ask question"
                    />
                </div>
                <div className={'container__explainFrame'}>
                    <img src={giveAnswerImg}
                         alt="Give answers"
                    />
                    <p className={'explainFrame__text'}>
                        <span>Give</span> answers
                    </p>
                </div>
                <div className={'container__explainFrame'}>
                    <p className={'explainFrame__text'}>
                        <span>Get</span> real money
                    </p>
                    <img src={getMoneyImg}
                         alt="Get real money"
                    />
                </div>
                <div className={'container__showExplainFrame'}>
                    <a className={'showExplainFrame__text'}
                        href={ROUTE_HOME}
                    >
                        See our reward system
                    </a>
                </div>
            </div>
        </StyledSectionExplain>
    );
};

export default SectionExplain;