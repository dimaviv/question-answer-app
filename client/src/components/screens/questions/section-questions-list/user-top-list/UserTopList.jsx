import {useEffect, useState} from 'react';

import UserPlaceItem from './user-place-item/UserPlaceItem';
import {fetchUserRating} from 'api/userAPI';
import {topImages} from 'utils/pages/questions/img-places';
import {checkArr} from 'utils/check-arr';
import {StyledUserTopList} from './StyledUserTopList';
import {useSelector} from 'react-redux';

const UserTopList = () => {
    const {selectedCategory} = useSelector(state => state.categoriesReducer)
    const [userRating, setUserRating] = useState([]);

    useEffect(() => {
        fetchUserRating()
            .then(data => {
                setUserRating(data);
            })
            .catch(error => console.error(error));
    }, [selectedCategory]);

    return (
        <StyledUserTopList>
            <div className={'userTopList__titleContainer'}>
                <p className={'titleContainer__text'}>Top 10</p>
            </div>
            <div className={'userTopList__container'}>
                {checkArr(userRating) ? (
                    userRating.map((user, index) => (
                        <UserPlaceItem
                            key={user.id}
                            user={user}
                            img={topImages[index]}
                        />
                    ))
                ) : (
                    <div className={'emptyList'}>
                        <p className={'emptyList__text'}>
                            Be the first to be on the leaderboard!
                        </p>
                    </div>
                )}
            </div>
        </StyledUserTopList>
    );
};

export default UserTopList;