import React from 'react';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import "./Contacts.css"

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 col-sm-12'>
            <h1 className="" align="center"><h1 className='contactTitle'>Bestbite</h1></h1>
            <div align="center"><span className='location-text' align="center">See our actual location in nigeria, our representatives all online 24/7 and ready to take your orders and enquries</span></div>
            <p align="center"> <hr className='small-line' /></p>
          </div>
        </div>
        <div className='row row2'>
          <div className='col-md-4'>
            <div>
              <p className='content1'>
                Bestbite is is a Nigerian restaurant chain headquartered in Abuja Nigeria Capital City, that specializes in african
                dishes and continental dishes.
              </p>

              <p className='content2'>
                It is the world's second-largest restaurant chain after McDonald's,
                with 45,621 locations globally in 150 countries as of December 2021.
              </p> <br />
              <p className='content3'>
                info@bestbite.com.ng
              </p> <br />
              <p className='content3'>
                The chain is a subsidiary of SweetBite
                Restaurant. Bestbite has over 50 thausand workers globally.
              </p> <br />
              <p className='content3'>
                <b>Get in touch.</b> <br />
                Curious about something? We're here to help.

                We do our best to respond to emails within 48 hours (and are even faster on Instagram).
              </p> <br />
              <p className='content4'>
                <button className='my-8
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
            ease-in-out'>Explore</button>
              </p>
            </div>
          </div>
          <div className='col-md-4'>

            <div>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.9328906696633!2d3.9625187647478537!3d7.457270791391303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ecf3e6eea7bd%3A0xf1d6ae272af91f44!2sSide%20Hustle!5e1!3m2!1sen!2sng!4v1650897960972!5m2!1sen!2sng' width="100%" height="350"></iframe>
              <p>E-mail: BestBite@gmail.com <br />
                Phone number: +234 000 000 0000
                etc</p>
              <span>
                you can also visit our website at <b><i>www.bestbite.com.ng</i>our website is open to everyone and all orders can be placed from the website</b>
              </span>

            </div>
          </div>
          <div className='col-md-4'>
            <h1 className='contact-title2'>CONTACT US TODAY</h1>
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
                <div class="form-group subscribeNletter form-check text-left mb-6">
                  <input type="checkbox" /> <span>subscribe to our news letter</span>
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact; 