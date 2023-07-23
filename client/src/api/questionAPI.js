import {$authHost, $host} from "./index"
import {API_QUESTION} from 'utils/api-consts';

export const fetchQuestions = async (categoryId, isAnswered, limit = 20, page) => {
    const {data} = await $host.get(API_QUESTION, {
        params: {
            categoryId, isAnswered, limit, page
        }
    })
    return data.rows
}

export const fetchOneQuestion = async (id) => {
    const {data} = await $host.get(API_QUESTION + `/${id}`)
    return data
}

export const createQuestion = async (question) => {
    const {data} = await $authHost.post(API_QUESTION, question)
    return data
}

// export const createAnswer = async (answer) => {
//     const {data} = await $host.post('api/answer', answer)
//     return data
// }
//
// export const fetchAnswers = async () => {
//     const {data} = await $host.get('api/answer')
//     return data
// }



