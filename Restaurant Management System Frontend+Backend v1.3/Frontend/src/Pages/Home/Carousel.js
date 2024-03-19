import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
export default function Crousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={img1}
        alt='...'
      >
        <Link to={"/customer/signup"}><h2>Order Dish</h2></Link>
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={img2}
        alt='...'
      >
        <Link to={"/customer/signup"}><h2>Order Dish</h2></Link>
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={img3}
        alt='...'
      >
        <Link to={"/customer/signup"}><h2>Order Dish</h2></Link>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}