import React from 'react';
import classes from "./HomePage.module.css";
import SectionAsk from "../../components/HomePage/SectionAsk/SectionAsk";
import SectionExplain from "../../components/HomePage/SectionExplain/SectionExplain";

const HomePage = () => {


    return (
        <div className={classes.homePage}>
            <SectionAsk/>
            <SectionExplain/>
        </div>
    );
};

export default HomePage;