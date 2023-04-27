import React from 'react'
import "./Properties.css"
import Slider from "react-slick";
import { AiOutlineArrowRight } from 'react-icons/ai';
import  sliderArr from "../../Static-Data/Properties-Slider/Properties-slider"
function Properties() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            }
            
          ]
      };
    return (
        <div className='properties-main'>
            <div className="properties-main--inner">
            <div className="properties-title">
                <div className="properties-title--mainR">
                <span>Featured Properties</span>
                </div>
                <div className='properties-title--mainL'>
                <div className="properties-title--arrow">
                    <AiOutlineArrowRight/>
                </div>
                <div>
                <span className="properties-title--arrow_title">VIEW ALL PROPERTIES</span>
                </div>
                </div>
            </div>

            <div className="properties-slider">
            <div>
        <Slider {...settings}>
            {sliderArr.map((slider, index) =>
              <div key={index} className='house-main'>
              <div className="house-auction">{slider.auction}</div>
              <div className="house-date">{slider.date}</div>
              <div className="house-office">{slider.office}</div>
              <div className="house-img"></div>
              <div className="house-bid">
                <div className="bid-start">{slider.bid}</div>
                <div className="bid-price">{slider.bidPrice}</div>
              </div>
              <div className="house-title">{slider.property}</div>
              <div className="house-address">{slider.address}</div>
            </div>
       )}
        </Slider>
      </div>
            </div>
            </div>
        </div>
    )
}

export default Properties