

"use client"
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from '@/components/common/Breadcrumb'
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Topbar from "@/components/topbar/Topbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer3";
import '@/components/stylebook/Footer.css'
import "./package-details-page.css"
import Newslatter from "@/components/common/Newslatter";
import "./activites-breadcrum.css"
import StarRating from "@/components/common/StarRating";


const Page = () => {
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/activities/banner.png",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/ski-touring-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/ski-touring-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/ski-touring-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/ski-touring-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/ski-touring-06.jpg",
    },
  ];
  return (
    <>
    <Topbar/>
    <Header/>
    <Breadcrumb pagename="Package Details" pagetitle="Package Details"/>
     <div className="package-details-area mb-120">
      <div className="container"> 
        <div className="row">
          <div className="co-lg-12">
            <div className="package-img-group" style={{
              marginBottom:"35px"
            }}>
              <div className="row align-items-center g-3">
                <div className="col-lg-9" style={{
                    marginTop:"0rem",
                    padding:"0rem"

                  }}>
                  <div className="gallery-img-wrap first-wrap-image flip-image-check" style={{
                    marginTop:"0rem",
                    padding:"0rem"
                  }}>
                    <img src="/assets/img/activities/inner-banner-1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 h-100" style={{
                    marginTop:"0rem"
                  }}>
                  <div className="row g-3 h-100 ">
                    <div className="col-12">
                      <div className="gallery-img-wrap">
                        <img src="/assets/img/activities/inner-banner-2.png" alt="" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="gallery-img-wrap">
                        <img src="/assets/img/activities/inner-banner-3.png" alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="others-image-wrap d-none">
          <a href="assets/img/innerpage/ski-touring-01.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-01.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-02.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-02.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-03.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-03.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-04.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-04.jpg" alt="" /></a>   
          <a href="assets/img/innerpage/ski-touring-05.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-05.jpg" alt="" /></a>   
        </div> 
        <div className="row g-xl-4 gy-5 main-package-details-div">
          <div className="col-xl-8">
    
            <h2>Exclusive Sun-Rise Experience with Adventure & Thrill.</h2>
            <div className="tour-price">
              <h3>AED 27000/</h3><span>Per Person</span>
            </div>
            <ul className="tour-info-metalist">
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z">
                  </path>
                </svg>
                4 Days
              </li>
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7ZM14 12.8333C14 14 12.8333 14 12.8333 14H1.16667C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333Z">
                  </path>
                </svg>
                Max People : 5
              </li>
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z">
                  </path>
                </svg>
                Dubai
              </li>
            </ul>
            <p className="para-activity">Experience the best of Dubai and Abu Dhabi with this comprehensive 3-day tour package. From the architectural marvels of the Blue Mosque and Dubai Frame to the thrilling rides at Ferrari World, this tour offers a perfect blend of cultural exploration, shopping, and adventure. Enjoy the vibrant colors of the Miracle Garden, the grandeur of the Dubai Mall, and the serene beauty of the desert during a sunset safari. This package ensures a memorable and diverse experience for all participants.</p>
           
            <div className="highlight-tour mb-20">
              <h4>Highlights of the Tour</h4>
              <ul>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Visit the iconic Blue Mosque</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Explore the Dubai Frame</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Shop and dine at the Dubai Mall</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Experience the thrill at Ferrari World</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Stroll through the Miracle Garden</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Enjoy a Desert Safari with BBQ and entertainment</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Professional and licensed tour guide throughout the tour</li>
                <li><span className="activity-back-icon"><i className="bi bi-check" /></span> Convenient pick-up and drop-off from your accommodation</li>
              </ul>
            </div>
            <h4 className="para-highlight">Good To Know </h4>
            <div className="includ-and-exclud-area mb-20 good-to-know">
              <ul>
              <li><b className="bold-activity">Booking Confirmation:</b> We will reconfirm the pick-up time a few hours before each day starts to ensure punctuality and convenience.</li>
    <li><b className="bold-activity">Pet Policy:</b> Please note that pets are not allowed on the tours in this package.</li>
    <li><b className="bold-activity">Children Policy:</b> Children below 12 years are considered children. They are under adult responsibility during the tours in this package. A child seat is not provided.</li>
    <li><b className="bold-activity">Personal Belongings:</b> Avoid carrying expensive items. Your belongings are your responsibility. ATS is not liable for any lost items, but we will assist in locating them if lost.</li>
    <li><b className="bold-activity">Health Considerations:</b> Pregnant women and individuals with back or neck problems should evaluate their condition before participating in the tours in this package.</li>
    <li><b className="bold-activity">Liability And Insurance:</b> ATS is not responsible for any damage, loss, accidents, sickness, injury, or death that may occur during the tours in this package. Comprehensive travel and health insurance are advised. All personal effects are solely your responsibility during the activity.</li>
    <li><b className="bold-activity">Participation Responsibility:</b> Ensure you are mentally and physically prepared for the activities of the tours in this package. You are responsible for assessing your capability to participate in these activities.</li>
    <li><b className="bold-activity">Wheelchair Accessibility:</b> This package is partially wheelchair accessible. The transportation provided and some of the tour locations may not be equipped to accommodate wheelchair users comfortably. We apologize for any inconvenience this may cause and are available to discuss alternative arrangements or provide recommendations for more accessible packages in the UAE.</li>
              </ul>
           
            </div>
            <h4 className="para-highlight">Included and Excluded </h4>
            <div className="includ-and-exclud-area mb-20">
              <ul>
                <li><i className="bi bi-check-lg" /> Pick-Up And Drop-Off From Your Accommodation</li>
                <li><i className="bi bi-check-lg" /> Clean And Air-Cooled Vehicle</li>
                <li><i className="bi bi-check-lg" /> Fresh Mineral Water For All Participants</li>
                <li><i className="bi bi-check-lg" /> Stop For Photos At Scenic Spots Throughout The Tour</li>
                <li><i className="bi bi-check-lg" /> A Professional And Licensed Tour Guide Throughout The Tour</li>
                <li><i className="bi bi-check-lg" /> Tickets For All Participants</li>
                <li><i className="bi bi-x-lg" /> Carrying safety gear (avalanche transceivers, shovels, probes) and knowledge of rescue procedures.</li>
              </ul>
           
            </div>

            <h4>Itinerary</h4>
            <div className="accordion tour-plan" id="tourPlan">
            <li><b className="bold-activity">Pick-Up From Hotel Or Accommodation:</b> Begin your journey with a convenient pick-up from your hotel or accommodation. Our comfortable, air-conditioned vehicle and friendly driver are ready to transport you to an exciting day of exploration.</li>

             
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span>Day 01 :</span>  1st Stop
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show show-date-check"   aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                      <li>Final gear check and packing.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span>Day 02 :</span>  1st Stop
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                    <li>Final gear check and packing.</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span>Day 03 :</span> 1st Stop
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                    <li>Final gear check and packing.</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <span>Day 04 :</span> 1st Stop
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#tourPlan">
                  <div className="accordion-body">
                    <ul>
                    <li>Final gear check and packing.</li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tour-location">
              <h4>Location Map</h4>
              <div className="map-area mb-30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <div className="faq-content-wrap mb-80">
              <div className="faq-content-title mb-20">
                <h4>Frequently Asked &amp; Question</h4>
              </div>
              <div className="faq-content">
                <div className="accordion" id="accordionTravel">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingOne">
                      <button className="accordion-button btn-col-pop" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseOne" aria-expanded="true" aria-controls="travelcollapseOne" style={{
                            
                      }}>
                        01. How do I book a trip on your website?
                      </button>
                    </h2>
                    <div id="travelcollapseOne" className="accordion-collapse collapse show" aria-labelledby="travelheadingOne" data-bs-parent="#accordionTravel">
                      <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non
                      aliquam.Mauris nec just vitae ann auctor tol euismod sit amet non ipsul growing this.                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingTwo">
                      <button className="accordion-button btn-col-pop collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseTwo" aria-expanded="false" aria-controls="travelcollapseTwo">
                      02. What payment methods do you accept?
                                            </button>
                    </h2>
                    <div id="travelcollapseTwo" className="accordion-collapse collapse" aria-labelledby="travelheadingTwo" data-bs-parent="#accordionTravel">
                      <div className="accordion-body">
                        Essential equipment includes touring skis, bindings, climbing skins, poles, boots suitable for touring, safety gear (avalanche transceiver, shovel, probe), and appropriate clothing for variable weather conditions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingThree">
                      <button className="accordion-button btn-col-pop collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseThree" aria-expanded="false" aria-controls="travelcollapseThree">
                      03. Can I make changes to my reservation after booking?
                                            </button>
                    </h2>
                    <div id="travelcollapseThree" className="accordion-collapse collapse" aria-labelledby="travelheadingThree" data-bs-parent="#accordionTravel">
                      <div className="accordion-body">
                      Essential equipment includes touring skis, bindings, climbing skins, poles, boots suitable for touring, safety gear (avalanche transceiver, shovel, probe), and appropriate clothing for variable weather conditions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingFour">
                      <button className="accordion-button btn-col-pop collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseFour" aria-expanded="false" aria-controls="travelcollapseFour">
                      04. What is your cancellation policy?
                                            </button>
                    </h2>
                    <div id="travelcollapseFour" className="accordion-collapse collapse" aria-labelledby="travelheadingFour" data-bs-parent="#accordionTravel">
                      <div className="accordion-body">
                      Essential equipment includes touring skis, bindings, climbing skins, poles, boots suitable for touring, safety gear (avalanche transceiver, shovel, probe), and appropriate clothing for variable weather conditions.
                      </div>
                    </div>
                  </div> 
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingFive">
                      <button className="accordion-button btn-col-pop collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#travelcollapseFive" aria-expanded="false" aria-controls="travelcollapseFive">
                      05. Do you offer group booking discounts?
                                            </button>
                    </h2>
                    <div id="travelcollapseFive" className="accordion-collapse collapse" aria-labelledby="travelheadingFive" data-bs-parent="#accordionTravel">
                      <div className="accordion-body">
                      Essential equipment includes touring skis, bindings, climbing skins, poles, boots suitable for touring, safety gear (avalanche transceiver, shovel, probe), and appropriate clothing for variable weather conditions.
                      </div>
                    </div>
                  </div> 

                </div>
              </div>
            </div>
           <div className="review-section">
            <p className="first-ppreview">There are no reviews yet.</p>
            <h3>Be the first to review “Immersive Cultural Expirees, Local Cuisine.”</h3>
            <p>Your email address will not be published.</p>
            <div className="rating-stars-on-page">
              <div>
                <p>Overall</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Transport</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Food</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Destination</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              </div>
              <div>
                <p>Hospitality</p>
                <StarRating totalStars={5} onRatingChange={()=>{}} />
              
              </div>
            </div>
           </div>
           <div className="review-form"
           
           
           >
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Review Title"/>
            <textarea placeholder="Describe your review"></textarea>
            <div>
              <p>recommendation: </p>
              <div className="recommendation">
                <img src="/assets/img/activities/icons/happy.svg" />
                <img src="/assets/img/activities/icons/happy-2.svg" />
                <img src="/assets/img/activities/icons/happy-3.svg" />
              </div>
            </div>
