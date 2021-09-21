export interface User {
    id?:number;
    name?:string;
    image?:string;
    isLogged:boolean;
  }
  export interface Store{
    user:User
  }