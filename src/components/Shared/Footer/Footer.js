import React from 'react';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const logoStyle = {
    height: '70px',
}

const Footer = () => {
    return (
        <div className="bg-dark text-center container-fluid">
            <div className="py-5 border-bottom border-white">
                <div className="row px-0 px-sm-0 px-lg-4 d-flex justify-center align-items-center">
                    <div className="col-md-6 text-white">
                        <p className="subtitle">Want to know about our offers first?</p>
                        <h3 className="title">Subscribe our newsletter</h3>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form_control w-100" placeholder="Your Email..." />
                        <button className="button position-absolute position">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-12 col-md-7 col-sm-12 col-lg-6 mx-auto">
                    <img src={logo} alt="logo" style={logoStyle} />
                    <p className="text-white my-3">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
                    <span className="text-white m-3"><FontAwesomeIcon icon={faTwitter} /></span>
                    <span className="text-white m-3"><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span className="text-white m-3"><FontAwesomeIcon icon={faInstagram} /></span>
                    <span className="text-white m-3"><FontAwesomeIcon icon={faYoutube} /></span>
                </div>
            </div>
            <div className="py-3">
                <p className="text-white">&copy; All right reserved by- 2021 </p>
            </div>
        </div>
    );
};

export default Footer;