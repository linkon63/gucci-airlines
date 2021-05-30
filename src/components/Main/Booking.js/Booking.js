import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addToTemporaryBookingList } from '../../../redux/actions/airLinesBookingAction';
import Navbar from '../../Shared/Navbar/Navbar';
import booking from '../../../images/booking.svg';

const Booking = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const airlineData = useSelector(state => state.airlinesReducers.singleAirlinesData)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const orderData = { ...data, ...airlineData }
        dispatch(addToTemporaryBookingList(orderData))
        history.push("/checkout");
    };

    // useSelector(state => console.log(state))

    return (
        <div>
            <Navbar></Navbar>
            <section className="container mt-5">
                <h3 className="text-center title py-5">Welcome to {airlineData.name} </h3>
                <div className="row">
                    <div className="col-md-5">
                        <img src={booking} alt="alt" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit(onSubmit)} className="shadow-sm p-3">
                            <div className="col-12 p-2">

                                <div className="row"
                                // style={{backgroundImage: 'url(../../../../../images/form-bg.png)', height: '100%',width: '100%', backgroundSize: 'cover'}}
                                >
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="start">From:</label>
                                        <input type="text" ref={register({ required: true })} name="start" className="form-control" placeholder="City Or Airport Name" />
                                        {errors.start && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="end">To:</label>
                                        <input ref={register({ required: true })} type="text" name="end" className="form-control" placeholder="City or Airport Name" />
                                        {errors.end && <span>This field is required</span>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <label htmlFor="startDate">Depart Date:</label>
                                        <input ref={register({ required: true })} type="date" name="startDate" className="form-control" placeholder="City Or Airport Name" />
                                        {errors.endDate && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label htmlFor="endDate">Return Date:</label>
                                        <input ref={register({ required: true })} type="date" name="endDate" className="form-control" placeholder="City or Airport Name" />
                                        {errors.endDate && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label htmlFor="passengers">Total seat:</label>
                                        <select className="form-control" name="totalSeat" ref={register({ required: true })}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        {errors.passengers && <span>This field is required</span>}
                                    </div>

                                    <div className="col-md-6 mt-4">
                                    <button type="submit" className="button mt-2 d-block w-100 ms-auto">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;