import {$host} from "./index"

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return data
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     return data
// }