import {createSlice} from "@reduxjs/toolkit";
// import userAvatarImg from '../../../../static/questions-page/userAvatar.svg'

const initialState = {
    questions: []
        // {
        //     id: 1,
        //     user: 'User2312',
        //     avatar: userAvatarImg,
        //     categoryId: 1,
        //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        //     date: '2023-02-28T18:02:00',
        // },
        // {
        //     id: 2,
        //     user: 'User1111',
        //     avatar: userAvatarImg,
        //     categoryId: 2,
        //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? At augue eget arcu dictum varius duis at. Dictum non consectetur a erat nam at lectus?',
        //     date: '2023-02-28T17:56:00',
        // },
        // {
        //     id: 3,
        //     user: 'User7281',
        //     avatar: userAvatarImg,
        //     categoryId: 3,
        //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua?',
        //     date: '2023-02-28T17:24:00',
        // },
        // {
        //     id: 4,
        //     user: 'User0932',
        //     avatar: userAvatarImg,
        //     categoryId: 4,
        //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        //     date: '2023-02-28T17:00:00',
        // },
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload
        }
    }
})

export default questionsSlice.reducer;