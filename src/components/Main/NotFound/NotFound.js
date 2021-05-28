import React from 'react';
import notfoundImg from '../../../images/not-found.jpg';

const imgStyle = {
    height: '100vh',
    width: '100%'
}
const NotFound = () => {
    return (
        <div className="container">
            <img src={notfoundImg} alt="notFound" style={imgStyle} />
        </div>
    );
};

export default NotFound;