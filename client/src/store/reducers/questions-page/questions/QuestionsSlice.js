import {createSlice} from "@reduxjs/toolkit";
import userAvatarImg from '../../../../static/questions-page/userAvatar.svg'

const initialState = {
    questions: [
        {
            id: 1,
            user: 'User2312',
            avatar: userAvatarImg,
            categoryId: 1,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
            date: '- 6 min ago',
        },
        {
            id: 2,
            user: 'User1111',
            avatar: userAvatarImg,
            categoryId: 2,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? At augue eget arcu dictum varius duis at. Dictum non consectetur a erat nam at lectus?',
            date: '- 21 min ago',
        },
        {
            id: 3,
            user: 'User7281',
            avatar: userAvatarImg,
            categoryId: 3,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua?',
            date: '- 34 min ago',
        },
        {
            id: 4,
            user: 'User0932',
            avatar: userAvatarImg,
            categoryId: 4,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
            date: '- 1 hour ago',
        },
    ],
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {

    }
})

export default questionsSlice.reducer;