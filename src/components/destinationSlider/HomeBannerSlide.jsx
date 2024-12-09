"use client";
import React, { useState } from 'react';

import Image from 'next/image';
import image1 from '../../../public/assets/img/home1/image/image-1.jpg';
import image2 from '../../../public/assets/img/home1/image/image-2.jpg';
import image3 from '../../../public/assets/img/home1/image/image-3.jpg';
import image4 from '../../../public/assets/img/home1/image/image-4.jpg';
import image5 from '../../../public/assets/img/home1/image/image-5.jpg';
import image6 from '../../../public/assets/img/home1/image/image-6.jpg';
import image7 from '../../../public/assets/img/home1/image/image-7.jpg';
import image8 from '../../../public/assets/img/home1/image/image-8.jpg';
import image9 from '../../../public/assets/img/home1/image/image-9.jpg';
import image10 from '../../../public/assets/img/home1/image/image-10.jpg';
import "./change-bar-section.css"
import Link from 'next/link';

const Home2Blog = () => {
  const handleRedirect = (link) => {
    if (link) {
      window.location.href = link; // Navigate to the link
    }
  };
  const data1=[
    {
      title:"Private Full Day Khor Fakkan Tour",
      image:image1,
      duration:"Personal",
      link:"package-detail/Private-Khorfakkan-Full-Day-Tour"
    },
    {
      title:"Sun-Rise Experience with Adventure",
      image:image2,
      duration:"Personal",
      link:"package-detail/Exclusive-Sun-Rise-Experience"


    },
    {
      title:"Blue Mosque, Dubai Frame, Dubai Mall",
      image:image3,
      duration:"3 days",
      link:"package-detail/Dubai-Frame-Dubai-Mall"


    },
  ]
  const data2=[
    {
      title:"Abu Dhabi Tour With Ferrari",
      image:image4,
      duration:"8 Hours",
      link:"package-detail/Dhabi-tour-With-Ferrari"
    },
    {
      title:"Abu Dhabi Tour With Heritage ",
      image:image5,
      duration:"8 Hours",
      link:"package-detail/Abu-Dhabi-Tour-With-Heritage"


    },
    {
      title:"Dubai City Tour With AYA",
      image:image6,
      duration:"8 Hours",
      link:"package-detail/Dubai-City-Tour-With-AYA"
    },
  ]
  const data3=[
    {
      title:"Dubai City Tour With Dubai ",
      image:image7,
      duration:"5 Hours",
      link:"package-detail/Dubai-City-Tour-With-Dubai"
    },
    {
      title:"Dubai Tour With Global ",
      image:image8,
      duration:"10 Hours",
      link:"package-detail/Dubai-Tour-With-Global"


    },
    {
      title:"Fujairah Adventure Park",
      image:image9,
      duration:"8 Hours",
      link:"package-detail/Fujairah-Adventure-Park-Tour"


    },
  ]
  const data4=[
    {
      title:"Sunset Dubai Desert Safari With BBQ",
      image:image10,
      duration:"7 Hours",
      link:"package-detail/Sunset-Dubai-Desert-Safari-With-BBQ"
    },

  ]
  

  const [selectedOne, setSelectOne] = useState(1)
  return (
    <div className="Home2Blog">
      <div className="Home2Blog-heading heading-for-all">
        <h2>Discover Our Hottest Packages</h2>
        <p className='mb-4'>Select a service that suits you best</p>
      </div>
      <div className="Home2Blog-boxes">
        {selectedOne == 1 &&
        data1.map((item, index) => (
          <div className="Home2Blog-box" key={index} onClick={() => handleRedirect(item.link)} >
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt="Luxury Staycation Tour"
                layout="responsive"
                objectFit="cover"
                className="Home2Blog-image"
              
              />
              <div className="overlay-of-image">
                <div className='content-check'>
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <h1>{item.duration}</h1>
                </div>
                <a 
                href={item.link}
                style={{
                   alignSelf: "self-end"
                }}
                className="primary-btn1 two d-xl-flex d-none home-button"><span style={{
                  fontWeight:500,
                 
                }}>Book Now</span></a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
        {selectedOne == 2 &&
        data2.map((item, index) => (
          <div className="Home2Blog-box" key={index+4} onClick={() => handleRedirect(item.link)}>
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt="Luxury Staycation Tour"
                layout="responsive"
                objectFit="cover"
                className="Home2Blog-image"
              
              />
              <div className="overlay-of-image">
                <div className='content-check'>
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <h1>{item.duration}</h1>
                </div>
                <a 
                href={item.link}
                style={{
                   alignSelf: "self-end"
                }}
                className="primary-btn1 two d-xl-flex d-none home-button"><span style={{
                  fontWeight:500,
                 
                }}>Book Now</span></a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
        {selectedOne == 3 &&
        data3.map((item, index) => (
          <div className="Home2Blog-box" key={index+10} onClick={() => handleRedirect(item.link)}>
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt="Luxury Staycation Tour"
                layout="responsive"
                objectFit="cover"
                className="Home2Blog-image"
              
              />
              <div className="overlay-of-image">
                <div className='content-check'>
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <h1>{item.duration}</h1>
                </div>
                <a 
                href={item.link}
                style={{
                   alignSelf: "self-end"
                }}
                className="primary-btn1 two d-xl-flex d-none home-button"><span style={{
                  fontWeight:500,
                 
                }}>Book Now</span></a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
        {selectedOne == 4 &&
        data4.map((item, index) => (
          <div className="Home2Blog-box" key={index+14} onClick={() => handleRedirect(item.link)}>
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt="Luxury Staycation Tour"
                layout="responsive"
                objectFit="cover"
                className="Home2Blog-image"
              
              />
              <div className="overlay-of-image">
                <div className='content-check'>
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <h1>{item.duration}</h1>
                </div>
                <a 
                href={item.link}
                style={{
                   alignSelf: "self-end"
                }}
                className="primary-btn1 two d-xl-flex d-none home-button"><span style={{
                  fontWeight:500,
                 
                }}>Book Now</span></a>
                </div>
              </div>
            </div>
          </div>
        ))
      }

      </div>
      <div className='aligning-in-center'>
      <div className='change-section-bar'>
<a className={`${selectedOne == 1 && "check-dar-active"}`} onClick={()=>{
  setSelectOne(1)
}}>{" "}</a>
<a className={`${selectedOne == 2 && "check-dar-active"}`} onClick={()=>{
  setSelectOne(2)
}}>{" "}</a>
<a className={`${selectedOne == 3 && "check-dar-active"}`} onClick={()=>{
  setSelectOne(3)
}}>{" "}</a>
<a className={`${selectedOne == 4 && "check-dar-active"}`} onClick={()=>{
  setSelectOne(4)
}}>{" "}</a>
      </div>
      </div>
    </div>
  );
};

export default Home2Blog;
