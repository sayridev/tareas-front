import { useReducer } from 'react';
import authApi from '../../../api/authApi';

import { LoginUser, User } from '../../../interfaces';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';



export interface AuthState {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    user: User;
    errorMessage: string | undefined
}

const INITIAL_STATE: AuthState = {
    status: 'not-authenticated',
    user: {} as User,
    errorMessage: undefined

}


interface Props {
    children: JSX.Element | JSX.Element[]
}
export const AuthProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

    const login = async (loginUser: LoginUser) => {
        dispatch({ type: '[AUTH] - CHECKING' })
        try {
            const { data } = await authApi.post<User>('/auth/login', { ...loginUser });
            localStorage.setItem('token', data.token);
            dispatch({
                type: '[AUTH] - LOGIN',
                payload: data
            })
            return data;
        } catch (error) {
            dispatch({
                type: '[AUTH] - LOGOUT'
            })
            return undefined;
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: '[AUTH] - LOGOUT' })
    }

    const checkAuth = async () => {
        dispatch({ type: '[AUTH] - CHECKING' })
        const token = localStorage.getItem('token');
        if (!token) dispatch({ type: '[AUTH] - LOGOUT' });
        console.log(token);
        try {
            const { data } = await authApi.get<User>('/auth/revalidate');
            localStorage.setItem('token', data.token);
            dispatch({
                type: '[AUTH] - LOGIN',
                payload: data
            })
            return data;
        } catch (error) {
            dispatch({
                type: '[AUTH] - LOGOUT'
            })
            return undefined;
        }
    }
    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout,
                checkAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}