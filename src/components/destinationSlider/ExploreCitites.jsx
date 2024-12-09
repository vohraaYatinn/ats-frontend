"use client"; // Add this if you're using Next.js Client Component

import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/city-1.png';
import image2 from '../../../public/image/city-2.png';
import image3 from '../../../public/image/city-3.png';
import image4 from '../../../public/image/city-4.png';
import leaf from '../../../public/image/leaf.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";

const ExploreCities = () => {
  const details = [
    {
      img: image1,
      title: "spain",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image2,
      title: "italy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image3,
      title: "usa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: image4,
      title: "japan",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

  
  ];
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false, // Prevents slider from pausing on hover
    pauseOnFocus: false, // Prevents slider from pausing on focus
    pauseOnDotsHover: false, // Prevents slider from pausing when dots are hovered
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginRight: '-10px',
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          fontSize: 20,
          color: '#006370',
          width: '35px',
          height: '35px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: '-10px',
        
          cursor: 'pointer', // Ensures pointer appears on hover
          '&:hover': { backgroundColor: '#f0f0f0',color:'#006370' }, // Optional hover effect
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
  
  
    ],
  };

  return (
    <div>
      <div className="country-top countries-conatiner">
        <img className="leaf-img" src={"assets/img/leaf.svg"}/>
   
    
        <div className="heading-for-all">
          <h2>Top Cities to Visit</h2>
          <span style={{
            opacity: "40%"
          }}>Uncover secret wonders and celebrated attractions in top travel spots worldwide - your next escapade awaits!</span>
        </div>
        <Slider {...sliderSettings}>
        {details.map((item, index) => (
            <div
            data-bs-toggle="modal"
              data-bs-target="#user-login"
              key={index}
              className={`tour-box ${index % 2 === 0 ? "up" : "down-box" } country-check-box`} 
            >
              <div className="country-box-img">
                <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p style={{
                    color:"white"
                  }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
      

        </Slider>

      </div>
    </div>
  );
};

export default ExploreCities;
