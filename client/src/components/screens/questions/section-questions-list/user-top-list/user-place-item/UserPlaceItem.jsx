import styles from './UserPlaceItem.module.css';
import {ROUTE_LOGIN} from 'utils/consts';
import userAvatarImg from 'static/pages/questions/userAvatar.svg'
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';


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
                             alt={`${user.login ? user.login : getEmailPrefix(user.email)} avatar`}
                        />
                    </div>
                    <div className={styles.userInfoContainer__nameBox}>
                        <a className={styles.nameBox__text}
                           href={ROUTE_LOGIN}
                        >
                            {user.login ? user.login : getEmailPrefix(user.email)}
                        </a>
                    </div>
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