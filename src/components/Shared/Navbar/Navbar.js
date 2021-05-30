import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
// import { signOut } from '../../../lib/auth';
// import { addUserInfo } from '../../../redux/actions/airLinesBookingAction';

const logoStyle = {
    height: '30px',
    width: '30%'
}

const Navbar = () => {

    // const dispatch = useDispatch()
    const loggedInData = useSelector((state) => state.airlinesReducers.userInfo);
    const logedInUserMail = loggedInData[0];

    // const handleLogOut = () => {
    //     signOut()
    //     const empty = {}
    //     dispatch(addUserInfo(empty))
    // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" style={logoStyle} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link to="/home" className="nav-link active text-white" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/about" className="nav-link active text-white" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/service" className="nav-link active text-white" aria-current="page">Service</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/blog" className="nav-link active text-white" aria-current="page">Blog</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/order" className="nav-link active text-white" aria-current="page">Order</Link>
                            </li>
                            <li className="nav-item me-2">
                                {
                                    logedInUserMail ?
                                        <a href="/home" classNameName="nav-button text-light d-block">Logout</a>
                                        : <Link to="/login"><button classNameName="nav-button">Login</button></Link>

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