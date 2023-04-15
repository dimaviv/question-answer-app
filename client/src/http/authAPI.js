import {$authHost, $host} from "./index"
import {API_USER} from 'utils/api-consts';

export const registration = async (email, password) => {
    const {data} = await $host.post(API_USER + '/registration', {email, password})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post(API_USER + '/login', {email, password})
    return data
}

export const checkAuth = async () => {
    const {data} = await $authHost.get(API_USER + '/auth')
    return data
}