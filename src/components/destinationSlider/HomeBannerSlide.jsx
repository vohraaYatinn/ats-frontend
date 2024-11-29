import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/image/package-1.jpeg';
import image2 from '../../../public/image/package-2.jpeg';
import image3 from '../../../public/image/package-3.jpeg';

const Home2Blog = () => {
  return (
    <div className="Home2Blog">
      <div className="Home2Blog-heading heading-for-all">
        <h2>Discover Our Hottest Packages</h2>
        <p className='mb-4'>Select a service that suits you best</p>
      </div>
      <div className="Home2Blog-boxes">
        {[image1, image2, image3].map((image, index) => (
          <div className="Home2Blog-box" key={index}>
            <div className="image-wrapper">
              <Image
                src={image}
                alt="Luxury Staycation Tour"
                layout="responsive"
                objectFit="cover"
                className="Home2Blog-image"
              
              />
              <div className="overlay-of-image">
                <div className='content-check'>
                <div className="overlay-content">
                  <h3>Luxury Staycation Tour</h3>
                  <h1>5D/4N</h1>
                </div>
                <button className="primary-btn1 two d-xl-flex d-none home-button"><span style={{
                  fontWeight:500
                }}>AED 27000/-</span></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2Blog;
