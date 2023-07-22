import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedCategory: {}
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload;
        }
    }
});

export default categoriesSlice.reducer;