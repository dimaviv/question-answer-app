import React, {useCallback, useEffect, useState} from 'react';
import classes from "./SectionCategories.module.css";
import {useSelector} from "react-redux";
import decorTriangle from "../../../static/header/decor/decor__triangle.svg"
import {useNavigate} from "react-router-dom";
import {useActions} from "../../../hooks/UseActions";
import {fetchCategories} from "../../../http/questionAPI";

const SectionCategories = () => {
    const navigate = useNavigate()

    const {categories} = useSelector(state => state.categoriesReducer)

    const {setSelectedCategory, setCategories} = useActions()

    const [hiddenCategories, setHiddenCategories] = useState(true)

    const onCategoryClick = (category) => {
        setSelectedCategory(category)
        navigate(`/${category.name.toLowerCase()}/${category.id}`)
    }

    const fetchCategoriesCallback = useCallback(() => {
        fetchCategories().then(data =>
            setCategories(data)
        )
    }, [setCategories])

    useEffect(() => {
        fetchCategoriesCallback()
    }, [fetchCategoriesCallback])


    return (
        <div className={classes.sectionCategories}>
            <div className={classes.contentContainer}>
                <div className={`${classes.categories} ${!hiddenCategories && classes.show}`}>
                    {categories.map(category =>
                        <div className={classes.category} key={category.id}>
                            <img src={process.env.REACT_APP_API_URL + category.image + '.png'} alt={category.name} width={32} height={32}/>
                            <button
                                className={`${classes.category__text} ${!(window.location.href.search(`/${category.id}`) === -1) && classes.active}`}
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
                    <img src={decorTriangle} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default SectionCategories;