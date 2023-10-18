/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,cUser=>{
            setUser(cUser);
            setLoading(false)
        })
        return ()=>{
            UnSubscribe()
        }
    },[])

    const signupWithEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const signInWithGitHub=()=>{
        setLoading(true)
        return signInWithPopup(auth, GitHubProvider)
    }

    const values = {
        signupWithEmail,
        signInWithEmail,
        setUser,
        user,
        signInWithGoogle,
        signInWithGitHub,
        loading,
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;