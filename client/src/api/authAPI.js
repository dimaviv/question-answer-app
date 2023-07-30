import {$authHost, $host} from "./index"
import {API_USER} from 'utils/api-consts';

export const registration = async (user) => {
    const {data} = await $host.post(API_USER + '/registration', user)
    return data
}

export const login = async (user) => {
    const {data} = await $host.post(API_USER + '/login', user)
    return data
}

export const checkAuth = async () => {
    const {data} = await $authHost.get(API_USER + '/auth')
    return data
}