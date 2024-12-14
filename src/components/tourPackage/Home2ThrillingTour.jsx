"use client"; // Ensures client-side rendering for React

import React, { useMemo } from "react";
import Image from "next/image";
import box1img from "../../../public/image/offer1.png"; // Update the path if necessary
import box2img from "../../../public/image/offer2.png"; // Update the path if necessary
import box3img from "../../../public/image/offer3.png"; // Update the path if necessary
import Slider from "react-slick";

const Home2Destinationslide = () => {
  const details = [
    {
      img: box2img,
      flightname: "Fixed Departure",
      title: "Solo Travellers",
      desc: "Social travel for 18-35 years old.",
    },
    {
      img: box2img,
      flightname: "Fixed Departure",
      title: "Solo Travellers 1",
      desc: "Social travel for 18-35 years old.",
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
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    centerMode: true, // Enable center mode
    centerPadding: "40px",
    arrows: false,

    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1836,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 1690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-20px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-50px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px",
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px",
        },
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-120px",
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-120px",
        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-130px",
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-80px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-110px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-90px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "-110px",
        },
      },

      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "-40px",
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="margintop checkmail exlusive-top-main">
      <div className="heading-for-all rakshit-heading-for-all">
        <h2>Exclusive Deals</h2>
        <a href="#">HOT DEAL </a>
      </div>
      <div className="testimonial-card-slider-area">
        <Slider {...sliderSettings} className="exclusive-offer-slick">
          {details.map((detail, index) => (
            <div className="swiper-slide" key={index}>
              <div className="exclusive-deal">
                <div className="row align-items-center">
                  {/* Left Image */}
                  <div className="div-image-exclusive col-6">
                    <Image src={detail.img} alt="Exclusive Deal" />
                  </div>

                  {/* Right Content */}
                  <div className="exclusive-content col-6">
                    <span className="fixed-departure">{detail.flightname}</span>
                    <h3 className="medium-head">{detail.title}</h3>
                    <p className="lower-head">{detail.desc}</p>
                    <button
                      className="primary-btn1 home-button book-now rakshit-book-now-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#user-login"
                    >
                      Book Now
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.44301 12.4256C2.36781 12.2954 2.34745 12.166 2.38192 12.0376C2.41639 11.9092 2.4988 11.8073 2.62915 11.7321L13.4319 5.49505L8.88417 4.2784C8.73 4.23716 8.61532 4.15141 8.54012 4.02117C8.46493 3.89092 8.45271 3.75687 8.50347 3.61902C8.55424 3.48117 8.64479 3.37462 8.77514 3.29936C8.90549 3.22411 9.03835 3.19082 9.17371 3.1995L14.9548 4.74609C15.0764 4.80615 15.1747 4.9013 15.2499 5.03155C15.3251 5.16179 15.3584 5.29458 15.3496 5.42989L13.7984 11.2097C13.7383 11.3313 13.643 11.4297 13.5127 11.505C13.3823 11.5802 13.2448 11.6054 13.1 11.5804C12.9552 11.5555 12.8452 11.4779 12.77 11.3476C12.6949 11.2174 12.6779 11.0752 12.7193 10.921L13.9395 6.37423L3.13674 12.6112C3.00639 12.6865 2.87698 12.7069 2.74851 12.6726C2.62004 12.6382 2.51821 12.5559 2.44301 12.4256Z"
                          fill="#F1871C"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home2Destinationslide;
