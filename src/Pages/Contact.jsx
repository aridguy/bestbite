import React from 'react';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5 pl-5 md:px-40">
        <h1 className="text-2xl text-red-600 font-bold mb-3">Bestbite</h1>
        <p className="mb-7">Bestbite is a Nigerian restaurant chain headquartered in Abuja Nigeria Capital City, that specializes in african dishes and continental dishes. It is the world's second-largest restaurant chain after McDonald's,
          with 45,621 locations globally in 150 countries as of December 2021. The chain is a subsidiary of SweetBite Restaurant. Bestbite has over 50 thousand workers globally. Our mission is to leverage our experience and expertise to build the best restaurant on the planet and create the best taste like never before, also build relationships with every single customers.</p>
        <h1 className="font-semibold text-lg mb-13 mt-30">LOCATE US TODAY</h1>
        <div className="mb-5 md:justify-center flex items-center">
          <iframe className="mt-7" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.9328906696633!2d3.9625187647478537!3d7.457270791391303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ecf3e6eea7bd%3A0xf1d6ae272af91f44!2sSide%20Hustle!5e1!3m2!1sen!2sng!4v1650897960972!5m2!1sen!2sng' width="100%" height="450"></iframe>
        </div>
        <div class="block p-6 rounded-lg shadow-lg bg-white mb-10 mt-15 my-9">
          <form className="">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group mb-6">
                <input type="text" class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" id="exampleInput123"
                  aria-describedby="emailHelp123" placeholder="First name" />
              </div>
              <div class="form-group mb-6">
                <input type="text" class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" id="exampleInput124"
                  aria-describedby="emailHelp124" placeholder="Last name" />
              </div>
            </div>
            <div class="form-group mb-6">
              <input type="email" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" id="exampleInput125"
                placeholder="Email address" />
            </div>
            <div class="form-group form-check text-center mb-6">
              <input type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck25" />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
            </div>
            <button type="submit" class="
            my-8
            w-full
            px-6
            py-2.5
            bg-red-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-500 hover:shadow-lg
            focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-red-500 active:shadow-lg
            transition
            duration-150
            ease-in-out">Sign up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact; 