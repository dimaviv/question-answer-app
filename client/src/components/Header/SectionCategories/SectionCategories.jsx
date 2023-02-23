import React, {useState} from 'react';
import classes from "./SectionCategories.module.css";
import {useSelector} from "react-redux";
import {ROUTE_LOGIN} from "../../../utils/consts";
import decorTriangle from "../../../static/Header/Decor/decor__triangle.svg"

const SectionCategories = () => {
    const {categories} = useSelector(state => state.categoriesReducer)

    const [hiddenCategories, setHiddenCategories] = useState(true)

    return (
        <div className={classes.sectionCategories}>
            <div className={classes.contentContainer}>
                <div className={`${classes.categories} ${!hiddenCategories && classes.show}`}>
                    {categories.map(category =>
                        <div className={classes.category} key={category.id}>
                            <img src={category.img} alt={category.name} width={32} height={32}/>
                            <a href={ROUTE_LOGIN} className={classes.category__text}>{category.name}</a>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.sectionBtn}>
                <div className={classes.btn__showAllCategories} onClick={() => setHiddenCategories(!hiddenCategories)}>
                    <img src={decorTriangle} alt='' />
                </div>
            </div>
        </div>
    );
};

export default SectionCategories;