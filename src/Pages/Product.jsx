import React from 'react';
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import images from "../images/Icecream.jpeg";
import image from "../image/Product1.jpeg";
import Picture from "../Picture/Rice.jpeg";
import Drink from "../Drink/drinks.jpeg";
import mega from "../mega/Eba & soup.jpeg";
import "./productcss.css";
import FooterProduct from '../Components/FooterProduct';
import Fav from "./Favicon.png";

function Products() {
  return (
    <div>

      <Navbar />
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <div className='product-page-title'>
                <h1 lassName='product-page-title'>HERE ARE TODAY'S MENU </h1>
                {/* <img src={Fav} alt="" /> */}
              </div>
            </div>
            <div className='col-md-3'></div>
          </div>
          <div className='row'>
            <div className='ppt-sub'>
              <div><marquee behavior="slide" direction="">Bestbite is is a Nigerian restaurant chain headquartered in Abuja Nigeria Capital City, that specializes in african dishes and continental dishes.
                It is the world's second-largest restaurant chain after McDonald's, with 45,621 locations globally in 150 countries as of December 2021.
                info@bestbite.com.ng
                The chain is a subsidiary of SweetBite Restaurant. Bestbite has over 50 thausand workers globally.
                Get in touch.
                Curious about something? We're here to help. We do our best to respond to emails within 48 hours (and are even faster on Instagram).</marquee></div>
            </div>

            <div className='col-md-4'>
              <div>

                <div className=""></div>
                <Card title="Pizza" width="20px" price="$20.50" src={image} />
              </div>
            </div>
            <div className='col-md-4'>
              <div>

                <Card className="food2" title="Rice" price="$2.50" src={Picture} />
              </div>
            </div>
            <div className='col-md-4'>
              <div>
                <Card title="Ice cream" price="$3.50" src={images} />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div>

                <Card title="Pizza" price="$20.50" src={image} />
              </div>
            </div>
            <div className='col-md-4'>
              <div>

                <Card title="Rice" price="$2.50" src={Picture} />
              </div>
            </div>
            <div className='col-md-4'>
              <div>
                <Card title="Ice cream" price="$3.50" src={images} />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div>

                <Card title="Pizza" price="$20.50" src={image} />
              </div>
            </div>
            <div className='col-md-4'>
              <div>

                <Card title="Rice" price="$2.50" src={Picture} />
              </div>
            </div>
            <div className='col-md-4'>
              <div>
                <Card title="Ice cream" price="$3.50" src={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterProduct />
      </div>
    </div>
  )
}

export default Products;