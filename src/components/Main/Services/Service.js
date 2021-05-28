import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


//images 
import emirates from '../../../images/emirits.png';
import qatarAirlines from '../../../images/quatar-airlines.png'
import SaudiAirlines from '../../../images/soudi-airlines.png';
import KoreanAir from '../../../images/korean-air.png';
import VirginAtlanticAirways from '../../../images/virgin-atlentic-airlines.png';
import ThaiAirwaysInternational from '../../../images/thai-airlines.png';
import { Link } from 'react-router-dom';

//fake data
const ariLinesData = [
    {
        name: 'Emirates Airway',
        img: emirates,
        id: '1'
    },
    {
        name: 'Qatar Airways',
        img: qatarAirlines,
        id: '2'
    },
    {
        name: 'Saudi Airlines',
        img: SaudiAirlines,
        id: '3'
    },
    {
        name: 'Korean Air',
        img: KoreanAir,
        id: '4'
    },
    {
        name: 'Virgin Atlantic Airways',
        img: VirginAtlanticAirways,
        id: '5'
    },
    {
        name: 'Thai Airways International',
        img: ThaiAirwaysInternational,
        id: '5'
    },
]


const Service = () => {
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
                                            <button className="btn btn-dark">Book Now <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
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