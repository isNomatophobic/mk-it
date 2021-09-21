import {Store,User} from "./types"
import {ActionTypes,LOG_IN,LOG_OFF} from "./actions"
import {createStore} from "redux"

const defaultUser:User = {
  id:0,
  name:'',
  image:'',
  isLogged:false
} 

function userReducer (state:Store={
  user:defaultUser
},action:ActionTypes){
  switch(action.type)
  {
    case LOG_IN:
      return{
        ...state,
        user:action.payload
      }
    case LOG_OFF:
      return{
        ...state,
        user:defaultUser
      }
    default:
      return state
  }
}
// const store = createStore(userReducer)
// export default store