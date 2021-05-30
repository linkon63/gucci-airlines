import React from 'react';
import Footer from '../../Shared/Footer/Footer.js';
import Navbar from '../../Shared/Navbar/Navbar.js';
import emirates from '../../../images/blog-1.png';
import qatar from '../../../images/blog-2.png';
import saudi from '../../../images/blog-3.jpg';
import thai from '../../../images/blog-4.png';
import virgin from '../../../images/blog-5.jpg';
import korean from '../../../images/blog-6.jpg';

const blogData = [
    {
        name: 'Emirates  Airline',
        img: emirates,
        description: "Emirates is the largest airline and the flag carrier of the United Arab Emirates. Based in Garhoud, Dubai, the airline is a subsidiary of The Emirates Group, which is owned by the government of Dubai's Investment Corporation of Dubai."
    },
    {
        name: 'Qatar  Airline',
        img: qatar,
        description: "Qantas Airways Limited is the flag carrier of Australia and its largest airline by fleet size, international flights and international destinations. It is the world's third-oldest airline still in operation, having been founded in November 1920; it began international passenger flights in May 1935."
    },
    {
        name: 'Saudi Airline',
        img: saudi,
        description: "Saudia, formerly known as Saudi Arabian Airlines, is the flag carrier of Saudi Arabia, based in Jeddah. The airline's main operational base is at King Abdulaziz International Airport in Jeddah. King Khalid International Airport in Riyadh and King Fahd International Airport in Dammam are secondary hubs."
    },
    {
        name: 'Thai Airline',
        img: thai,
        description: 'Thai Airways International Public Co., ltd., trading as THAI is the flag carrier airline of Thailand. Formed in 1961, the airline has its corporate headquarters in Vibhavadi Rangsit Road, Chatuchak District, Bangkok, and primarily operates from Suvarnabhumi Airport. THAI is a founding member of the Star Alliance.'
    },
    {
        name: 'Atlantic Airline',
        img: virgin,
        description: 'Atlantic Airways is the national airline of the Faroe Islands, operating domestic helicopter services and international passenger services as well as search and rescue responsibilities from its base at Vágar Airport, on the Faroese island of Vágar. Most of its pilots are members of the Faroese Pilot Association.'
    },
    {
        name: 'Korean Airline',
        img: korean,
         description: "The Korean Air Co., Ltd., operating as Korean Air, is the largest airline and flag carrier of South Korea based on fleet size, international destinations and international flights. The airline's global headquarters is located in Seoul, South Korea."
    },
]

const Blog = () => {
    return (
        <>
        <Navbar></Navbar>
        <h3 className="mt-5 pt-5 text-center">Blog</h3>
        <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 my-3 text-center">
         {blogData.map(blog => (
             <div class="col">
             <div class="card h-100">
               <img src={blog.img} class="card-img-top" alt={blog.name} />
               <div class="card-body">
                 <h5 class="card-title text-primary">{blog.name}</h5>
                 <p class="card-text">{blog.description}</p>
               </div>
               <div class="card-footer">
                 <small class="text-muted">Last updated 3 mins ago</small>
               </div>
             </div>
           </div>
         )) }
           </div>
         </div>
        <Footer></Footer>
        </>
    );
};

export default Blog;