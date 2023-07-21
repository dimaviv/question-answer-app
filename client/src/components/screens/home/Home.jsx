import styles from "./Home.module.css";
import SectionAsk from './section-ask/SectionAsk';
import SectionExplain from './section-explain/SectionExplain';
import Layout from 'components/layout/Layout';

const Home = () => {
    return (
        <Layout title={'Home'} description={'Welcome!'}>
            <div className={styles.homePage}>
                <SectionAsk/>
                <SectionExplain/>
            </div>
        </Layout>
    );
};

export default Home;