import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

function useCategory() {
    const {categories} = useSelector(state => state.categoriesReducer);
    const categoryName = useParams().categoryName;

    const selectedCategory = categories.find(
        category => category.name.toLowerCase().replace(/\s+/g, '') === categoryName
    );


    return selectedCategory || false;
}

export default useCategory;
