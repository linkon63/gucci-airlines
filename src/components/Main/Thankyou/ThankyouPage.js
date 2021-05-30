import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const ThankYouPage = () => {
    const history = useHistory()
    const orderData = useSelector(state => state.airlinesReducers.airLinesBookingList[0])
    console.log(orderData)
    return (
        <section className="container">
            <h3 className="text-center my-4 title">Thank You For Your Order</h3>
            <div className="col-12 col-sm-12 col-md-8 col-lg-6 mx-auto shadow-sm p-5 mt-5">
                <h6><small>Your Payment Id:</small> <small className="text-primary">{orderData?.paymentId}</small></h6>
                <h6><small>Your Airlines Name:</small> <small className="text-primary">{orderData?.name}</small></h6>
                <h6><small>Your Paid: </small> <strong className="text-primary"> $1200</strong></h6>
                <h6 className="text-center py-3">
                    You are going from <small className="text-primary"> {orderData?.start}</small> to
                    <small className="text-primary"> {orderData?.end}</small> at
                    <small className="text-primary"> {orderData?.startDate}</small>.
                    And you will return
                    <small className="text-primary">{orderData?.endDate}</small></h6>
                <button onClick={() => history.push('/')} className="mt-3 button">Back Home</button>
            </div>
        </section>
    );
};

export default ThankYouPage;