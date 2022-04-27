import React from 'react';
import Navhome from "../Components/Navbar";
import images from "../images/Hero.jpeg";
import Footer from '../Components/Footer';
import "./Homes.css";
// import bootstrap from 'bootstrap';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="">
            <Navhome />
            <div class="bg-image ">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-10'>
                            <div className='landing-page-content'>
                                <h1 className='animate animate wave'>Welcome to <span className='brandname'>BESTBITE</span></h1>
                            </div>
                            <div><p className='landp-c2'>Delivering great food for more than 18 years!</p></div>
                            <div className='btns'>
                                <Link to="/products"><button className='btn btn-primary '>See Our Menu</button></Link>
                                
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </div>
            {/* something was here */}
            <Footer />
        </div>
    );
}

export default Home;