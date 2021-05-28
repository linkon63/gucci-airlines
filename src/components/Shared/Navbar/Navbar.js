import React from 'react';
import logo from '../../../images/logo.png';

const logoStyle = {
    height: '60px',
}

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#1">
                        <img src={logo} alt="logo" style={logoStyle}/>
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
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#2">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" aria-current="page" href="#2">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#3">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#3">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#3">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#3">Order</a>
                            </li>
                            <li class="nav-item">
                                <button className="btn btn-outline-info">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;