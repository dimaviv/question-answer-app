import UserPlaceItem from './user-place-item/UserPlaceItem';
import {fetchUserRating} from 'api/user';
import {topImages} from 'utils/pages/questions/img-places';
import {StyledUserTopList} from './StyledUserTopList';
import {useQuery} from 'react-query';
import UserTopListLoading from 'components/ui/loading/user-top-list/UserTopList';

const UserTopList = () => {
    const {
        data: userRating,
        isLoading: isUserRatingLoading,
        isError: isUserRatingError
    } = useQuery('user-rating', () => fetchUserRating());

    if (isUserRatingLoading || isUserRatingError) {
        return (
            <UserTopListLoading />
        );
    }

    return (
        <StyledUserTopList>
            <div className={'userTopList__titleContainer'}>
                <p className={'titleContainer__text'}>The best users</p>
            </div>
            <div className={'userTopList__container'}>
                {userRating.length > 0 ? (
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
                            Be the first in the best users!
                        </p>
                    </div>
                )}
            </div>
        </StyledUserTopList>
    );
};

export default UserTopList;