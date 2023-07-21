import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

function useCategory() {
    const {categories} = useSelector(state => state.categoriesReducer);
    const categoryPath = useParams().categoryName;
    const categoryName = decodeURIComponent(categoryPath.replace('-',  '%20'))

    const selectedCategory = categories.find(
        category => category.name.toLowerCase() === categoryName
    );

    return selectedCategory || null;
}

export default useCategory;
