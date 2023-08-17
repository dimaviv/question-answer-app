import SectionAnswers from './section-answers/SectionAnswers';
import {StyledQuestion} from './StyledQuestion';
import Layout from 'components/layout/Layout';
import AdSenseAd from "../../ads/AdSense";

const Question = () => {
    return (
        <Layout title={'Question'} description={'Page with question'}>
            <StyledQuestion>
                <AdSenseAd/>
                <SectionAnswers/>
            </StyledQuestion>
        </Layout>
    );
};

export default Question;