import {useState} from 'react';
import {useSelector} from 'react-redux';

import {useNavigate, useParams} from 'react-router-dom';
import {StyledSectionCategories} from './StyledSectionCategories';
import decorTriangle from 'static/layout/header/decor/decor__triangle.svg';
import decorTriangleHover from 'static/layout/header/decor/decor__triangle_hover.svg';
import {checkArr} from 'utils/check-arr';

const SectionCategories = () => {
    const navigate = useNavigate();
    const {categories} = useSelector(state => state.categoriesReducer);

    const [hiddenCategories, setHiddenCategories] = useState(true);

    const [hoveredShowMore, setHoveredShowMore] = useState(false);
    const handleMouseEnter = () => {
        setHoveredShowMore(true);
    };
    const handleMouseLeave = () => {
        setHoveredShowMore(false);
    };

    const categoryPath = useParams().categoryName;
    const categoryPathFromName = (categoryName) => {
        const encodedName = encodeURIComponent(categoryName);
        return encodedName.replace('%20', '-').toLowerCase();
    };

    const handleRedirectCategory = (categoryName) => {
        const path = categoryPathFromName(categoryName);
        navigate(`/${path}`);
    };

    return (
        <StyledSectionCategories>
            <div className={'sectionCategories__container'}>
                <div className={`container__categories ${!hiddenCategories && 'container__categories_show'}`}>
                    {checkArr(categories) ? (
                        categories.map((category) => (
                            <div className={'categories__item'}
                                 key={category.id}
                            >
                                <img src={process.env.REACT_APP_IMG_API_URL + category.image + '.png'}
                                     alt={category.name}
                                />
                                <button className={`item__text ${categoryPath === categoryPathFromName(category.name) && 'item__text_active'}`}
                                        onClick={() => handleRedirectCategory(category.name)}
                                >
                                    {category.name}
                                </button>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                <div className={'btnDropMenu'}
                     onClick={() => setHiddenCategories(!hiddenCategories)}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                    <img src={(hoveredShowMore ? decorTriangleHover : decorTriangle)}
                         alt='Show more'
                    />
                </div>
            </div>
        </StyledSectionCategories>
    );
};

export default SectionCategories;