"use client"; // Add this if you're using Next.js Client Component

import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/count-1.png';
import image2 from '../../../public/image/count-2.png';
import image3 from '../../../public/image/count-3.png';
import image4 from '../../../public/image/count-4.png';
import leaf from '../../../public/image/leaf.svg';


const Home2Destinationslide = () => {
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

  return (
    <div>
      <div className="country-top-destination countries-conatiner">
        <img className="leaf-img" src={"assets/img/leaf.svg"}/>
   
    
        <div className=" heading-for-all">
          <h2>Explore Other Countries</h2>
          <span style={{
            opacity: "40%"
          }}>Uncover secret wonders and celebrated attractions in top travel spots worldwide - your next escapade awaits!</span>
        </div>
        <div className="tour-boxes tour-boxes-countries ">
          {details.map((item, index) => (
            <div
              key={index}
              data-bs-toggle="modal"
              data-bs-target="#user-login"
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
        </div>
      </div>
    </div>
  );
};

export default Home2Destinationslide;
