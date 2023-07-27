import styles from './Home.module.css';
import SectionAsk from './section-ask/SectionAsk';
import SectionExplain from './section-explain/SectionExplain';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <SectionAsk />
            <SectionExplain />
        </div>
    );
};

export default Home;