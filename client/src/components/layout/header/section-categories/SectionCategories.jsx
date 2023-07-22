import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';

import {StyledSectionCategories} from './StyledSectionCategories';
import decorTriangle from 'static/layout/header/decor/decor__triangle.svg';
import decorTriangleHover from 'static/layout/header/decor/decor__triangle_hover.svg';
import {fetchCategories} from 'api/categoryAPI';
import CategoriesLoading from 'components/ui/loading/categories/Categories';
import {useActions} from 'hooks/useActions';
import {translitWord} from '../../../../utils/translit';

const SectionCategories = () => {
    const navigate = useNavigate();
    const categoryPath = useParams().categoryName;

    const {data: categories, isLoading, isError} = useQuery('categories', fetchCategories);
    const {setSelectedCategory} = useActions();

    const [hiddenCategories, setHiddenCategories] = useState(true);

    const [hoveredShowMore, setHoveredShowMore] = useState(false);

    const handleMouseEnter = () => {
        setHoveredShowMore(true);
    };
    const handleMouseLeave = () => {
        setHoveredShowMore(false);
    };

    const categoryPathFromName = (categoryName) => {
        const translitName = translitWord(categoryName)
        const encodedName = encodeURIComponent(translitName);
        return encodedName.replace('%20', '-')
    };

    const handleRedirectCategory = (categoryName) => {
        const path = categoryPathFromName(categoryName);
        navigate(`/${path}`);
    };

    useEffect(() => {
        if (categoryPath) {
            const categoryName = decodeURIComponent(categoryPath.replace('-', '%20'));
            if (categories) {
                const category = categories.find(
                    category => translitWord(category.name) === categoryName
                );

                setSelectedCategory(category);
            }
        }
    }, [categoryPath, categories]);

    return (
        <StyledSectionCategories>
            <div className={'sectionCategories__container'}>
                {isLoading || isError ? (
                    <CategoriesLoading />
                ) : (
                    <div className={`container__categories ${!hiddenCategories ? 'container__categories_show' : ''}`}>
                        {categories ? (
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
                            <div>No categories</div>
                        )}
                    </div>
                )}
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