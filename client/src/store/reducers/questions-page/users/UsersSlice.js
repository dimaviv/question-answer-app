import {createSlice} from "@reduxjs/toolkit";
import userAvatarImg from '../../../../static/questions-page/userAvatar.svg'

const initialState = {
    users: [
        {
            id: 1,
            name: 'User2312',
            avatar: userAvatarImg,
            score: 1000,
        },
        {
            id: 2,
            name: 'User0211',
            avatar: userAvatarImg,
            score: 700,
        },
        {
            id: 3,
            name: 'User1234',
            avatar: userAvatarImg,
            score: 500,
        },
        {
            id: 4,
            name: 'User5673',
            avatar: userAvatarImg,
            score: 300,
        },
        {
            id: 5,
            name: 'User5555',
            avatar: userAvatarImg,
            score: 200,
        },
        {
            id: 6,
            name: 'User6662',
            avatar: userAvatarImg,
            score: 100,
        },
        {
            id: 7,
            name: 'User2213',
            avatar: userAvatarImg,
            score: 80,
        },
        {
            id: 8,
            name: 'User8912',
            avatar: userAvatarImg,
            score: 60,
        },
        {
            id: 9,
            name: 'User09874',
            avatar: userAvatarImg,
            score: 40,
        },
        {
            id: 10,
            name: 'User5647',
            avatar: userAvatarImg,
            score: 20,
        },
    ],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer;