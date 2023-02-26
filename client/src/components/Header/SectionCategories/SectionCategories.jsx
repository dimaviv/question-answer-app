import React, {useState} from 'react';
import classes from "./SectionCategories.module.css";
import {useSelector} from "react-redux";
import decorTriangle from "../../../static/Header/Decor/decor__triangle.svg"
import {useNavigate} from "react-router-dom";
import {ROUTE_QUESTIONS} from "../../../utils/consts";
import {useActions} from "../../../hooks/UseActions";

const SectionCategories = () => {
    const navigate = useNavigate()

    const {categories} = useSelector(state => state.categoriesReducer)

    const {setSelectedCategory} = useActions()

    const [hiddenCategories, setHiddenCategories] = useState(true)

    const onCategoryClick = (category) => {
        setSelectedCategory(category)
        navigate(ROUTE_QUESTIONS + `/${category.name}`)
    }


    return (
        <div className={classes.sectionCategories}>
            <div className={classes.contentContainer}>
                <div className={`${classes.categories} ${!hiddenCategories && classes.show}`}>
                    {categories.map(category =>
                        <div className={classes.category} key={category.id}>
                            <img src={category.img} alt={category.name} width={32} height={32}/>
                            <button
                                className={classes.category__text}
                                onClick={() => onCategoryClick(category)}
                            >
                                {category.name}
                            </button>
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