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
                     Cloud Solutions
                  </h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/7.jpg"}
                        alt="img"
                     />

                     <p>
                        We're dedicated to delivering AWS cloud solutions,
                        empowering businesses in the digital age. Our expertise
                        in cloud migration, cloud-to-on-premises transition, and
                        system design makes us your reliable partner. Here's a
                        glimpse of our offered expertise
                     </p>

                     <p>
                        <b>Cloud Migration: </b>
                        Achieve enhanced scalability, efficiency, and cost
                        savings with our mastery in cloud migration. Our
                        seasoned experts facilitate a seamless transition from
                        on-premises infrastructure to AWS. We ensure minimal
                        impact on daily operations, utilizing advanced
                        techniques for secure data transfer and system
                        optimization.
                     </p>

                     <p>
                        <b>Cloud-to-On-Premises Migration: </b>
                        opt for a hybrid approach tailored to your needs. We
                        specialize in cloud-to-on-premises migration, allowing
                        you to maintain on-site infrastructure while leveraging
                        cloud services. Our experts design a strategy for
                        seamless integration, ensuring a cohesive and efficient
                        operation.
                     </p>

                     <p>
                        <b>System Design: </b>A robust cloud solution starts
                        with a well-designed system architecture. Our system
                        architects create customized designs aligning with your
                        business goals. Ensuring a seamless blend with your
                        requirements, we lay the foundation for a future-ready
                        and efficient cloud ecosystem.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Thrive in the digital landscape with our
                                 commitment to excellence and expertise. Unlock
                                 your business potential through our technical
                                 prowess, industrial expertise, and unwavering
                                 commitment. Start your confident cloud
                                 journey-contact us today.
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
                                 src={"/our-services-avatar/7.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">DevOps Engineer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Unparalleled Cloud Solutions
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Scalability</h3>
                              <p>
                                 Effortlessly adapt to business growth with
                                 systems that scale dynamically, ensuring
                                 seamless performance amid fluctuating
                                 workloads.
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
                              <h3>Security</h3>
                              <p>
                                 Rigorous measures safeguard your data and
                                 applications, meeting industry standards to
                                 shield against potential threats and ensure
                                 compliance.
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
                              <h3>Performance Optimization</h3>
                              <p>
                                 Maximize efficiency and cost-effectiveness by
                                 fine-tuning your system for peak performance,
                                 ensuring optimal cost-to-output ratios.
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
                              <h3>Disaster Recovery and Cost Efficiency</h3>
                              <p>
                                 Robust disaster recovery solutions guarantee
                                 business continuity while our cost management
                                 expertise ensures budget-friendly resource
                                 utilization.
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
