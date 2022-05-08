import React, { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { auth } from "../auth";

interface AuthContextInterface {
    currentUser: User;
}

export const AuthContext = React.createContext<AuthContextInterface>(null!);

export function useAuth() {
    return useContext(AuthContext)
}

type Props = {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {
    let [currentUser, setCurrentUser] = useState<User>(null!);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log('AuthProvider', user)
            setCurrentUser(user!)
        })
    }, [])

    const value: AuthContextInterface = {
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
