import * as types from '../actions/types'
 const initialState={
   UserName:'',
   Password:'',
   isUserLoggedIn:false,
 }

 export default (state=initialState,action)=>{
     switch(action.type)
     {
         case types.CHANGE_USER_NAME:
         return {...state, UserName:action.payload}
         case types.CHANGE_USER_PASSWORD:
         return{...state,Password:action.payload}
         case types.CHANGE_LOGGED_IN_STATE: 
          return{...state,isUserLoggedIn:action.payload}
        default: 
        return state; 
     }

 }