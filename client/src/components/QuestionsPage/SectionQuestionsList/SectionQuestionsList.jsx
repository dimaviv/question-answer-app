import React from 'react';
import classes from './SectionQuestionsList.module.css'
import decorTriangleImg from "../../../static/HomePage/Decor/decor__triangle.svg";

const SectionQuestionsList = () => {
    return (
        <div className={classes.sectionQuestionList}>
            <div className={classes.sectionDecorTriangle}>
                <img src={decorTriangleImg} alt=''/>
            </div>
            <div className={classes.askContainer}>
                <div className={classes.titleContainer}>
                    <h2 className={classes.titleText}>Answer questions</h2>
                    <div className={classes.decorBox}>
                        <h2 className={classes.decorBox__text}>
                            Or
                        </h2>
                    </div>
                    <h2 className={classes.titleText}>Ask your own</h2>
                </div>
                <button>
                    I want to ask...
                </button>
            </div>
        </div>
    );
};

export default SectionQuestionsList;