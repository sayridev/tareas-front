import { createContext } from "react";
import { LoginUser, User } from "../../../interfaces";


interface AuthContextProps{
    status:'checking'|'not-authenticated'|'authenticated';
    user:User;
    errorMessage: string | undefined;
    login: (loginUser: LoginUser) => Promise<User | undefined>
    logout:() => void;
    checkAuth: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);