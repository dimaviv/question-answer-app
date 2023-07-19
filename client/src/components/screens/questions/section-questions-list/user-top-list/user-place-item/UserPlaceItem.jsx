import styles from './UserPlaceItem.module.css';
import {ROUTE_LOGIN} from 'utils/consts';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import {stringToColor} from 'utils/pages/questions/string-to-color';
import {wc_hex_is_light} from 'utils/pages/questions/get-text-color';


const UserPlaceItem = ({user, img}) => {
    const avatarColor = stringToColor(user.login ? user.login : getEmailPrefix(user.email))

    const avatarStyle = {
        backgroundColor: avatarColor,
        color: wc_hex_is_light(avatarColor) ? '#000000' : '#FFFFFF'
    };

    return (
        <div className={styles.userPlaceItem}>
            <div className={styles.userPlaceItem__userInformContainer}>
                <div className={styles.userInformContainer__placeContainer}>
                    <img src={img}
                         alt=''
                    />
                </div>
                <div className={styles.userInformContainer__userInfoContainer}>
                    <div className={styles.userInfoContainer__avatarBox}>
                        {user.provider ? (
                            user.provider === 'google' ? (
                                <img src={` https://lh3.googleusercontent.com${user.avatar}`}
                                     alt={`${user.login ? user.login : getEmailPrefix(user.email)} avatar`}
                                />
                            ) : (
                                <img src={` https://facebook${user.avatar}`}
                                     alt={`${user.login ? user.login : getEmailPrefix(user.email)} avatar`}
                                />
                            )
                        ) : (
                            user.avatar ? (
                                <img src={user.avatar}
                                     alt={`${user.login ? user.login : getEmailPrefix(user.email)} avatar`}
                                />
                            ) : (
                                <div className={styles.defaultAvatar}
                                     style={avatarStyle}
                                >
                                    {user.login ? user.login : getEmailPrefix(user.email).charAt(0)}
                                </div>
                            )
                        )}
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