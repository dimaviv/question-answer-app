import React from 'react';
import styles from "./HomePage.module.css";
import SectionAsk from "../../components/home-page/section-ask/SectionAsk";
import SectionExplain from "../../components/home-page/section-explain/SectionExplain";

const HomePage = () => {

    return (
        <div className={styles.homePage}>
            <SectionAsk/>
            <SectionExplain/>
        </div>
    );
};

export default HomePage;