import {$authHost} from "./index"
import {API_COMMENT} from 'utils/api-consts';

export const createComment = async (comment) => {
    const {data} = await $authHost.post(API_COMMENT, comment);
    return data;
};
