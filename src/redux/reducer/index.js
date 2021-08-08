import ActionType from "../ActionType"

const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
    userInfo: JSON.parse(localStorage.getItem('userInfo'))
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.IS_LOGGEDIN:

            localStorage.setItem('userInfo', JSON.stringify(action.value));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));

            return {
                ...state,
                isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
                userInfo: JSON.parse(localStorage.getItem('userInfo'))
            }
            
        default:
            return state;
            
    }


}

export default reducer;