<button className="primary-btn1 two book-now-activity submit-review-buttom">SUBMIT REVIEW</button>

           </div>
        </div>
        <div className="col-xl-4">
        <div className="banner2-card  mb-30">
              <img src="/assets/img/activities/tele-cal.jpg" alt="" />
             
        </div>
            <div className="booking-form-wrap">
              <h4>Book Your Tour</h4>
              <p>Reserve your ideal Room early for a hassle-free
              trip secure comfort and convenience!</p>
              {/* <div className="nav nav-pills mb-40" role="tablist">
                <button className="nav-link show active" id="v-pills-booking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booking" type="button" role="tab" aria-controls="v-pills-booking" aria-selected="true">Online Booking</button>
                <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Inquiry Form</button>
              </div> */}
              <div className="tab-content" id="v-pills-tabContent2">
                <div className="tab-pane fade" id="v-pills-booking" role="tabpanel" aria-labelledby="v-pills-booking-tab">
                  <div className="sidebar-booking-form">
                    <form>
                      <div className="tour-date-wrap mb-50">
                        <h6>Select Your Booking Date:</h6>
                        <div className="form-inner mb-20">
                          <div className="form-group">
                            <input type="date" name="inOut" placeholder="5 Jan, 2024" />
                           
                          </div>
                        </div>
                      </div>
                      <div className="booking-form-item-type mb-45">
                        <div className="number-input-item adults">
                          <label className="number-input-lable">Adult:<span>
                            </span><span> $60 <del>$80</del></span></label>
                          <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                        </div>
                        <div className="number-input-item children">
                          <label className="number-input-lable">Children:<span> 
                            </span><span>$15</span></label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus"/>
                        </div>
                      </div>
                      <div className="booking-form-item-type">
                        <h5>Other Extra Services</h5>
                        <div className="checkbox-container">
                          <label className="check-container">Home Pickup
                            <input type="checkbox" className="services_check" name="services_list[]" defaultValue={0} />
                            <span className="checkmark" />
                            <span className="price">$10 </span>
                          </label>
                          <label className="check-container">Night Food
                            <input type="checkbox" className="services_check" name="services_list[]" defaultValue={1} />
                            <span className="checkmark" />
                            <span className="price">$15 </span>
                          </label>
                          <label className="check-container">Seaplane Fyling
                            <input type="checkbox" className="services_check" name="services_list[]" defaultValue={2} />
                            <span className="checkmark" />
                            <span className="price">$20 </span>
                          </label>
                        </div>
                      </div>
                      <div className="booking-form-item-type">
                        <div className="single-total mb-30">
                          <span>Adult</span>
                          <ul>
                            <li><strong>$195</strong> PRICE</li>
                            <li><i className="bi bi-x-lg" /></li>
                            <li><strong>02</strong> QTY</li>
                            <li><i className="bi bi-x-lg" /></li>
                            <li><strong>04</strong> DAYS</li>
                          </ul>
                          <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                          </svg>
                          <div className="total">$390</div>
                        </div>
                        <div className="single-total mb-30">
                          <span>Children</span>
                          <ul>
                            <li><strong>$195</strong> PRICE</li>
                            <li><i className="bi bi-x-lg" /></li>
                            <li><strong>02</strong> QTY</li>
                            <li><i className="bi bi-x-lg" /></li>
                            <li><strong>04</strong> DAYS</li>
                          </ul>
                          <svg xmlns="http://www.w3.org/2000/svg" width={27} height={15} viewBox="0 0 27 15">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                          </svg>
                          <div className="total">$390</div>
                        </div>
                      </div>
                      <div className="total-price"><span>Total Price:</span> $470</div>
                      <button type="submit" className="primary-btn1 two book-now-activity">Book Now</button>
                    </form>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                  <div className="sidebar-booking-form">
                    <form>
                      <div className="form-inner mb-20">
                        <label>Full Name <span>*</span></label>
                        <input type="text" placeholder="Enter your full name" />
                      </div>
                      <div className="form-inner mb-20">
                        <label>Email Address <span>*</span></label>
                        <input type="email" placeholder="Enter your email address" />
                      </div>
                      <div className="form-inner mb-20">
                        <label>Phone Number  <span>*</span></label>
                        <input type="text" placeholder="Enter your phone number" />
                      </div>
                      <div className="form-inner mb-30">
                        <label>Write Your Massage <span>*</span></label>
                        <textarea placeholder="Write your quiry" defaultValue={""} />
                      </div>
                      <div className="form-inner">
                        <button type="submit" className="primary-btn1 two book-now-activity">Submit Now</button>
                      </div>
                    </form>
                  </div>
                </div>

      </div>
      </div>
 
 
              
     
      </div>
      </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpenModalVideo(true)}
          isOpen={isOpenModalVideo}
          animationSpeed="350"
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpenModalVideo(false)}
        />
      </React.Fragment>
      {/* <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={images.map(function (elem) {
          return { src: elem.imageBig };
        })}
      /> */}
     </div>
     <hr/>


    <Footer/>
    </>
  )
}

export default Page
