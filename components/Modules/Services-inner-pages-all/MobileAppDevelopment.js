import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const InnerPage = () => {
   return (
      <>
         <section id="innerPage" className="section_padding">
            <Container>
               <div className="roleBox">
                  <h1 className="roleTitle text-capitalize">
                     Mobile App Development
                  </h1>

                  <div className="textImgBox">
                     <div className="curve">
                        <img src={"/innerPaageImg/3.webp"} alt="img" />
                     </div>

                     <p>
                        Embark on a Journey of Innovation and Excellence with
                        Our Android App Services. We believe nothing can craft
                        digital experiences better than a mobile app. We think
                        out of the box to make our services go beyond the
                        ordinary.
                     </p>

                     <h4>What We Offer?</h4>

                     <p>
                        Our expertise lies in crafting optimized mobile
                        solutions around your target users and goals. We
                        collaborate closely to understand pain points and design
                        experiences that leverage the full capabilities of the
                        Android platform. Our developers are highly skilled at
                        integrating advanced functionality like facial
                        recognition, geofencing, automation scripting, and
                        Google Cloud Platform services into apps to boost
                        capabilities. We ensure flawless cross-platform
                        compatibility so your app performs smoothly across
                        devices. Whether you need a secure enterprise solution
                        with biometric authentication, an intelligent logistics
                        platform with tracking, or an innovative e-commerce app
                        with engaging features, We are here to build you a
                        high-quality, user-friendly app that solves real-life
                        problems. Partner with us for your Android app
                        development, and watch your tech dreams come true. Get
                        in touch today and discover the potential of our
                        advanced Android app solutions.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Watch your tech dreams come true with our
                                 advanced Android app solutions. Partner with us
                                 for development excellence. Get in touch today
                                 to unlock the potential of tailored Android
                                 apps for your business.
                              </h3>
                              <div className="techBox mt-5">
                                 <div className="tech">
                                    <img
                                       className="proIconImg"
                                       src={"/innerPaageImg/icon/Figma.svg"}
                                       alt="img"
                                    />
                                 </div>
                                 <div className="tech">
                                    <img
                                       className="proIconImg"
                                       src={"/innerPaageImg/icon/Miro.svg"}
                                       alt="img"
                                    />
                                 </div>
                                 <div className="tech">
                                    <img
                                       className="proIconImg"
                                       src={"/innerPaageImg/icon/Hotjar.svg"}
                                       alt="img"
                                    />
                                 </div>
                                 <div className="tech">
                                    <img
                                       className="proIconImg"
                                       src={"/innerPaageImg/icon/C.svg"}
                                       alt="img"
                                    />
                                 </div>
                                 <div className="tech">
                                    <img
                                       className="proIconImg"
                                       src={"/innerPaageImg/icon/Mi.svg"}
                                       alt="img"
                                    />
                                 </div>
                                 <div className="tech">
                                    <img
                                       className="proIconImg"
                                       src={"/innerPaageImg/icon/tailwind.svg"}
                                       alt="img"
                                    />
                                 </div>
                              </div>

                              <Link
                                 className="requestBtn contactBtn text-uppercase"
                                 href="/contact-us"
                              >
                                 Schedule a design consultation
                              </Link>
                           </div>
                        </Col>
                        <Col lg={4} md={4}>
                           <div className="proImgBox position-relative text-end">
                              <img
                                 className="proImg d-inline-block"
                                 src={"/our-services-avatar/3.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">Mobile App Developer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        How Mobile Application Help Extend Your Business
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Increase brand awareness</h3>
                              <p>
                              A well-designed app directly engages customers with your brand whenever they use their phones. It builds familiarity and loyalty with your brand.
                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative ">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/UserInterfaceDesign.svg"
                                 }
                                 alt="img"
                              />
                              <h3>Generate revenue streams</h3>
                              <p>
                              Apps allow monetization through paid downloads, in-app purchases, subscriptions, and advertising. An app can become a direct profit center.
                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative ">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/RapidPrototyping.svg"
                                 }
                                 alt="img"
                              />
                              <h3>Improve customer service</h3>
                              <p>
                              An app provides a fast and convenient way for customers to get support, contact you, find information, or access services related to your business.

                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative ">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/PostLaunchDesignOptimization.svg"
                                 }
                                 alt="img"
                              />
                              <h3>Collect customer data</h3>
                              <p>
                              Mobile apps can gather valuable insights about your customers, including demographics, location, behaviors, and preferences. This data helps drive strategy.
                              </p>
                           </div>
                        </Col>
                     </Row>
                  </div>
               </div>
            </Container>
         </section>
      </>
   );
};

export default InnerPage;
