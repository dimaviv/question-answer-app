import { useEffect } from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useActions} from "./UseActions";

function useCategory() {
    const {categories} = useSelector(state => state.categoriesReducer)
    const {setSelectedCategory} = useActions()
    const categoryName = useParams().categoryId

    const fetchCategory = () => {
        const category = categories.find(category => category.name.toLowerCase().replace(/\s+/g, "") === categoryName);
        setSelectedCategory(category);
    };

    useEffect(() => {
        fetchCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryName, categories]);

}

export default useCategory;
