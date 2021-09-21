import {User} from "./types"

export const LOG_IN = "LOG_IN"
export const LOG_OFF = "LOG_OFF"

export type ActionTypes = 
    |{type:typeof LOG_IN;payload:Object}
    |{type:typeof LOG_OFF;}

export const logIn = (id:number,name:string,image:string,isLogged:boolean): ActionTypes=>({type:LOG_IN,payload:{
    id,
    name,
    image,
    isLogged,
}});
export const logOff = ():ActionTypes=>({type:LOG_OFF});