/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const AllContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [path, setPath] = useState(null)
    const [err, setErr] = useState("")

    const googleProvider = new GoogleAuthProvider()

    const register = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {

        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {

        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)

            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {

            logout()
                .then(() => {
                    toast.error("Access denied! Login again.")
                    return <Navigate to="/login" />;
                })
        }
    }, [err])

    const contextValues = {
        register,
        login,
        loading,
        path,
        setPath,
        googleSignIn,
        user,
        logout,
        setErr
    }

    return (
        <AllContext.Provider value={contextValues}>
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;