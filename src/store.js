import {createStore} from 'redux'
import startupReducer from './reducers/startupReducer'

export const store=createStore(startupReducer); 
