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
    const {setCategories, setSelectedCategory} = useActions()

    const [hiddenCategories, setHiddenCategories] = useState(true)

    const handleRedirectCategory = (category) => {
        sessionStorage.setItem('categoryId', category.id)
        setSelectedCategory(category)
        navigate(`/${(category.name.toLowerCase()).replace(/\s+/g, "")}`)
    }

    const fetchCategoryCallback = useCallback(() => {
        const category = categories.find(
            category => category.id === JSON.parse(sessionStorage.getItem('categoryId'))
        )
        setSelectedCategory(category)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories])

    useEffect(() => {
        fetchCategories()
            .then(data =>
                setCategories(data)
            )
            .catch(error =>
                console.error('Ошибка при получении данных:', error)
            )
        fetchCategoryCallback()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchCategoryCallback])


    return (
        <div className={classes.sectionCategories}>
            <div className={classes.contentContainer}>
                <div className={`${classes.categories} ${!hiddenCategories && classes.show}`}>
                    {categories.map(category =>
                        <div className={classes.category} key={category.id}>
                            <img src={process.env.REACT_APP_API_URL + category.image + '.png'} alt={category.name}/>
                            <button
                                className={`${classes.category__text} ${!(window.location.href.search(`/${(category.name.toLowerCase()).replace(/\s+/g, "")}`) === -1) && classes.active}`}
                                onClick={() => handleRedirectCategory(category)}
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