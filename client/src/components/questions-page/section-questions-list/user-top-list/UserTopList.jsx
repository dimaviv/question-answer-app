import React, {useEffect, useState} from 'react';
import styles from './UserTopList.module.css';
import UserPlaceItem from '../user-place-item/UserPlaceItem';
import {fetchUserRating} from '../../../../http/userApi';
import {topImages} from '../../../../utils/questions-page/img-places';
import useCategory from '../../../../hooks/UseCategory';

const UserTopList = () => {

    const [userRating, setUserRating] = useState([]);
    const selectedCategory = useCategory();

    useEffect(() => {
            fetchUserRating()
                .then(data => {
                    setUserRating(data);
                })
                .catch(error => console.error(error));
    }, [selectedCategory]);

    return (
        <div className={styles.userTopList}>
            <div className={styles.userTopList__titleContainer}>
                <p className={styles.titleContainer__text}>Top 10</p>
            </div>
            {
                userRating &&
                userRating.length > 0 &&
                <div className={styles.userTopList__container}>
                    {userRating.map((user, index) => (
                        <UserPlaceItem
                            key={user.id}
                            user={user}
                            img={topImages[index]}
                        />
                    ))}
                </div>
            }
        </div>
    );
};

export default UserTopList;