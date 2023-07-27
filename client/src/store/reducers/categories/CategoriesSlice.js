import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    selectedCategory: {}
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload;
        }
    }
});

export default categoriesSlice.reducer;