import React from 'react';
import Footer from '../../Shared/Footer/Footer.js';
import Navbar from '../../Shared/Navbar/Navbar';
import team1 from '../../../images/team-1.jpg';
import team2 from '../../../images/team-2.jpg';
import team3 from '../../../images/team-3.jpg';
import team4 from '../../../images/team-4.jpg';
import team5 from '../../../images/team-5.jpg';
import team6 from '../../../images/team-6.jpg';

const About = () => {
    return (
       <>
       <Navbar></Navbar>
       <h3 className="mt-5 pt-5 text-center">About Team</h3>
       <div className="container">
       <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
          <div class="col">
        <div class="card h-100">
      <img src={team1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">Headermaster</h5>
        <p class="card-text">He can make all decisions. And give direction to the pilot to follow his direction when flying a plane.if he saw any bad weather he immediately informs to pilot.He also sees the direction of other planes and he also helps the pilot to root.He is the key person of the airline who can assure a safe journey. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={team2} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">Manager</h5>
        <p class="card-text">An aviation manager handles all the operations of the aviation department. He is responsible of assuring that the department complies with FAA regulations as well as oversees the maintenance, scheduling and safety procedure of the aviation department are done efficiently.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={team3} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">Pilot</h5>
        <p class="card-text">Professional pilots fly and navigate airplanes, helicopters, and other types of aircraft. Airline pilots work for specific companies, transporting people and cargo on fixed schedules, while commercial pilots work for companies that offer charter flights, rescue operations, or aerial photography.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={team4} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">Pilot</h5>
        <p class="card-text">Professional pilots fly and navigate airplanes, helicopters, and other types of aircraft. Airline pilots work for specific companies, transporting people and cargo on fixed schedules, while commercial pilots work for companies that offer charter flights, rescue operations, or aerial photography.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={team5} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">Engineer</h5>
        <p class="card-text">Aircraft engineers are responsible for the maintenance of planes and the systems onboard. This means running diagnostics, making repairs, troubleshooting problems and making upgrades. To start, you'll likely be part of a team, being given a specific part of the plane to work on.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={team6} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">Stewardess</h5>
        <p class="card-text">More often called Flight Attendants, Stewardesses ensures the safety and comfort of airline passengers. They prepare and serve meals and beverages, communicate important safety policies and rules, and help to maintain the interior of the plane during the flight.</p>
      </div>
    </div>
  </div>
</div>
</div>
       <Footer></Footer>
       </>
    );
};

export default About;