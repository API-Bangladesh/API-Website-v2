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
                     Software QA and Testing
                  </h1>

                  <div className="textImgBox">
                     <div className="curve">
                        <img src={"/innerPaageImg/5.webp"} alt="img" />
                     </div>

                     <p>
                        Our QA and testing services aim to surpass industry
                        standards by going above and beyond for your software.
                     </p>

                     <h4>What We Offer?</h4>

                     <p>
                        Our manual testing services ensure your software works
                        as it should. We start with a test plan outlining the
                        scope and approach. We thoroughly evaluate
                        non-functional aspects like speed and usability and do
                        all Black box testing assessments as well. We accelerate
                        testing cycles and provide consistent, comprehensive
                        coverage - including complex scenarios. We integrate
                        automation seamlessly into CI/CD pipelines, fostering a
                        culture of continuous improvement. All we care for is
                        that your software works, performs well, and satisfies
                        users. You get smooth, reliable software that excels
                        across the board.
                     </p>
                     <h4>Types of Software We Test</h4>
                     <p>
                        We test web applications across browsers and platforms
                        for flawless functionality. Mobile app testing covers
                        Android, iOS, and a variety of devices. For desktops, we
                        verify the software on Windows, Mac, and Linux. Testing
                        also spans IoT, e-commerce, enterprise software like ERP
                        and CRM, and health applications such as EHR systems. We
                        validate education/e-learning platforms and content
                        management systems like WordPress and Drupal.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 With experts at your side, say goodbye to
                                 worries and hello to success! Partner with API
                                 Solutions for excellent QA and testing that
                                 establishes top-notch software quality and
                                 reliability.
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
                                 src={"/our-services-avatar/5.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">Software QA Engineer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Unlocking Excellence: Comprehensive Software QA and
                        Testing Services
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Contact Us If You Want</h3>
                              <p>
                                 Your Software to Rock the Floor The key to
                                 awesome software QA and testing is making sure
                                 your software is top-notch. By really putting
                                 your software through its paces, we guarantee
                                 it will blow your users away.
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
                              <h3>Find and Fix Issues</h3>
                              <p>
                                 Our rock-solid testing finds any bugs or
                                 problems hiding in your software. This allows
                                 us to tackle them before your users ever see
                                 them.
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
                              <h3>Great User Experience</h3>
                              <p>
                                 Your users' happiness is our #1 priority.
                                 Careful testing fuels our passion for creating
                                 software that's intuitive and easy to use. Our
                                 efforts result in an experience your users will
                                 love.
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
                              <h3>Reliability</h3>
                              <p>
                                 Reliable software is built on a solid
                                 foundation of rigorous testing. By minimizing
                                 crashes, downtime, or data loss, we reinforce
                                 your software's dependability and stability so
                                 it thrives under pressure.
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
