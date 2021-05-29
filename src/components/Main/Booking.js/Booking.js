import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addToTemporaryBookingList } from '../../../redux/actions/airLinesBookingAction';
import Navbar from '../../Shared/Navbar/Navbar';

const Booking = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const airlineData = useSelector(state => state.airlinesReducers.singleAirlinesData)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const orderData = {...data, ...airlineData}
        dispatch(addToTemporaryBookingList(orderData))
        history.push("/checkout");
    };

    // useSelector(state => console.log(state))

    return (
        <div>
            <Navbar></Navbar>
            <section className="container mt-5">
                <h3 className="text-center py-5">Welcome to {airlineData.name} </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" col-lg-9 mx-auto p-5 shadow-sm">

                        <div className="row">
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
                        <div className="col-md-3">
                            <label htmlFor="startDate">Depart Date:</label>
                            <input ref={register({ required: true })} type="date" name="startDate" className="form-control" placeholder="City Or Airport Name" />
                            {errors.endDate && <span>This field is required</span>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="endDate">Return Date:</label>
                            <input ref={register({ required: true })} type="date" name="endDate" className="form-control" placeholder="City or Airport Name" />
                            {errors.endDate && <span>This field is required</span>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="passengers">Total seat:</label>
                            <select className="form-control" name="totalSeat" ref={register({required: true})}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {errors.passengers && <span>This field is required</span>}
                        </div>

                        <button type="submit" className="btn btn-dark mt-3 d-block ms-auto">Submit</button>
                    </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Booking;