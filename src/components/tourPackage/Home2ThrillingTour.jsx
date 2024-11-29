"use client"; // Ensures client-side rendering for React
import { Swiper, SwiperSlide } from "swiper/react";

import React, { useMemo } from "react";
import Image from "next/image";
import box1img from "../../../public/image/offer1.png"; // Update the path if necessary
import box2img from "../../../public/image/offer2.png"; // Update the path if necessary
import box3img from "../../../public/image/offer3.png"; // Update the path if necessary


const Home2Destinationslide = () => {
  
  const details = [
    {
      img: box1img,
      flightname: "International Flight",
      title: "Huge savings on flight with trxvl.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Enjoy upto 20% off on International Hotels",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box3img,
      flightname: "Domestic Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
    {
      img: box2img,
      flightname: "International Flight",
      title: "Explore the world with discounted rates.",
      desc: "International flights starting @ just ₹4999",
    },
  ];
  const settings = useMemo(() => {
    return {
      speed: 2500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 100,

        },
        386: {
          slidesPerView: 1,
          spaceBetween: 40,

        },
        400: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        534: {
          slidesPerView: 2,
          spaceBetween: 280,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 280,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 300,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 330,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 650,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 550,
        },
          1400: {
            slidesPerView: 3,
            spaceBetween: 430,


          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 300,


          },
          1700: {
            slidesPerView: 3,
            spaceBetween: 130,

          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 510,

          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 330,

          },
          2200: {
            slidesPerView: 4,
            spaceBetween: 250,

          },
          2400: {
            slidesPerView: 4,
            spaceBetween: 200,

          },
      },
    };
  }, []);

  return (
    <div className="margintop checkmail exlusive-top-main" >
  <div className="heading-for-all">
  <h2>Exclusive Offers</h2>
  <span>Select the offer that suits you best</span>
  </div>
  <div className="testimonial-card-slider-area">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
              style={{
                padding:"1rem"
              }}
                {...settings}
                className="swiper home3-testimonial-card-slider"
              >
            
                {details.map((detail, index) => (
                
                  <SwiperSlide className="swiper-slide">
             <div className="exclusive-deal row">
                  <div className="div-image-excluse col-6">
                    <Image src={detail.img} alt="" />
                  </div>

                  <div className="≥≥≥≥. col-6">
                    <p className="upper-head">{detail.flightname}</p>
                    <h3 className="medium-head">{detail.title}</h3>
                    <p className="lower-head">{detail.desc}</p>
                    <button className="primary-btn1 two d-xl-flex d-none home-button book-now-thrill">Book Now</button>
                  </div>
             </div>
                  </SwiperSlide>
                  )
                )}
     
             
              </Swiper>
            </div>
          </div>
       
        </div>
    </div>
  );
};

export default Home2Destinationslide;
