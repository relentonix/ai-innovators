import { authenticateConstant } from '../constants';
import { authenticateServices } from '../services';

const login = (username, password, loginType) => {
    return dispatch => {
        const { auth, msg, currentUser } = authenticateServices.checkLogin(username, password, loginType);
        console.log(auth, msg);
        return new Promise((resolve, reject) => {
            dispatch(success(auth, msg, currentUser));
            resolve();
        });

        function success (auth, msg) {
            return {
                type: authenticateConstant.HANDLE_LOGIN,
                payload: {
                    auth,
                    msg,
                    currentUser
                }
            };
        };
    };
};
const logout = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(success());
            resolve();
        });

        function success () {
            return {
                type: authenticateConstant.HANDLE_LOGOUT
            };
        };
    };
};

const clearMessage = () => {
        return dispatch => {
            return new Promise((resolve, reject) => {
                dispatch(success());
                resolve();
            });

            function success () {
                return {
                    type: authenticateConstant.CLEAR_MESSAGE
                };
            };
        };
    };
export const authenticateAction = {
    login,
    clearMessage,
    logout
};
