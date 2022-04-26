import React from 'react';
import Navbar from "../Components/Navbar";
import images from "../images/Hero.jpeg";

function Home() {
  return (
    <div className="mb-7">
        <Navbar />
        <div className="flex pt-10 md:hidden">
            <div className="ml-4 mr-10">
                <h1 className="text-2xl font-semibold text-red-600 tracking-wider leading-relaxed mt-11">"The<br /> people<br /> who give<br /> you their<br /> food give<br /> you their<br /> heart."</h1>
            </div>
            <div>
                <img className="mt-20 rounded-full" src={images} alt="Hero Image"/>
            </div>
        </div>


        {/* Code to make the Landing Page Responsive */}

        <div className="hidden md:block">
        <div className="flex pt-24 px-44">
            <div className="ml-9 mr-10">
                <h1 className="text-4xl font-semibold text-red-600 tracking-wider leading-relaxed mt-24 pl-20">"The people who give<br /> you their food give you<br /> their heart."</h1>
            </div>
            <div>
                <img width="405" className="mt-20 ml-24 rounded-full" src={images} alt="Hero Image" />
            </div>
        </div>
        </div>

        <div className="md:hidden">
        <div className="mt-12 ml-9">
            <h1 className="text-gray-400 mb-1">1000+ reviews</h1>
            <button className="bg-red-600 text-white p-1 mt-1 px-3 rounded-lg mb-3">Order now</button>
        </div>
        </div>

        {/* CTA Responsiveness */}

        <div className="hidden md:block">
        <div className="mt-5 ml-24 px-48 ">
            <h1 className="text-gray-400 mb-1">1000+ reviews</h1>
            <button className="bg-red-600 text-white p-1 mt-1 px-3 rounded-lg mb-3">Order now</button>
        </div>
        </div>

        <div className="absolute top-3/4 sm:hidden">
            <div className="absolute h-11 w-11 bg-red-600 rounded-full left-52"></div>
            <div className="relative h-28 bg-red-600 w-28 rounded-full left-64">
                <div className="absolute h-11 w-11 bg-red-600 rounded-full -left-16 top-24"></div>
            </div>
        </div>
    </div>
  )
}

export default Home;