import {ROUTE_LOGIN} from 'utils/consts';
import {getEmailPrefix} from 'utils/pages/questions/get-email-prefix';
import {stringToColor} from 'utils/pages/questions/string-to-color';
import {wc_hex_is_light} from 'utils/pages/questions/get-text-color';
import {StyledUserPlaceItem} from './StyledUserPlaceItem';


const UserPlaceItem = ({user, img}) => {
    const avatarColor = stringToColor(user.login ? user.login : getEmailPrefix(user.email))

    const avatarStyle = {
        backgroundColor: avatarColor,
        color: wc_hex_is_light(avatarColor) ? '#000000' : '#FFFFFF'
    };

    return (
        <StyledUserPlaceItem>
            <div className={'userPlaceItem__userInformContainer'}>
                <div className={'userInformContainer__placeContainer'}>
                    <img src={img}
                         alt=''
                    />
                </div>
                <div className={'userInformContainer__userInfoContainer'}>
                    <div className={'userInfoContainer__avatarBox'}>
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
                                <div className={'defaultAvatar'}
                                     style={avatarStyle}
                                >
                                    {user.login ? user.login : getEmailPrefix(user.email).charAt(0)}
                                </div>
                            )
                        )}
                    </div>
                    <div className={'userInfoContainer__nameBox'}>
                        <a className={'nameBox__text'}
                           href={ROUTE_LOGIN}
                        >
                            {user.login ? user.login : getEmailPrefix(user.email)}
                        </a>
                    </div>
                </div>
            </div>
            <div className={'userPlaceItem__userScoreContainer'}>
                <p className={'userScoreContainer__text'}>
                    {user.score}
                </p>
            </div>
        </StyledUserPlaceItem>
    );
};

export default UserPlaceItem;