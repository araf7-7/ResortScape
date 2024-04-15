import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
// import { data } from 'autoprefixer';

export const AuthContext = createContext(null)
// social auth providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [houses, setHouses] = useState([])

    // lord data 
    useEffect(() => {
        fetch('residential.json')
        .then((res) => res.json())
        .then((data) =>{
            setHouses(data)
        })
    }, [])


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //gitHub login
    const githubLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //LogOut
    const logOut = () => {
        setLoading(true)
        setUser(null)
         signOut(auth);
    }
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        googleLogin,
        githubLogin,
        loading,
        houses,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;