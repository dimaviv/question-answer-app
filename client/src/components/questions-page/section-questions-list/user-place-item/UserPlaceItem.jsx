import React from 'react';
import styles from './UserPlaceItem.module.css';
import {ROUTE_LOGIN} from '../../../../utils/consts';
import userAvatarImg from './../../../../static/questions-page/userAvatar.svg'
import {getEmailPrefix} from '../../../../utils/questions-page/get-email-prefix';


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
                        <img src={user.avatar ? user.avatar : userAvatarImg}
                             alt={`${user.name} avatar`}
                        />
                    </div>
                    <a className={styles.userInfoContainer__text}
                        href={ROUTE_LOGIN}
                    >
                        {user.login ? user.login : getEmailPrefix(user.email)}
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