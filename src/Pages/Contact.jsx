import React from 'react';
import Navbar from "../Components/Navbar";
import Map from "../Map/map.jpeg";

function Contact() {
  return (
    <div>
        <Navbar />
        <div className="px-5 mt-5 pl-5 md:px-40">
          <h1 className="text-2xl text-red-600 font-bold mb-3">Bestbite</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
            <br />
            <h1 className="font-semibold text-lg mb-5">LOCATE US TODAY</h1>
            <div className="mb-5 md:justify-center flex items-center">
              <img className="md:w-1/2" src={Map} alt="map" />
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-white mb-10 mt-15">
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
              id="exampleCheck25"  />
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
          </div>
          <button type="submit" class="
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
  )
}

export default Contact; 