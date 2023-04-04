import {$authHost, $host} from "./index"

export const createAnswer = async (answer) => {
    const {data} = await $host.post('api/answer', answer)
    return data
}

export const fetchAnswers = async () => {
    const {data} = await $host.get('api/answer')
    return data
}
export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createQuestion = async (question) => {
    const {data} = await $host.post('api/question', question)
    return data
}

export const fetchQuestions = async (categoryId, isAnswered, limit = 10, page) => {
    const {data} = await $host.get('api/question', {
        params: {
            categoryId, isAnswered, limit, page
        }
    })
    return data
}

export const fetchOneQuestion = async (id) => {
    const {data} = await $host.get('api/question/' + id)
    return data
}

