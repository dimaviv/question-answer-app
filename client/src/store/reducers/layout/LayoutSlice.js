import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: ''
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        }
    }
})

export default layoutSlice.reducer