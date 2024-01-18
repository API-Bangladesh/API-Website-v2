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
                     IT Consultancy
                  </h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/10.jpg"}
                        alt="img"
                     />

                     <p>
                        At API Solutions, we simplify complex IT challenges to
                        make technology work seamlessly for you. Our approach
                        begins with understanding your business goals and
                        challenges, forming the foundation for strategic
                        planning.
                     </p>

                     <p>
                        <b>Our Approach: </b>
                        IT can be confusing, but we make it easy. With a plain
                        and simple IT consulting approach, we aim to boost your
                        software setup, creating a tech-focused plan that fits
                        your business seamlessly.
                     </p>

                     <p>
                        <b>Expert Guidance: </b>
                        Our skilled software engineers work hand in hand with
                        you, delivering practical solutions for a smooth digital
                        transformation. We're not just here to offer advice;
                        we're here to make it hassle-free.
                     </p>

                     <p>
                        <b>Infrastructure Optimization: </b>
                        We closely examine your existing infrastructure,
                        identifying areas for enhancement to ensure optimal
                        system and network performance, providing efficiency and
                        reliability.
                     </p>

                     <p>
                        <b>Security Solutions: </b>
                        Our forward-thinking security consultancy includes
                        audits, threat assessments, data protection strategies,
                        network security, policy development, and incident
                        response planning.
                     </p>

                     <p>
                        <b>IT Strategy Development: </b>
                        Collaborating with your team, our experienced
                        consultants create a tailored IT roadmap. This strategy
                        optimizes your IT resources, improves efficiency, and
                        propels your business forward, becoming an integral part
                        of your path to success at every step.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Ready to take the next step in optimizing your
                                 IT solutions? We're here to bring your business
                                 to the next level! So, be prepared for a
                                 seamless journey toward enhanced efficiency and
                                 success.
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
                                 src={"/our-services-avatar/10.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">Senior Consultant</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Unlocking Business Potential: The Crucial Role of IT
                        Consultancy
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Strategic Alignment:</h3>
                              <p>
                                 Ensure your technology aligns with business
                                 goals, leveraging IT consultancy to develop a
                                 cohesive strategy that enhances efficiency,
                                 fosters growth, and stays ahead of industry
                                 trends.
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
                              <h3>Expert Guidance</h3>
                              <p>
                                 Navigate complex IT landscapes with the
                                 expertise of seasoned consultants. Gain
                                 insights, innovative solutions, and a roadmap
                                 for technology integration that propels your
                                 business forward.
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
                              <h3>Security Assurance</h3>
                              <p>
                                 Safeguard your digital assets with robust
                                 security measures. IT consultancy provides a
                                 proactive approach, offering security audits,
                                 threat assessments, and incident response
                                 planning to protect your business from evolving
                                 cyber threats.
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
                              <h3>Optimized Efficiency</h3>
                              <p>
                                 Streamline operations and enhance performance
                                 with IT consultancy. Identify areas for
                                 improvement, implement tailored solutions, and
                                 optimize your IT infrastructure to boost
                                 overall efficiency, productivity, and
                                 bottom-line results.
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
