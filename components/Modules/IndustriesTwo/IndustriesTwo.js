import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SectionTitle from "../Section_title/Section_title";
import { Chart } from "react-google-charts";

export const data = [
   ["Language", "Speakers (in millions)"],
   ["Tourism & hospitality", 2],
   ["Retail & E-commerce", 2],
   ["Sports", 2],
   ["NGO", 1],
   ["Health & pharmaceuticals", 3],
];

export const options = {
   legend: "none",
   pieSliceText: "label",
   // title: "Swiss Language Use (100 degree rotation)",
   pieStartAngle: 100,
   chartArea: { width: 420, height: 420 },
};

const IndustriesTwo = () => {
   return (
      <>
         <section id="industriesTwo" className="section_padding industry_bg">
            <SectionTitle titleUpDown="Industries" />
            <Container>
               <Row>
                  <Col lg={6} md={6}>
                     <div className="ChartBox d-flex justify-content-center position-relative">
                        <Chart
                           chartType="PieChart"
                           data={data}
                           options={options}
                           width={"500px"}
                           height={"500px"}
                        />
                        <img className="man_icon" src="/industries-icon/man.svg" alt="img"/>
                        <img className="woman_icon" src="/industries-icon/woman.svg" alt="img"/>
                     </div>
                  </Col>
                  <Col lg={6} md={6}>
                     {/* swiper slider */}
                     <div className="wiperBox d-flex align-items-center h-100 pe-5">
                        <Swiper
                           effect={"cards"}
                           grabCursor={true}
                           loop={true}
                           modules={[EffectCards]}
                           className="mySwiper"

                        >
                           <SwiperSlide className="slider_card">
                              <p className="text-capitalize pb-2 slider_card_title">
                                 tourism & hospitality
                              </p>
                              <p className="text-capitalize fw-normal industriesText">
                                 Elevate guest experiences in the hospitality
                                 industry through our technology solutions,
                                 encompassing website development and seamless
                                 integration of IoT applications.
                              </p>
                           </SwiperSlide>
                           <SwiperSlide className="slider_card">
                              <p className="text-capitalize pb-2 slider_card_title">
                                 retail & E-commerce
                              </p>
                              <p className="text-capitalize fw-normal industriesText">
                                 Strengthen your online presence and deliver a
                                 seamless shopping experience through our expert
                                 website and web application development
                                 services.
                              </p>
                           </SwiperSlide>
                           <SwiperSlide className="slider_card">
                              <p className="text-capitalize pb-2 slider_card_title"> sports</p>
                              <p className="text-capitalize fw-normal industriesText">
                                 Engage your fan base, streamline event
                                 management, and amplify your sports brand with
                                 our profound expertise in mobile app
                                 development, delivering flawless experiences
                                 for sports enthusiasts.
                              </p>
                           </SwiperSlide>
                           <SwiperSlide className="slider_card">
                              <p className="text-capitalize pb-2 slider_card_title"> NGO</p>
                              <p className="text-capitalize fw-normal industriesText">
                                 Fortify your NGO's data security and
                                 humanitarian efforts with our expertise in
                                 cloud computing and cyber security.
                              </p>
                           </SwiperSlide>
                           <SwiperSlide className="slider_card">
                              <p className="text-capitalize pb-2 slider_card_title">
                                 health & pharmaceuticals
                              </p>
                              <p className="text-capitalize fw-normal industriesText">
                                 Safeguard sensitive data and ensure regulatory
                                 compliance within the healthcare sector through
                                 our secure data management solutions, enabling
                                 you to prioritize patient care excellence.
                              </p>
                           </SwiperSlide>
                        </Swiper>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default IndustriesTwo;
