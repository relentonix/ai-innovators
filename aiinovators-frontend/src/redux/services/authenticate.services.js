import { loginOptionValues } from '../../constants/general.constants';
import { CUSTOMERS, AGENTS } from '../../assets/data/mockLogin';
export const authenticateServices = {
    checkLogin
};

function checkLogin (username, password, loginType) {
    if (loginType === loginOptionValues.CUSTOMER) {
        if (CUSTOMERS[username] !== undefined) {
            if (CUSTOMERS[username].password === password) {
                return { auth: true, msg: 'login successful', currentUser: CUSTOMERS[username] };
            }
            return { auth: false, msg: 'incorrect password' };
        } else {
            return { auth: false, msg: 'incorrect Customer ID' };
        }
    }
    if (loginType === loginOptionValues.AGENT) {
        if (AGENTS[username] !== undefined) {
            if (AGENTS[username].password === password) {
                return { auth: true, msg: 'login successful', currentUser: AGENTS[username] };
            }
            return { auth: false, msg: 'incorrect password' };
        } else {
            return { auth: false, msg: 'incorrect Agent ID' };
        }
    }
};
