import React from 'react';
import spinner from '../../images/Spinner-1s-200px.gif';
const Preloader = () => {
    return (
        <div className="d-flex  align-items-center justify-content-center" style={{height:'100vh'}}>
            <img src={spinner} alt="" />
        </div>
    );
};

export default Preloader;