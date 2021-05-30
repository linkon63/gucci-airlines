import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../redux/actions/airLinesBookingAction";

export const useAuth = () => {
    const authValue = useSelector(state => state.airlinesReducers.userInfo);
    return authValue
};

export const PrivateRoute = ({children, ...rest}) => {
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const formattedUser = formatUser(user);
                console.log(formattedUser)
                setUser(formattedUser)
                dispatch(addUserInfo(formattedUser))
            }
        });

        return () => unsubscribe();
    }, []);

    const userInfo = useSelector(state => state.airlinesReducers.userInfo[0]);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            userInfo?.email || user?.email ? (
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

export const formatUser = (user) => ({
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    uid: user.uid,
});

export const signInWithGoogle = () => {
    return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => {
            const formattedUser = formatUser(response.user);
            return formattedUser;
        })
        .catch((err) => {
            console.log(err)
        });
};

export const signOut = () => {
    return firebase
        .auth()
        .signOut()
        .then((res) => {
            return res
        });
};
