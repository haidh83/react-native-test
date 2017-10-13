import { LOGIN_SUCCESS } from '../actions/index';

let cloneObject = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}

let newState = { user: { loggedin: false } };

export default function (state, actions) {
    switch (actions.type) {
        case LOGIN_SUCCESS:
            newState = cloneObject(state);
            newState.user.loggedin = true;
            return newState;
        default:
            return state || newState
    }
}