import React, { useState } from "react";
import './PackageList.css';
import { FaStar } from 'react-icons/fa';

const PackagesList = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [duration, setDuration] = useState(100000);
  const [budget, setBudget] = useState(50000);

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };


  const packages = [
    {
      id: 1,
      image: "/path/to/image1.jpg",
      label: "Featured",
      title: "Pepsi Wonders South India Package",
      duration: "6 Days",
      places: ["Goa", "Chennai", "Ooty"],
      inclusions: ["Stay", "Flights", "Transfers"],
      price: "₹54,568",
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      title: "Short Getaway to Rameshwaram, Madurai & Kanyakumari",
      duration: "3 Days",
      places: ["Madurai", "Rameshwaram"],
      inclusions: ["Stay", "Transfers"],
      price: "₹25,999",
    },
    {
      id: 3,
      image: "/path/to/image3.jpg",
      title: "Peaceful Ooty Honeymoon",
      duration: "5 Days",
      places: ["Ooty", "Coonoor"],
      inclusions: ["Stay", "Transfers", "Sightseeing"],
      price: "₹42,568",
    },
    {
      id: 4,
      image: "/path/to/image4.jpg",
      title: "South India Retreat",
      duration: "7 Days",
      places: ["Kodaikanal", "Madurai"],
      inclusions: ["Stay", "Flights", "Transfers"],
      price: "₹50,529",
    },
  ];

  const tabs = [
    { id: "all", label: "All Packages (240)" },
    { id: "honeymoon", label: "Honeymoon (19)" },
    { id: "pilgrimage", label: "Pilgrimage (18)" },
    { id: "homestays", label: "HomeStays & More (6)" },
    { id: "xpress", label: "Xpress holidays (11)" },
  ];

  return (
    <div className="page">
      <header className="header">
        <h1>Packages List</h1>
      </header>

      <div className="content">
        <aside className="sidebar">
          <h3>Filters</h3>



          <div className="filterGroup">
            {/* Duration Section */}
            <h4 className="filter-title">Duration (in Nights)</h4>
            <div class="rangeSlider">
              <input type="range" min="0" max="100000" id="rangeInput" onChange={handleDurationChange} />
            </div>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"< 3N"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"3N - 5N"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"> 5N"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Flights Section */}
            <h4>Flights</h4>
            <div className="flightOptions">
              <div className="row-filter">
                <div className="box">
                  <p>With Flight (232)</p>
                </div>
                <div className="box">
                  <p>Without Flight (207)</p>
                </div>
              </div>
            </div>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Budget Section */}
            <h4 className="filter-title">Budget (per person)</h4>
            <div className="rangeSlider">
              <input type="range" min="0" max="100000" />
            </div>
            <ul>
              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"< ₹35,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"₹35,000 - ₹45,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"₹45,000 - ₹55,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="filter-cover">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"> ₹55,000"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Hotel Category Section */}
            <h4 className="filter-title">Hotel Category</h4>
            <div className="hotelOptions">
              <div className="row-filter">
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>&lt; 3 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>
                </div>
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>3 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>
                </div>
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>4 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>

                </div>
                <div className="box2">
                  <p style={{ lineHeight: "18px" }}><span style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>5 <FaStar style={{ marginLeft: "3px" }} /></span><span>(47)</span></p>

                </div>
              </div>
            </div>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Cities Section */}
            <h4 className="filter-title">Cities</h4>
            <br />
            <div className="citiesInput">
              <input type="text" />
            </div>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input type="checkbox" id="duration1" className="filter-checkbox" />{" "}
                  <label htmlFor="duration1" className="filter-label">{"Ooty"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Coorg"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Mysore"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Kodaikanal"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>

              <li>
                <button className="showMore">Show More</button>
              </li>
            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Themes Section */}
            <h4 className="filter-title">Themes</h4>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Culture"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Pilgrimages"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Advenuture"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Wildlife"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
              <li>
                <button className="showMore">Show More</button>
              </li>
            </ul>

            <br />
            <hr style={{ color: "gray" }} />
            <br />

            {/* Package Type Section */}
            <h4 className="filter-title">Package Type</h4>
            <div className="packageOptions">
              <div className="row-filter">
                <div className="box">
                  <p>Customizable (263)</p>
                </div>
                <div className="box">
                  <p>Group Package (6)</p>
                </div>
              </div>
            </div>

            <br /><hr style={{ color: "gray" }} /><br />
            {/* Premium Packages Section */}
            <h4 className="filter-title">Premium Packages</h4>
            <ul>
              <li className="duration-list">
                <div className="">
                  <input className="filter-checkbox" type="checkbox" id="duration1" />{" "}
                  <label className="filter-label" htmlFor="duration1">{"Premium Packages"}</label>
                </div>
                <p className="filter-label">(43)</p>
              </li>
            </ul>
          </div>




        </aside>

        <main className="main">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={selectedTab === tab.id ? "activeTab" : ""}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="sort-button">
            <label htmlFor="sortOptions"><strong>Sorted By:</strong></label>
            <select id="sortOptions" name="sortOptions">
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>



          <div className="packages">



            <div className="package-card-cover">
              <div className="options-available">
                1 More &nbsp;&nbsp;Option Available
              </div>
              <div className="package-card-1">
                <div className="package-card-1-content"></div>
              </div>
              <div className="package-card-2">
                <div className="package-card-2-content"></div>
              </div>
              <div className="package-card">
                <div className="package-card-img">
                  <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="package-card-title">
                  <p className="package-card-title-1">Most Wanted South India Package</p>
                  <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
                  <div className="duration">5N/6D</div>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "gray" }} />
                  <br />
                </div>
                <div className="package-card-top-facilities">
                  <div className="col-1">
                    <li>Round Trip Flights</li>
                    <li>3 Star Hotels</li>
                    <li>3 4 Activities</li>
                  </div>
                  <div className="col-1">
                    <li>Intercity Car Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Selected Meals</li>
                  </div>
                </div>
                <div className="package-card-text">
                  <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
                  <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
                  <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
                </div>
                <div className="package-card-price-cover">
                  <div className="package-card-price">
                    <p>This price is lower than the average price in December</p>
                    <div>
                      <p><strong style={{fontFamily:"Nexa-heavy"}}>₹56,886</strong> /Person</p>
                      <p>Total Price ₹1,13,772</p>
                    </div>
                  </div>
                </div>
                <div className="package-card-offer">




                  Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
                </div>
              </div>
            </div>

            <div className="package-card-cover">
              <div className="options-available">
                1 More &nbsp;&nbsp;Option Available
              </div>
              <div className="package-card-1">
                <div className="package-card-1-content"></div>
              </div>
              <div className="package-card-2">
                <div className="package-card-2-content"></div>
              </div>
              <div className="package-card">
                <div className="package-card-img">
                  <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="package-card-title">
                  <p className="package-card-title-1">Most Wanted South India Package</p>
                  <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
                  <div className="duration">5N/6D</div>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "gray" }} />
                  <br />
                </div>
                <div className="package-card-top-facilities">
                  <div className="col-1">
                    <li>Round Trip Flights</li>
                    <li>3 Star Hotels</li>
                    <li>3 4 Activities</li>
                  </div>
                  <div className="col-1">
                    <li>Intercity Car Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Selected Meals</li>
                  </div>
                </div>
                <div className="package-card-text">
                  <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
                  <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
                  <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
                </div>
                <div className="package-card-price-cover">
                  <div className="package-card-price">
                    <p>This price is lower than the average price in December</p>
                    <div>
                      <p><strong>₹56,886</strong> /Person</p>
                      <p>Total Price ₹1,13,772</p>
                    </div>
                  </div>
                </div>
                <div className="package-card-offer">
                  Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
                </div>
              </div>
            </div>

            <div className="package-card-cover">
              <div className="options-available">
                1 More &nbsp;&nbsp;Option Available
              </div>
              <div className="package-card-1">
                <div className="package-card-1-content"></div>
              </div>
              <div className="package-card-2">
                <div className="package-card-2-content"></div>
              </div>
              <div className="package-card">
                <div className="package-card-img">
                  <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="package-card-title">
                  <p className="package-card-title-1">Most Wanted South India Package</p>
                  <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
                  <div className="duration">5N/6D</div>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "gray" }} />
                  <br />
                </div>
                <div className="package-card-top-facilities">
                  <div className="col-1">
                    <li>Round Trip Flights</li>
                    <li>3 Star Hotels</li>
                    <li>3 4 Activities</li>
                  </div>
                  <div className="col-1">
                    <li>Intercity Car Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Selected Meals</li>
                  </div>
                </div>
                <div className="package-card-text">
                  <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
                  <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
                  <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
                </div>
                <div className="package-card-price-cover">
                  <div className="package-card-price">
                    <p>This price is lower than the average price in December</p>
                    <div>
                      <p><strong>₹56,886</strong> /Person</p>
                      <p>Total Price ₹1,13,772</p>
                    </div>
                  </div>
                </div>
                <div className="package-card-offer">
                  Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
                </div>
              </div>
            </div>

            <div className="package-card-cover">
              <div className="options-available">
                1 More &nbsp;&nbsp;Option Available
              </div>
              <div className="package-card-1">
                <div className="package-card-1-content"></div>
              </div>
              <div className="package-card-2">
                <div className="package-card-2-content"></div>
              </div>
              <div className="package-card">
                <div className="package-card-img">
                  <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="package-card-title">
                  <p className="package-card-title-1">Most Wanted South India Package</p>
                  <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
                  <div className="duration">5N/6D</div>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "gray" }} />
                  <br />
                </div>
                <div className="package-card-top-facilities">
                  <div className="col-1">
                    <li>Round Trip Flights</li>
                    <li>3 Star Hotels</li>
                    <li>3 4 Activities</li>
                  </div>
                  <div className="col-1">
                    <li>Intercity Car Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Selected Meals</li>
                  </div>
                </div>
                <div className="package-card-text">
                  <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
                  <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
                  <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
                </div>
                <div className="package-card-price-cover">
                  <div className="package-card-price">
                    <p>This price is lower than the average price in December</p>
                    <div>
                      <p><strong>₹56,886</strong> /Person</p>
                      <p>Total Price ₹1,13,772</p>
                    </div>
                  </div>
                </div>
                <div className="package-card-offer">
                  Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
                </div>
              </div>
            </div>

            <div className="package-card-cover">
              <div className="options-available">
                1 More &nbsp;&nbsp;Option Available
              </div>
              <div className="package-card-1">
                <div className="package-card-1-content"></div>
              </div>
              <div className="package-card-2">
                <div className="package-card-2-content"></div>
              </div>
              <div className="package-card">
                <div className="package-card-img">
                  <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="package-card-title">
                  <p className="package-card-title-1">Most Wanted South India Package</p>
                  <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
                  <div className="duration">5N/6D</div>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "gray" }} />
                  <br />
                </div>
                <div className="package-card-top-facilities">
                  <div className="col-1">
                    <li>Round Trip Flights</li>
                    <li>3 Star Hotels</li>
                    <li>3 4 Activities</li>
                  </div>
                  <div className="col-1">
                    <li>Intercity Car Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Selected Meals</li>
                  </div>
                </div>
                <div className="package-card-text">
                  <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
                  <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
                  <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
                </div>
                <div className="package-card-price-cover">
                  <div className="package-card-price">
                    <p>This price is lower than the average price in December</p>
                    <div>
                      <p><strong>₹56,886</strong> /Person</p>
                      <p>Total Price ₹1,13,772</p>
                    </div>
                  </div>
                </div>
                <div className="package-card-offer">
                  Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
                </div>
              </div>
            </div>

            <div className="package-card-cover">
              <div className="options-available">
                1 More &nbsp;&nbsp;Option Available
              </div>
              <div className="package-card-1">
                <div className="package-card-1-content"></div>
              </div>
              <div className="package-card-2">
                <div className="package-card-2-content"></div>
              </div>
              <div className="package-card">
                <div className="package-card-img">
                  <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="package-card-title">
                  <p className="package-card-title-1">Most Wanted South India Package</p>
                  <p className="package-card-title-2">2N Coorg <li>2N Ooty</li> <li>1N Mysore</li></p>
                  <div className="duration">5N/6D</div>
                </div>
                <div style={{ padding: "0 10px" }}>
                  <hr style={{ color: "gray" }} />
                  <br />
                </div>
                <div className="package-card-top-facilities">
                  <div className="col-1">
                    <li>Round Trip Flights</li>
                    <li>3 Star Hotels</li>
                    <li>3 4 Activities</li>
                  </div>
                  <div className="col-1">
                    <li>Intercity Car Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Selected Meals</li>
                  </div>
                </div>
                <div className="package-card-text">
                  <p>Visit to Dubare Elephant Camp, Omkareshwara Temple, Raja Seat</p>
                  <p>Visit to bhagandeshwara temple, Nilgiri Hills, Tea Gardens</p>
                  <p>Visit to Bandipur National Park, Pykara Waterfalls, Lamb's Rock</p>
                </div>
                <div className="package-card-price-cover">
                  <div className="package-card-price">
                    <p>This price is lower than the average price in December</p>
                    <div>
                      <p><strong>₹56,886</strong> /Person</p>
                      <p>Total Price ₹1,13,772</p>
                    </div>
                  </div>
                </div>
                <div className="package-card-offer">
                  Extra &nbsp;&nbsp;&nbsp;<strong>₹11,932</strong>&nbsp;&nbsp;&nbsp; off. UseCode &nbsp;&nbsp;&nbsp;<strong>WELCOMENEW40</strong>
                </div>
              </div>
            </div>



          </div>
        </main>
      </div>
    </div>
  );
};

export default PackagesList;
