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
                  <h1 className="roleTitle text-capitalize">IT Consultancy</h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/10.webp"}
                        alt="img"
                     />

                     <p>
                        Our goal is to simplify complex IT challenges, making
                        technology work for you. We begin by understanding your
                        business goals and challenges. This forms the foundation
                        of our strategic planning.
                     </p>

                     <h4>Our Approach</h4>

                     <p>
                        We get that IT can be pretty darn confusing, but we're
                        here to make it easy. We keep things plain and simple
                        with an easy approach to IT consulting. Our aim is to
                        boost your software setup and create a tech-focused plan
                        that fits your business well. Our forward-thinking
                        security consultancy offers a range of services designed
                        to fully assess your cyber risk exposure. We implement
                        customized solutions to harden your digital environment.
                        We conduct audits to find vulnerabilities, assess
                        threats to detect risks, create data protection plans
                        for critical info, develop customized security policies,
                        and prepare incident responses to minimize damage from
                        any breach. Our multilayered approach focuses on
                        shielding your data, operations, and networks from
                        evolving threats through robust cybersecurity strategies
                        tailored specifically to safeguard your organization.
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
                        Our Expertise
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>IT Strategy Development</h3>
                              <p>
                                 Our experienced consultants engage in a
                                 collaborative process with your team to create
                                 a strategic IT roadmap that is customized to
                                 your unique needs.
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
                              <h3>Infrastructure Optimization</h3>
                              <p>
                                 We closely examine your existing
                                 infrastructure, identifying areas for
                                 enhancement to ensure optimal system and
                                 network performance, providing efficiency and
                                 reliability.
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
                     </Row>
                  </div>
               </div>
            </Container>
         </section>
      </>
   );
};

export default InnerPage;
