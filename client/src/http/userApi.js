import {$host} from './index';
import {API_USER} from '../utils/api-consts';

export const fetchUserRating = async (categoryId, limit = 10) => {
    const {data} = await $host.get(API_USER + '/most-scored',
        {
            params: {
                categoryId, limit
            }
        });
    return data;
};