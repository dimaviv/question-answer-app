import React from 'react';
import classes from "./HomePage.module.css";
import SectionAsk from "../../components/home-page/section-ask/SectionAsk";
import SectionExplain from "../../components/home-page/section-explain/SectionExplain";

const HomePage = () => {

    return (
        <div className={classes.homePage}>
            <SectionAsk/>
            <SectionExplain/>
        </div>
    );
};

export default HomePage;