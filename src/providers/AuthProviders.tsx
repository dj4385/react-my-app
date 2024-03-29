import { FC, useEffect, useState } from "react";
import { AuthContext } from "../context/Context";
import firebase from "firebase/compat/app";
import { auth } from "../firebaseSetup";

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });
      
        return unsubscribe;
    }, [])

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}