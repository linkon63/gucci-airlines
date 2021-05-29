import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSingleAirlineData } from '../../../redux/actions/airLinesBookingAction';

const Service = () => {

    const ariLinesData = useSelector((state) => {
        return state.airlinesReducers.airlines
    })

    const dispatch = useDispatch();

    return (
        <section style={{ backgroundColor: '#F6F4EF' }}>
            <h4 className="text-center pt-5">SERVICES THAT WE PROVIDE</h4>
            <div className="container py-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        ariLinesData && ariLinesData.map(airline => (

                            <div class="col">
                                <div class="card h-100 border-0 p-3 rounded">
                                    <img src={airline.img} class="card-img-top" alt={airline.name} />
                                    <div class="card-body">
                                        <h5 class="card-title">{airline.name}</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur.</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/book/${airline.id}`}>
                                            <button onClick={() => dispatch(showSingleAirlineData(airline.id))} className="btn btn-dark">Book Now <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;