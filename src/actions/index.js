export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_ERROR='LOGIN_ERROR';

export function login(userCredentials){
    console.log('ok!');
    if(userCredentials.userName ==='h' && userCredentials.password ==='1'){
        return {type: LOGIN_SUCCESS};
    }
    else{
        return {type: LOGIN_ERROR};
    }
}

//module.exports = login;