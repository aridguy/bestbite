import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';

function About() {
  return (
    <div>
        <Navbar />
        <div className="px-5 mt-5 mb-10 pl-5 text-lg md:px-40">
          <h1><span className="text-red-600 font-bold">Bestbite</span> Best Bite believes that great food are made from the heart and so we provide our customers with so many options for everyone to enjoy including homemade cooked meals like Swallow and all kinds of Soups, whilst still providing fast food like pizza, burgers etc. We also offer a wide variety of side order. Everything is available for dining take out or home delivery. 

Best Bite appeals to a broad range of customers who enjoy the best of fast food at an amazing speed and affordable price.

Founded in April of 2022 and based remotely in Nigeria. Best Bite is a trusted food service platform for people wanting a trusted and reliable feeding structure. We uphold a culture of trust and excellence through our product, and service experience. By creating a world where anyone can order food with their phones and then be assured to have it received safely.

          </h1>
        </div>
        <Footer />
    </div>
  )
}

export default About;