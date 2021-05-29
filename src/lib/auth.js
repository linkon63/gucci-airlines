import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router";
import firebase from "./firebase";
import Preloader from '../components/Shared/Preloader';
import { useSelector } from "react-redux";

export const useAuth = () => {
    const authValue = useSelector(state => state.airlinesReducers.userInfo);
    return authValue
};

export const PrivateRoute = ({
    children,
    ...rest
}) => {
    const logInData = useAuth();
    console.log(logInData[0])
    const data = localStorage.getItem('user')
    console.log(data)
    return (
        <Route
            {...rest}
            render={({ location }) =>
            logInData[0].loginStatus.status === "pending" ? (
                    <Preloader />
                ) : logInData[0].user || localStorage.getItem('user') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export function useProvideAuth() {
    const [user, setUser] = useState();
    const [loginStatus, setLoginStatus] = useState({
        status: "idle",
        error: null,
    });

    const formatUser = (user) => ({
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        uid: user.uid,
    });

    const signInWithGoogle = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                const formattedUser = formatUser(response.user);
                localStorage.setItem('user', response.user.email)
                setUser(formattedUser);
                setLoginStatus({ status: "resolved", error: null });
                return formattedUser;
            })
            .catch((err) => {
                setUser(null);
                setLoginStatus({ status: "resolved", error: err.message });
            });
    };

    const signOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                localStorage.setItem('user', {});
                setUser(null);
                setLoginStatus({ status: "idle", error: null });
            });
    };

    useEffect(() => {
        setLoginStatus({ status: "pending", error: null });
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const formattedUser = formatUser(user);
                setUser(formattedUser);
                setLoginStatus({ status: "resolved", error: null });
            } else {
                setLoginStatus({ status: "idle", error: null });
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        loginStatus,
        signInWithGoogle,
        signOut,
    };
}