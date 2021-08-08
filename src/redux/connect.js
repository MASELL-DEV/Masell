import { connect } from 'react-redux';
import ActionType from './ActionType';

const reduxState = (state) => ({
    isLoggedIn: state.isLoggedIn,
    userInfo: state.userInfo
})
  
const reduxDispatch = (dispatch) => ({
    login: (data) => dispatch({type: ActionType.IS_LOGGEDIN, value: data})
})


const exportConnect = (component) => {
    return connect(reduxState, reduxDispatch)(component)
}


export default exportConnect

