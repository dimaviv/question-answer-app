import {useSelector} from 'react-redux';

import {StyledCategoriesSelect} from './StyledCategories';

const CategoriesSelect = () => {
    const {categories} = useSelector(state => state.categoriesReducer);
    return (
        <StyledCategoriesSelect name={'categoryId'}>
            <option value={''}>Select category</option>
            {categories.length > 0 && (
                categories.map(category => (
                    <option key={category.id}
                            value={category.id}
                    >
                        {category.name}
                    </option>
                ))
            )}
        </StyledCategoriesSelect>
    );
};

export default CategoriesSelect;