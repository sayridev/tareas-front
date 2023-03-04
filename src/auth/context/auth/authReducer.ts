
import { User } from "../../../interfaces";
import { AuthState } from "./AuthProvider"


type AuthAction =
| { type:'[AUTH] - LOGIN', payload:User}
| { type:'[AUTH] - LOGOUT'}
| { type:'[AUTH] - CHECKING'}

export const authReducer =(state: AuthState, action:AuthAction):AuthState=>{

    switch (action.type) {
        case '[AUTH] - LOGIN':
            return {
                ...state,
                 user: action.payload,
                 status:'authenticated',
                 errorMessage: undefined
            }
        case '[AUTH] - LOGOUT':
            return{
                ...state,
                user:{} as User,
                status:'not-authenticated',
                errorMessage:undefined
            }
        case '[AUTH] - CHECKING':
            return{
                ...state,
                status:'checking'
            }
    
        default:
            return state;
    }
}