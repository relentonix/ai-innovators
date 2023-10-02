import { authenticateConstant } from '../constants';

const initialState = { authenticated: false, message: '', currentUser: null };
function authenticateReducer (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case authenticateConstant.HANDLE_LOGIN:
            return {
                authenticated: action.payload.auth,
                message: action.payload.msg,
                currentUser: action.payload.currentUser
            };
        case authenticateConstant.HANDLE_LOGOUT:
            return initialState;
        case authenticateConstant.CLEAR_MESSAGE:
            return {
                ...state,
                message: ''
            };
        default:
            return state;
    };
}
export default authenticateReducer;
