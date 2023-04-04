import React, {useCallback, useEffect, useState} from 'react';
import UserPlaceItem from '../user-place-item/UserPlaceItem';
import {topImages} from '../../../../utils/questions-page/img-places';
import _ from 'lodash';
import {useSelector} from 'react-redux';
import styles from './UserTopList.module.css';

const UserTopList = () => {

    const {users} = useSelector(state => state.usersReducer);
    const [top10List, setTop10List] = useState([]);

    const fetchTop10ListCallback = useCallback(() => {
        setTop10List(_.sortBy(users, 'score').reverse().slice(0, 10));
    }, [users]);

    useEffect(() => {
        fetchTop10ListCallback();
    }, [fetchTop10ListCallback]);

    return (
        <div className={styles.userTopList}>
            <div className={styles.userTopList__titleContainer}>
                <p className={styles.titleContainer__text}>Top 10</p>
            </div>
            {(top10List && top10List.length > 0) &&
                <div className={styles.userTopList__container}>
                    {top10List.map((user, index) => (
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