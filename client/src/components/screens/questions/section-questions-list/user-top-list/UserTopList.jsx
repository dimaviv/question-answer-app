import {useEffect, useState} from 'react';

import styles from './UserTopList.module.css';
import UserPlaceItem from './user-place-item/UserPlaceItem';
import {fetchUserRating} from 'api/userAPI';
import {topImages} from 'utils/pages/questions/img-places';
import useCategory from 'hooks/UseCategory';
import {checkArr} from 'utils/check-arr';

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
            <div className={styles.userTopList__container}>
                {checkArr(userRating) ? (
                    userRating.map((user, index) => (
                        <UserPlaceItem
                            key={user.id}
                            user={user}
                            img={topImages[index]}
                        />
                    ))
                ) : (
                    <div className={styles.emptyList}>
                        <p className={styles.emptyList__text}>
                            Be the first to be on the leaderboard!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserTopList;