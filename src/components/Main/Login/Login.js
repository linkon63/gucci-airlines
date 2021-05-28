import React from 'react';
import loginImg from '../../../images/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    return (
        <div className="container">
            <h3 className="text-center py-4">Login Here</h3>
            <div className="row">
                <div className="col-md-6">
                    <img src={loginImg} alt="login" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <button className="btn btn-dark"><FontAwesomeIcon icon={faGoogle} /> Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;