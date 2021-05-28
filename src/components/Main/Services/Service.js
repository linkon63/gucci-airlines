import React from 'react';

//images 
import emirates from '../../../images/emirits.png';
import qatarAirlines from '../../../images/quatar-airlines.png'
import SaudiAirlines from '../../../images/soudi-airlines.png';
import KoreanAir from '../../../images/korean-air.png';
import VirginAtlanticAirways from '../../../images/virgin-atlentic-airlines.png';
import ThaiAirwaysInternational from '../../../images/thai-airlines.png';

//fake data
const ariLinesData = [
    {
        name: 'Emirates Airway',
        img: emirates
    },
    {
        name: 'Qatar Airways',
        img: qatarAirlines
    },
    {
        name: 'Saudi Airlines',
        img: SaudiAirlines
    },
    {
        name: 'Korean Air',
        img: KoreanAir
    },
    {
        name: 'Virgin Atlantic Airways',
        img: VirginAtlanticAirways
    },
    {
        name: 'Thai Airways International',
        img: ThaiAirwaysInternational
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