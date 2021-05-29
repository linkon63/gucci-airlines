import React from 'react';
import loginImg from '../../../images/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useAuth } from '../../../lib/auth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const logInData = useAuth();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSingIn = () => {
        logInData[0].signInWithGoogle()
            .then(res => {
                if (res.email) {
                    history.push(from)
                }
            })
    }
    return (
        <div className="container">
            <h3 className="text-center py-4">Login Here</h3>
            <div className="row">
                <div className="col-md-6">
                    <img src={loginImg} alt="login" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <button onClick={handleGoogleSingIn} className="btn btn-dark"><FontAwesomeIcon icon={faGoogle} /> Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;