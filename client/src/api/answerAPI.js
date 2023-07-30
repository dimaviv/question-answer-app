import {$authHost} from "./index"
import {API_ANSWER} from 'utils/api-consts';

export const createAnswer = async (answer) => {
    const {data} = await $authHost.post(API_ANSWER, answer);
    return data;
};
