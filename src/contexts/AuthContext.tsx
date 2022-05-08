import React, { useContext, useState, useEffect, createContext, ReactNode } from "react";
import { User, signOut } from "firebase/auth";
import { auth } from "../auth";

interface AuthContextInterface {
    currentUser: User;
    logout: () => void;
}

export const AuthContext = React.createContext<AuthContextInterface>(null!);

export function useAuth() {
    return useContext(AuthContext)
}

export const handleLogout = () => {
    signOut(auth).then(() => {
        console.info('AuthContext - Signed out!');
    }).catch((error) => {
        console.error(error)
    })
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
        currentUser: currentUser,
        logout: handleLogout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
