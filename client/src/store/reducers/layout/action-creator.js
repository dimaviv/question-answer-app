import {layoutSlice} from './LayoutSlice';

export const LayoutActionCreator = {
    setTheme: (theme) => dispatch => {
        dispatch(layoutSlice.actions.setTheme(theme))
    }
}