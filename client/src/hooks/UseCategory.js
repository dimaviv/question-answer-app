import { useEffect } from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function useCategory() {
    const {categories} = useSelector(state => state.categoriesReducer)
    const categoryName = useParams().categoryName

    const fetchCategory = () => {
        return categories.find((category) => category.name.toLowerCase().replace(/\s+/g, "") === categoryName);
    };

    useEffect(() => {
        if(categoryName) {
            fetchCategory();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryName]);

    return fetchCategory();
}

export default useCategory;
