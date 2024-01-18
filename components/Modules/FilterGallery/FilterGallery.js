import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterDta from "./Data";
import { FiArrowDownRight } from 'react-icons/fi';
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import "swiper/css/navigation";

// import required modules
import {Navigation, Grid } from 'swiper/modules';



const FilterGallery = () => {
  const [filterImage, setFilterImage] = useState([]);
  const [image, setImage] = useState([]);
  const [tab, setTab] = useState('all');

  const handleTabChange = (t) => {
    setTab(t);
  }

  const getdata = () => {
    setImage(FilterDta);
    setFilterImage(FilterDta);
  };
  console.log(FilterDta);

  useEffect(() => {
    getdata();
  }, []);

  const filterItem = (brandlist) => {
    const updatedcard = image.filter((curElem) => {
      return curElem.brand === brandlist;
    });
    setFilterImage(updatedcard);
  };


  
  return (
    <>
      <Container>
        <Row>
          <ul className="mt-5 mb-4 d-flex justify-content-center list-unstyled filter_manuitem">
            <li>
              <button
                className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${tab === "all" ? "active" : ""}`}
                onClick={() => {
                  setFilterImage(image);
                  handleTabChange('all');
                }}
              >
                all
              </button>
              <button
                className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${tab === "website" ? "active" : ""}`}
                onClick={() => {
                  filterItem("website");
                  handleTabChange('website');
                }}
              >
                Website
              </button>
              <button
                className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${tab === "ecommerce" ? "active" : ""}`}
                onClick={() => {
                  filterItem("ecommerce");
                  handleTabChange('ecommerce');
                }}
              >
                Ecommerce
              </button>
              <button
                className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${tab === "software" ? "active" : ""}`}
                onClick={() => {
                  filterItem("software");
                  handleTabChange('software');
                }}
              >
                Software
              </button>
              <button
                className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${tab === "IT_Maintenance" ? "active" : ""}`}
                onClick={() => {
                  filterItem("IT_Maintenance");
                  handleTabChange('IT_Maintenance');
                }}
              >
                IT Support & Maintenance
              </button>
            
            </li>
          </ul>
          
          

         
        <div className="portfolioBox position-relative">
          <button id="prevBtn" className="btn d-flex justify-content-center align-items-center">
                <img src="/arrow.png" alt="img"/>
          </button>
          <button id="nextBtn" className="btn d-flex justify-content-center align-items-center">
               <img src="/arrow-next.png" alt="img"/>
          </button>
            <Swiper
                slidesPerView={3}
                grid={{
                  rows: 2,
                }}
                spaceBetween={30}
                modules={[Grid, Navigation]}
                className="mySwiper"
                navigation={{
                  prevEl: "#prevBtn",
                  nextEl: "#nextBtn",
                  disabledClass: 'disabled',
                }}
                breakpoints={{
                  1100: {
                    slidesPerView: 3
                  },
                  768: {
                    slidesPerView: 2
                  },
                  1: {
                    slidesPerView: 1,
                  },
                }}
              >
                {filterImage.map((curElm, index) => 
                    <SwiperSlide key={index}>
                        <div className="product_overlay">
                          <img
                            src={curElm.thumbnail}
                            className="card-img rounded-3 position-relative"
                          />
                          <Link href={curElm.link} target="_blank">
                            <div className="card_title rounded-3"> 
                              <img
                                variant="top"
                                src={curElm.logo}
                                className="overlay_logo rounded-3 img-fluid"
                              />
                              <div className="link_icons">
                                <FiArrowDownRight size={"25px"}/>
                              </div>
                            </div>
                          </Link>
                        </div>
                
                    </SwiperSlide>
                  )}
              </Swiper>
        </div>

       
         
        </Row>
      </Container>
    </>
  );
};

export default FilterGallery;
