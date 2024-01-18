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

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/3.jpg"}
                        alt="img"
                     />

                     <p>
                        Embark on an innovation journey with our Android app
                        services. More than just app creation, we craft digital
                        experiences that exceed expectations. Our expertise
                        includes.
                     </p>

                     <p>
                        <b>Cross-Platform Excellence: </b>
                        Expertise in creating Android apps for diverse devices,
                        ensuring cost savings and a broad audience reach.
                     </p>

                     <p>
                        <b>Android-Centric Solutions: </b>
                        Tailored Android apps for your business needs,
                        leveraging the platform's full potential for outstanding
                        solutions.
                     </p>

                     <p>
                        <b>Face Recognition Technology: </b>
                        In-depth knowledge ensures secure, advanced apps with
                        features like biometric security and identity
                        verification.
                     </p>

                     <p>
                        <b>Google Cloud Integration: </b>
                        Seamless integration for enhanced app power, providing
                        strong data storage, live collaboration, and scalable
                        growth.
                     </p>

                     <p>
                        <b>App Script Automation: </b>
                        Boost efficiency and productivity with Android apps
                        featuring robust automation features for streamlined
                        business operations.
                     </p>
                     <p>
                        <b>GeoFire Implementation: </b>
                        Covering location-based actions, live tracking, and
                        efficient route planning, ensuring comprehensive
                        solutions for your app.
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
                                 A well-designed app directly engages customers
                                 with your brand whenever they use their phones.
                                 It builds familiarity and loyalty with your
                                 brand.
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
                                 Apps allow monetization through paid downloads,
                                 in-app purchases, subscriptions, and
                                 advertising. An app can become a direct profit
                                 center.
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
                                 An app provides a fast and convenient way for
                                 customers to get support, contact you, find
                                 information, or access services related to your
                                 business.
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
                                 Mobile apps can gather valuable insights about
                                 your customers, including demographics,
                                 location, behaviors, and preferences. This data
                                 helps drive strategy.
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
