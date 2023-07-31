import {useEffect, useMemo, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';

import {StyledSectionCategories} from './StyledSectionCategories';
import decorTriangle from 'static/layout/header/decor/decor__triangle.svg';
import decorTriangleHover from 'static/layout/header/decor/decor__triangle_hover.svg';
import {fetchCategories} from 'api/category';
import CategoriesLoading from 'components/ui/loading/categories/Categories';
import {useActions} from 'hooks/useActions';
import {translitWord} from 'utils/translit';
import {ROUTE_QUESTIONS} from 'utils/consts';

const SectionCategories = () => {
    const categoryPath = useParams().categoryName;
    const {setCategories, setSelectedCategory} = useActions();

    const {data: categories, isLoading, isError} = useQuery(
        'categories',
        fetchCategories,
        {
            refetchOnWindowFocus: false,
            onSuccess: (categories) => {
                setCategories(categories);
            }
        });

    const [hiddenCategories, setHiddenCategories] = useState(true);

    const [hoveredShowMore, setHoveredShowMore] = useState(false);

    const handleMouseEnter = () => {
        setHoveredShowMore(true);
    };
    const handleMouseLeave = () => {
        setHoveredShowMore(false);
    };

    const categoryPathFromName = useMemo(() => {
        return (categoryName) => {
            const translitName = translitWord(categoryName);
            const encodedName = encodeURIComponent(translitName);
            return encodedName.replace('%20', '-');
        };
    }, []);

    useEffect(() => {
        if (categoryPath) {
            const categoryName = decodeURIComponent(categoryPath.replace('-', '%20'));
            if (categories && categories.length > 0) {
                const category = categories.find(
                    category => translitWord(category.name) === categoryName
                );
                if (category) {
                    setSelectedCategory(category);
                }
            }
        }
    }, [categoryPath, categories]);

    return (
        <StyledSectionCategories>
            <div className={'sectionCategories__container'}>
                {isLoading || isError || !categories ? (
                    <CategoriesLoading />
                ) : (
                    <div className={`container__categories ${!hiddenCategories ? 'container__categories_show' : ''}`}>
                        {categories.length > 0 && (
                            categories.map((category) => (
                                <div className={'categories__item'}
                                     key={category.id}
                                >
                                    <img src={process.env.REACT_APP_IMG_API_URL + category.image + '.png'}
                                         alt={category.name}
                                    />
                                    <NavLink to={`${ROUTE_QUESTIONS}/${categoryPathFromName(category.name)}`}
                                             className={({isActive, isPending}) =>
                                                 isPending ? 'pending' : isActive ? 'active' : ''
                                             }
                                    >
                                        {category.name}
                                    </NavLink>
                                </div>
                            ))
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