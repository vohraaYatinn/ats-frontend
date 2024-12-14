// Import necessary dependencies
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './ExclusiveDeals.css';

const ExclusiveDeals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <div className="custom-arrow custom-arrow-right">&#8250;</div>,
    prevArrow: <div className="custom-arrow custom-arrow-left">&#8249;</div>,
  };

  const slides = [
    {
      image: 'https://picsum.photos/400/400',
      title: 'Deal 1',
      text: 'Description for Deal 1',
    },
    {
      image: 'https://picsum.photos/400/400',
      title: 'Deal 2',
      text: 'Description for Deal 2',
    },
    {
      image: 'https://picsum.photos/400/400',
      title: 'Deal 3',
      text: 'Description for Deal 3',
    },
    {
      image: 'https://picsum.photos/400/400',
      title: 'Deal 4',
      text: 'Description for Deal 4',
    },
  ];

  return (
    <div className="exclusive-deals-container">
      <div className="exclusive-deals-header">
      <div className='exclusive-deals-title'>
        <h2 className=''>Exclusive <strong>Deals</strong></h2>
        <div className="hot-deal">HOT DEAL </div>
      </div>
        <div className="arrows">
          <span className="arrow arrow-left">&#8249;</span>
          <span className="arrow arrow-right">&#8250;</span>
        </div>
      </div>
      <Slider {...settings} className="exclusive-deals-carousel">
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="slide-content">
              <div className="image-container">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="slide-details">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <button className="book-now">Book Now</button>
                <div className="fixed-departure">FIXED DEPARTURE</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExclusiveDeals;
