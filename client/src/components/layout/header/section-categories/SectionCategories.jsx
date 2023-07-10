import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import styles from './SectionCategories.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import {fetchCategories} from 'api/categoryAPI';
import {useActions} from 'hooks/UseActions';
import decorTriangle from 'static/layout/header/decor/decor__triangle.svg';

const SectionCategories = () => {
    const navigate = useNavigate();
    const {isDarkMode} = useSelector(state => state.darkModeReducer);
    const {categories} = useSelector(state => state.categoriesReducer);
    const {setCategories} = useActions();

    const [isLoading, setIsLoading] = useState(true);
    const [hiddenCategories, setHiddenCategories] = useState(true);
    const categoryName = useParams().categoryName;

    const handleRedirectCategory = (category) => {
        navigate(`/subject/${(category.name.toLowerCase()).replace(/\s+/g, '')}`);
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
        <div className={styles.sectionCategories}>
            <div className={styles.sectionCategories__container}>
                <div className={`${styles.container__categories} ${!hiddenCategories && styles.container__categories_show}`}>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        categories &&
                        categories.map((category) => (
                            <div className={styles.categories__item}
                                 key={category.id}
                            >
                                <img src={process.env.REACT_APP_API_URL + category.image + '.png'}
                                     alt={category.name}
                                />
                                <button
                                    className={`${styles.item__text} ${
                                        categoryName === category.name.toLowerCase().replace(/\s+/g, '')} && 
                                        styles.item__text_active
                                        }`}
                                    onClick={() => handleRedirectCategory(category)}
                                >
                                    {category.name}
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className={`${styles.btnDropMenu} ${isDarkMode && styles.btnDropMenu_dark}`}
                     onClick={() => setHiddenCategories(!hiddenCategories)}
                >
                    <img src={decorTriangle}
                         alt={''}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionCategories;