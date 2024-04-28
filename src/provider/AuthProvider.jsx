import { GithubAuthProvider, GoogleAuthProvider,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=> {
            unsubscribe();
        }

    }, [])
    const authInfo = {
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
        signOutUser,
        user,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;