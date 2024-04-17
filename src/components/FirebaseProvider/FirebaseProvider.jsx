import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider )
    }
    const gitHubLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider )
    }
    const logout =( ) => {
        setUser(null)
        signOut(auth)
    }

    useEffect(() => {
      const unsuscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }

        });
        return ()=> unsuscribe()
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logout,
        user,
        loading
    }
    return (

        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>


    );
};

export default FirebaseProvider;