import {$authHost, $host} from "./index"
import {API_QUESTION} from 'utils/api-consts';

export const fetchQuestions = async (categoryId, isAnswered, limit, page) => {
    const {data} = await $host.get(API_QUESTION, {
        params: {
            categoryId, isAnswered, limit, page
        }
    })
    return data
}

export const fetchOneQuestion = async (id) => {
    const {data} = await $host.get(API_QUESTION + `/${id}`)
    return data
}

export const createQuestion = async (question) => {
    const {data} = await $authHost.post(API_QUESTION, question)
    return data
}



