import React from 'react';
import styles from './UserPlaceItem.module.css';
import {ROUTE_LOGIN} from '../../../../utils/consts';


const UserPlaceItem = ({user, img}) => {

    return (
        <div className={styles.userPlaceItem}>
            <div className={styles.userPlaceItem__userInformContainer}>
                <div className={styles.userInformContainer__placeContainer}>
                    <img src={img}
                         alt=""
                    />
                </div>
                <div className={styles.userInformContainer__userInfoContainer}>
                    <div className={styles.userInfoContainer__avatarBox}>
                        <img src={user.avatar}
                             alt={`${user.name} avatar`}
                        />
                    </div>
                    <a className={styles.userInfoContainer__text}
                        href={ROUTE_LOGIN}
                    >
                        {user.name}
                    </a>
                </div>
            </div>
            <div className={styles.userPlaceItem__userScoreContainer}>
                <p className={styles.userScoreContainer__text}>
                    {user.score}
                </p>
            </div>
        </div>
    );
};

export default UserPlaceItem;