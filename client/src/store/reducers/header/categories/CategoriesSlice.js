import {createSlice} from "@reduxjs/toolkit";
// import AlgebraImg from '../../../../static/header/categories/49f0bad299687c62334182178bfd75d8.png'
// import GeometryImg from '../../../../static/header/categories/geometry.png'
// import BiologyImg from '../../../../static/header/categories/4a9259b351a93d7f2a67df61c51cd8b2.png'
// import ChemistryImg from '../../../../static/header/categories/006e29b51675e953a25e7a2d9107abd0.png'
// import ComputerScienceImg from '../../../../static/header/categories/computer-science.png'

const initialState = {
    categories: [
        // {id: 1, name: 'Algebra', img: AlgebraImg},
        // {id: 2, name: 'Geometry', img: GeometryImg},
        // {id: 3, name: 'Biology', img: BiologyImg},
        // {id: 4, name: 'Chemistry', img: ChemistryImg},
        // {id: 5, name: 'Computer science', img: ComputerScienceImg},
        // {id: 6, name: 'English', img: AlgebraImg},
        // {id: 7, name: 'Ukrainian', img: AlgebraImg},
        // {id: 8, name: 'Spanish', img: AlgebraImg},
        // {id: 9, name: 'Geography', img: AlgebraImg},
        // {id: 10, name: 'Algebra', img: AlgebraImg},
        // {id: 11, name: 'Geometry', img: GeometryImg},
        // {id: 12, name: 'Biology', img: BiologyImg},
        // {id: 13, name: 'Chemistry', img: ChemistryImg},
        // {id: 14, name: 'Computer science', img: ComputerScienceImg},
        // {id: 15, name: 'English', img: AlgebraImg},
    ],
    selectedCategory: {},
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action) {
           state.categories = action.payload
        },
        setSelectedCategory(state, action) {
           state.selectedCategory = action.payload
        },
    }
})

export default categoriesSlice.reducer;