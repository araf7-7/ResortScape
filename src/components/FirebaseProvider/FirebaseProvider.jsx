import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider )
    }
    const gitHubLogin =()=>{
        return signInWithPopup(auth, gitHubProvider )
    }
    const logout =( ) => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }

        });
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logout,
        user
    }
    return (

        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>


    );
};

export default FirebaseProvider;