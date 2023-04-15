import {$host} from './index';
import {API_CATEGORY} from 'utils/api-consts';

export const fetchCategories = async () => {
    const {data} = await $host.get(API_CATEGORY)
    return data
}

// export const createCategory = async (category) => {
//     const {data} = await $authHost.post('api/category', category)
//     return data
// }