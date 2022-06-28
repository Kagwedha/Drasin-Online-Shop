import React from 'react';

import Slider from 'react-slick';

import person1 from "../../../assets/images/person1.jpg";
import person2 from "../../../assets/images/person2.jpg";
import person3 from "../../../assets/images/person3.jpg";

import "../../../styles/slider.css"

const TestimonialSlider = () => {

    const settings ={
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll:1
    }
  return <Slider { ...settings}>
    <div>
        <p className='review_text'>
            "Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Eius consequatur sed dolorum 
            tenetur laudantium vero fugit excepturi vel quis libero veniam dolorem 
            aliquam enim corrupti, quaerat rerum hic dolores cumque."
        </p>
        <div className='slider_content d-flex align-items-center gap-3'>
            <img src={person1} alt="person" className='rounded'/>
            <h6>John Doe</h6>
        </div>
    </div>
    <div>
    <p className='review_text'>
            "Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Eius consequatur sed dolorum 
            tenetur laudantium vero fugit excepturi vel quis libero veniam dolorem 
            aliquam enim corrupti, quaerat rerum hic dolores cumque."
        </p>
        <div className='slider_content d-flex align-items-center gap-3'>
            <img src={person2} alt="person" className='rounded'/>
            <h6>Immanuel Homateni</h6>
        </div>
    </div>
    <div>
    <p className='review_text'>
            "Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Eius consequatur sed dolorum 
            tenetur laudantium vero fugit excepturi vel quis libero veniam dolorem 
            aliquam enim corrupti, quaerat rerum hic dolores cumque."
        </p>
        <div className='slider_content d-flex align-items-center gap-3'>
            <img src={person3} alt="person" className='rounded' />
            <h6>Ester Shikongo</h6>
        </div>
    </div>
  </Slider>
}

export default TestimonialSlider