import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';

const Booking = () => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data)
        history.push("/checkout");
    };

    const data = useSelector(state => state.airlinesReducers.singleAirlinesData)
    
    return (
        <div>
            <Navbar />
            {/* <Header></Header> */}
                <section className="container">
                <h3 className="text-center py-5">Welcome to, {data.name} </h3>
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
                                <label htmlFor="passengers">Passengers:</label>
                                <select className="form-control" name="passengers" ref={register({required: true})}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {errors.passengers && <span>This field is required</span>}
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="end">Type:</label>
                                <select className="form-control" name="type" ref={register({required: true})}>
                                    <option value="vip">VIP</option>
                                    <option value="economy">ECONOMY</option>
                                </select>
                                {errors.type && <span>This field is required</span>}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark mt-3 d-block ms-auto">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Booking;