import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentCart } from './PaymentCart';
import Stripe from '../../../images/stripe.svg';
import Navbar from '../../Shared/Navbar/Navbar';

const stripePromise = loadStripe('pk_test_51Ig0UgJGVGYGB4Cnu7o1bsmCeLLLnRCJL85Gkanxfmk6DFk91y6a3jP3E6eh9mI5bdYCtVQ3vuYMDaznhqDaZKn200jcUC5R6K');

const CheckoutPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5 py-5">
                    <div className="col-md-6">
                        <img src={Stripe} alt="" srcset="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 mx-auto shadow-sm pt-5">
                        <Elements stripe={stripePromise}>
                            <PaymentCart />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;