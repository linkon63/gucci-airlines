import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentCart } from './PaymentCart';

const stripePromise = loadStripe('pk_test_51Ig0UgJGVGYGB4Cnu7o1bsmCeLLLnRCJL85Gkanxfmk6DFk91y6a3jP3E6eh9mI5bdYCtVQ3vuYMDaznhqDaZKn200jcUC5R6K');

const CheckoutPage = () => {
    return (
        <div className="container">
            <div className="row mt-5 py-5">
                <div className="col-12 col-sm-12 col-md-9 col-lg-6 mx-auto bg-light shadow-sm p-5">
                    <Elements stripe={stripePromise}>
                        <PaymentCart />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;