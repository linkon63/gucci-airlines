import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { signOut } from '../../../lib/auth';
import { addUserInfo } from '../../../redux/actions/airLinesBookingAction';

const logoStyle = {
    height: '30px',
    width: '30%'
}

const Navbar = () => {

    const dispatch = useDispatch()
    const loggedInData = useSelector((state) => state.airlinesReducers.userInfo);
    const logedInUserMail = loggedInData[0];

    const handleLogOut = () => {
        signOut()
        const empty = {}
        dispatch(addUserInfo(empty))
    } 
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="logo" style={logoStyle} />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item me-2">
                                <Link to="/home" class="nav-link active text-white" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item me-2">
                                <Link to="/about" class="nav-link active text-white" aria-current="page">About</Link>
                            </li>
                            <li class="nav-item me-2">
                                <Link to="/service" class="nav-link active text-white" aria-current="page">Service</Link>
                            </li>
                            <li class="nav-item me-2">
                                <Link to="/blog" class="nav-link active text-white" aria-current="page">Blog</Link>
                            </li>
                            <li class="nav-item me-2">
                                <Link to="/order" class="nav-link active text-white" aria-current="page">Order</Link>
                            </li>
                            <li class="nav-item me-2">
                                {
                                    logedInUserMail ?
                                        <button className="nav-button" onClick={handleLogOut}>Logout</button>
                                        : <Link to="/login"><button className="nav-button">Login</button></Link>

                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;