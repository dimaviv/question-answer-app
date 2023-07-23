import SectionAnswers from './section-answers/SectionAnswers';
import {StyledQuestion} from './StyledQuestion';
import Layout from 'components/layout/Layout';

const Question = () => {
    return (
        <Layout title={'Question'} description={'Page with question'}>
            <StyledQuestion>
                <SectionAnswers />
            </StyledQuestion>
        </Layout>
    );
};

export default Question;