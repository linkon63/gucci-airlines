import React from 'react';
import { useHistory } from 'react-router';
import constructorImg from '../../../images/constructor.svg';

const Orders = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="col-md-8 mx-auto mt-3">
                <img src={constructorImg} alt="constructor"  className="img-fluid"/>
                <h1 className="text-center pt-5">This page is under constructor....</h1>
                <button className="button d-block mx-auto" onClick={() => history.push('/')}>Back Home</button>
            </div>
        </div>
    );
};

export default Orders;