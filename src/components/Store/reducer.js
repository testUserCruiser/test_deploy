import * as actionTypes from './actions';

const initialState = {
    sideDrawerOpen: false,
    isMobile: false,
    isDark: false,
    title: ''
}

const reducer = (state=initialState, action ) => {
    switch(action.type) {
        case actionTypes.SHOW_DRAWER:
            return {
                ...state,
                sideDrawerOpen: action.param,
            }
        
        case actionTypes.SET_MOBILE:
            return{
                ...state,
                isMobile: action.param
            }

        case actionTypes.SET_DARK:
            return{
                ...state,
                isDark: action.param
            }
        
        case actionTypes.SET_TITLE:
            return{
                ...state,
                title: action.param
            }

        default:
            return state
    }

}

export default reducer