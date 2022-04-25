import React from 'react';


function Card(props) {
  return (
    <div className="px-5 mb-5 md:px-40">
        <div className="hover:shadow-xl transition-all">
            <img className="w-full overflow-hidden rounded-t" src={props.src} alt="Pizza Image" />
                <div className="flex justify-between bg-red-100 p-1">
            <div className="">
                <div className="ml-3"><h1 className="font-semibold">{ props.title }</h1><h1>{ props.price }</h1>
                </div>
            </div>
            <div className="flex mt-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card;