import {$host} from './index';

export const fetchUserRating = async (categoryId, limit = 10) => {
    const {data} = await $host.get('api/user/most-scored',
        {
            params: {
                categoryId, limit
            }
        });
    return data;
};