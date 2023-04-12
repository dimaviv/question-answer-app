import {$host} from './index';

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

// export const createCategory = async (category) => {
//     const {data} = await $authHost.post('api/category', category)
//     return data
// }