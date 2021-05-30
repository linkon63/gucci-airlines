import React from 'react';
import loginImg from '../../../images/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { signInWithGoogle } from '../../../lib/auth';
import { useHistory, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUserInfo } from '../../../redux/actions/airLinesBookingAction';


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const dispatch = useDispatch();

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(res => {
                if (res) {
                    dispatch(addUserInfo(res))
                    history.push(from)
                }
            })
    }

    return (
        <div className="container">
            <h3 className="text-center py-4 title">Login Here</h3>
            <div className="row">
                <div className="col-md-6">
                    <img src={loginImg} alt="login" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <button onClick={handleGoogleSingIn} className="button"><FontAwesomeIcon icon={faGoogle} /> Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;