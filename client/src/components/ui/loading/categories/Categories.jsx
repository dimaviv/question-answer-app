import {StyledCategories} from './StyledCategories';

const CategoriesLoading = () => {
    const numCategories = 9;

    const divElements = Array.from({ length: numCategories }, (_, index) => (
        <div key={index}></div>
    ));
    return (
        <StyledCategories>
            {divElements}
        </StyledCategories>
    );
};

export default CategoriesLoading;