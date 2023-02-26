import {createSlice} from "@reduxjs/toolkit";
import AlgebraImg from '../../../static/Header/Categories/algebra.png'
import GeometryImg from '../../../static/Header/Categories/geometry.png'
import BiologyImg from '../../../static/Header/Categories/biology.png'
import ChemistryImg from '../../../static/Header/Categories/chemistry.png'
import ComputerScienceImg from '../../../static/Header/Categories/computer-science.png'

const initialState = {
    categories: [
        {id: 1, name: 'Algebra', img: AlgebraImg},
        {id: 2, name: 'Geometry', img: GeometryImg},
        {id: 3, name: 'Biology', img: BiologyImg},
        {id: 4, name: 'Chemistry', img: ChemistryImg},
        {id: 5, name: 'Computer science', img: ComputerScienceImg},
        {id: 6, name: 'English', img: AlgebraImg},
        {id: 7, name: 'Ukrainian', img: AlgebraImg},
        {id: 8, name: 'Spanish', img: AlgebraImg},
        {id: 9, name: 'Geography', img: AlgebraImg},
        {id: 10, name: 'Algebra', img: AlgebraImg},
        {id: 11, name: 'Geometry', img: GeometryImg},
        {id: 12, name: 'Biology', img: BiologyImg},
        {id: 13, name: 'Chemistry', img: ChemistryImg},
        {id: 14, name: 'Computer science', img: ComputerScienceImg},
        {id: 15, name: 'English', img: AlgebraImg},
    ],
    selectedCategory: {},
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategory(state, action) {
           state.selectedCategory = action.payload
        },
    }
})

export default categoriesSlice.reducer;