import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {useNavigate, useParams} from 'react-router-dom';
import {fetchCategories} from 'api/categoryAPI';
import {useActions} from 'hooks/UseActions';
import {StyledSectionCategories} from './StyledSectionCategories';

const SectionCategories = () => {
    const navigate = useNavigate();
    const {categories} = useSelector(state => state.categoriesReducer);
    const {setCategories} = useActions();

    const [isLoading, setIsLoading] = useState(true);
    const [hiddenCategories, setHiddenCategories] = useState(true);

    const categoryPath = useParams().categoryName;
    const categoryPathFromName = (categoryName) => {
        const encodedName = encodeURIComponent(categoryName);
        return encodedName.replace('%20', '-').toLowerCase();
    };

    const handleRedirectCategory = (categoryName) => {
        const path = categoryPathFromName(categoryName);
        navigate(`/${path}`);
    };

    useEffect(() => {
        fetchCategories()
            .then(data => {
                setCategories(data);
                setIsLoading(false);
            })
            .catch(error =>
                console.error('Error while getting data:', error)
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledSectionCategories>
            <div className={'sectionCategories__container'}>
                <div className={`container__categories ${!hiddenCategories && 'container__categories_show'}`}>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        categories &&
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
                    )}
                </div>
                <div className={'btnDropMenu'}
                     onClick={() => setHiddenCategories(!hiddenCategories)}
                >
                </div>
            </div>
        </StyledSectionCategories>
    );
};

export default SectionCategories;