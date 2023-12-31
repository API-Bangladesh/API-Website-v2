import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterDta from "./Data";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";
import Slider from "react-slick";

const FilterGallery = () => {
   var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 2500,
      slidesToShow: 3,
      rows: 2,
      slidesToScroll: 1,
      arrow: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   const [filterImage, setFilterImage] = useState([]);
   const [image, setImage] = useState([]);
   const [tab, setTab] = useState("all");

   const handleTabChange = (t) => {
      setTab(t);
   };

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
               <ul className="mt-5 d-flex justify-content-center list-unstyled filter_manuitem">
                  <li>
                     <button
                        className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${
                           tab === "all" ? "active" : ""
                        }`}
                        onClick={() => {
                           setFilterImage(image);
                           handleTabChange("all");
                        }}
                     >
                        all
                     </button>
                     <button
                        className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${
                           tab === "website" ? "active" : ""
                        }`}
                        onClick={() => {
                           filterItem("website");
                           handleTabChange("website");
                        }}
                     >
                        Website
                     </button>
                     <button
                        className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${
                           tab === "ecommerce" ? "active" : ""
                        }`}
                        onClick={() => {
                           filterItem("ecommerce");
                           handleTabChange("ecommerce");
                        }}
                     >
                        Ecommerce
                     </button>
                     <button
                        className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${
                           tab === "software" ? "active" : ""
                        }`}
                        onClick={() => {
                           filterItem("software");
                           handleTabChange("software");
                        }}
                     >
                        Software
                     </button>
                     <button
                        className={`text-capitalize me-2 btn btn-success rounded-1 mb-2 border-0 ${
                           tab === "IT_Maintenance" ? "active" : ""
                        }`}
                        onClick={() => {
                           filterItem("IT_Maintenance");
                           handleTabChange("IT_Maintenance");
                        }}
                     >
                        IT Support & Maintenance
                     </button>
                  </li>
               </ul>
               <Slider {...settings}>
                  {filterImage.map((curElm, index) => {
                     return (
                        <Col lg={12} md={12} sm={12} key={index} className="px-0">
                           <div className="my-4 mx-4 rounded-0 product_overlay">
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
                                       <FiArrowDownRight size={"25px"} />
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        </Col>
                     );
                  })}
               </Slider>
            </Row>
         </Container>
      </>
   );
};

export default FilterGallery;
