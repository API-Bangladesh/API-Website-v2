import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { BiLogoPython, BiLogoReact } from "react-icons/bi";
import { FaAws, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTensorflow, SiAmazonec2, SiMysql } from "react-icons/si";
// import { BiLogoReact } from "react-icons/lu";

const OurProduct = () => {
   return (
      <>
         <section className="section_padding_top product_bg">
            <SectionTitle titleUpDown="More Of Our Work" />
            <Container className="pt-3">
               <Row>
                  <Col lg={6} md={6}>
                     <div className="device_div_height">
                        <div className="p-4 position-relative boxRadius">
                           <img
                              src="../products/access.png"
                              alt=""
                              className="device_img"
                           />
                        </div>
                     </div>
                  </Col>
                  <Col lg={6} md={6}>
                     <div className="device_div_height device_div_res px-5 px-md-3 pe-lg-0 pe-md-0 pe-sm-0 mb-5">
                        <h1 className="text-capitalize fw-semibold pb-4 product_title">
                           Face Recognition Access control System
                        </h1>
                        <p className="text-justify pb-4 mb-md-0 product_details">
                           This solution can be used for home, office, parking
                           or any area covered by CC camera using our own
                           developed face recognition technology.
                        </p>
                        <ul className="d-flex justify-content-start mb-4">
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <BiLogoPython className="display-6 productTechnology" />
                              <p className="language_name mb-0">Python</p>
                           </li>
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <FaAws className="display-6 productTechnology" />
                              <p className="language_name mb-0">AWS</p>
                           </li>
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <SiTensorflow className="display-6 productTechnology" />
                              <p className="language_name mb-0">TensorFlow</p>
                           </li>
                        </ul>

                        {/* <Link
                  href="/products-details"
                  className="CustomeBtn rounded-pill mt-4"
                >
                  View Details
                  <BiChevronRight className="CustomeBtnIcon" />
                </Link> */}
                     </div>
                  </Col>
                  <div className="div_flex d-flex justify-content">
                     <Col lg={6} md={6}>
                        <div className="device_div_height device_div_res px-5 px-md-3 pe-lg-0 pe-md-0 pe-sm-0 mb-5">
                           <h1 className="text-capitalize fw-semibold pb-4 product_title">
                              Smart voting Solution
                           </h1>
                           <p className="text-justify pb-4 mb-md-0 product_details">
                              Smart Voting Solution is developed to help you
                              organize and manage any election event smoothly
                              with proper security for both offline and online.
                           </p>
                           <ul className="d-flex justify-content-start mb-4">
                              <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                                 <FaPhp className="display-6 productTechnology" />
                                 <p className="language_name mb-0">PHP</p>
                              </li>
                              <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                                 <FaLaravel className="display-6 productTechnology" />
                                 <p className="language_name mb-0">Laravel</p>
                              </li>
                              <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                                 <BiLogoReact className="display-6 productTechnology" />
                                 <p className="language_name mb-0">React</p>
                              </li>
                              <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                                 <FaAws className="display-6 productTechnology" />
                                 <p className="language_name mb-0">AWS</p>
                              </li>
                              <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                                 <SiAmazonec2 className="display-6 productTechnology" />
                                 <p className="language_name mb-0">EC2</p>
                              </li>
                              <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                                 <SiMysql className="display-6 productTechnology" />
                                 <p className="language_name mb-0">MySQL</p>
                              </li>
                           </ul>

                           {/* <Link
                  href="/products-details"
                  className="CustomeBtn rounded-pill mt-4"
                >
                  View Details
                  <BiChevronRight className="CustomeBtnIcon" />
                </Link> */}
                        </div>
                     </Col>
                     {/* <Col lg={6} md={6} className="div_flex">
                <div className="device_div_three px-5 px-md-0 pe-md-0 des_mob_height">
                  <h1 className="text-capitalize fw-bold pb-4 product_title">
                    Smart voting Solution
                  </h1>
                  <p className="text-justify pe-4 mb-md-0 pb-4">
                    Smart Voting Solution is developed to help you organize and
                    manage any election event smoothly with proper security for
                    both offline and online.
                  </p>
                  <ul className="d-flex justify-content-start mb-4">
                    <li className="me-3 text-capitalize pe-1 py-1">
                      <div className="d-flex justify-content-center">
                        <img
                          src="/React-icon.png"
                          alt=""
                          className="language_icons"
                        />
                      </div>
                      <p className="language_name">React.js</p>
                    </li>
                    <li className="mx-3 lang_icon_mar text-capitalize px-1 py-1">
                      <div className="d-flex justify-content-center">
                        <img
                          src="/Node.png"
                          alt=""
                          className="language_icons"
                        />
                      </div>
                      <p className="language_name">Node.js</p>
                    </li>
                    <li className="mx-3 lang_icon_mar text-capitalize px-1 py-1">
                      <div className="d-flex justify-content-center">
                        <img src="/Vue.png" alt="" className="language_icons" />
                      </div>
                      <p className="language_name">Vue.js</p>
                    </li>
                    <li className="mx-3 text-capitalize px-2 py-1">
                      <div className="d-flex justify-content-center">
                        <img src="/aws.png" alt="" className="language_icons" />
                      </div>
                      <p className="language_name">AWS</p>
                    </li>
                  </ul>

                  <Link
                    href="/products-details"
                    className="CustomeBtn  rounded-pill mt-4"
                  >
                    View Details
                    <BiChevronRight className="CustomeBtnIcon" />
                  </Link>
                </div>
              </Col> */}
                     <Col lg={6} md={6} className="div_mn ">
                        <div className="device_div_height">
                           <div className="p-4 position-relative boxRadius">
                              <img
                                 src="../products/evote.png"
                                 alt=""
                                 className="device_img"
                              />
                           </div>
                        </div>
                     </Col>
                  </div>

                  <Col lg={6} md={6}>
                     <div className="device_div_height">
                        <div className="p-4 position-relative boxRadius">
                           <img
                              src="../products/hotelERP.png"
                              alt=""
                              className="device_img"
                           />
                        </div>
                     </div>
                  </Col>
                  <Col lg={6} md={6}>
                     <div className="device_div_height px-5 px-md-3 pe-lg-0 pe-md-0 pe-sm-0 mb-5">
                        <h1 className="text-capitalize fw-semibold pb-4 product_title">
                           Hotel ERP
                        </h1>
                        <p className="text-justify pe-4 pe-md-0 mb-md-0 pb-4">
                           API is ready to provide you with a complete
                           customized ERP solution for your Hotel Management
                           System. Here you will get rooms, banquet and
                           restaurant reservation facilities from your website,
                           member management system with special cards and
                           others.
                        </p>
                        <ul className="d-flex justify-content-start mb-4">
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <FaPhp className="display-6 productTechnology" />
                              <p className="language_name mb-0">PHP</p>
                           </li>
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <FaLaravel className="display-6 productTechnology" />
                              <p className="language_name mb-0">Laravel</p>
                           </li>
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <BiLogoReact className="display-6 productTechnology" />
                              <p className="language_name mb-0">React</p>
                           </li>
                           <li className="me-3 lang_icon_mar px-1 py-1 text-center">
                              <SiMysql className="display-6 productTechnology" />
                              <p className="language_name mb-0">MySQL</p>
                           </li>
                        </ul>

                        {/* <Link
                  href="/products-details"
                  className="CustomeBtn rounded-pill mt-4"
                >
                  View Details
                  <BiChevronRight className="CustomeBtnIcon" />
                </Link> */}
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default OurProduct;
