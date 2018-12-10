import * as types from './types'

export const ChangeUserName=(data)=>{
    return{
        type:types.CHANGE_USER_NAME,
        payload:data,
    }
}
export const ChangeUserPassword=(data)=>{
    return{
        type: types.CHANGE_USER_PASSWORD,
        payload:data,
    }
}
export const ChangeLoggedInState=(data)=>{
    return{
        type:types.CHANGE_LOGGED_IN_STATE,
        payload:data, 
    }
}
