import React from 'react';
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import images from "../images/Icecream.jpeg";
import image from "../image/Product1.jpeg";
import Picture from "../Picture/Rice.jpeg";
import Drink from "../Drink/drinks.jpeg";
import mega from "../mega/Eba & soup.jpeg";
import Footer from "../Components/Footer";

function Products() {
  return (
    <div>
        <Navbar />
        <div className="">
          <div className="mt-5 pl-5 font-semibold text-red-600 mb-3 md:text-xl md:ml-36"><h1>Deal of the day</h1></div>
        </div>
        <Card 
          title="Pizza"
          price="$20.50"
          src={image}
        />
        <div className="mt-5 pl-5 font-semibold text-red-600 mb-3 md:text-xl md:ml-36"><h1>Other available products</h1></div>
        <Card 
          title="Rice"
          price="$2.50"
          src={Picture}
        />
        <Card
          title="Ice cream"
          price="$3.50"
          src={images}
        />
        <Card 
          title="Drinks"
          price="$2.00"
          src={Drink}
        />
        <Card 
          title="Eba and Soup"
          price="$10.00"
          src={mega}
        />
        <Footer />
    </div>
  )
}

export default Products;