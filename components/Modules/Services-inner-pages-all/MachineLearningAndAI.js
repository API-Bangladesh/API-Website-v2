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
                     Machine Learning & AI
                  </h1>

                  <div className="textImgBox">
                     <div className="curve">
                        <img src={"/innerPaageImg/6.webp"} alt="img" />
                     </div>

                     <p>
                        We have a dedicated team in the dynamic and
                        ever-evolving field of Artificial Intelligence (AI) and
                        Machine Learning (ML) services. Our commitment to
                        innovation, coupled with our exceptional team of data
                        scientists, engineers, and developers, allows us to
                        offer a wide array of AI solutions framed to the unique
                        needs of our clients.
                     </p>

                     <h4>Our Expertise in A Nutshell</h4>

                     <p>
                        We're experts in creating personalized ML models that
                        solve challenging problems in various industries. These
                        models are versatile and can handle tasks like
                        recognizing images, understanding language, making
                        predictions, and offering recommendations. Our deep
                        learning skills, using neural networks and CNNs will
                        handle complex tasks such as identifying objects,
                        understanding speech, and creating autonomous systems.
                        We have a tested team, creating AI models for sentiment
                        analysis, chatbots, text summarization, language
                        translation, and an array of language-related
                        applications. Everything we create is focused on real.
                        Our systems make decisions, predict outputs, automate
                        processes, and uncover insights so you can work smarter.
                        Anyway, we don’t forget to ensure they are secure,
                        ethical, and safe!
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 By partnering with API Solutions, you can
                                 access a world of AI and ML solutions tailored
                                 to your needs. We're here to enhance your
                                 business, optimize your operations, and drive
                                 innovation in your industry. Contact us today
                                 to take the first step towards a more
                                 innovative, data-driven future.
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
                                 src={"/our-services-avatar/6.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">
                                    Software Engineer (AI,ML)
                                 </h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Our Core Offerings
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Data Analytics and Predictive Modeling</h3>
                              <p>
                                 Our data analytics and predictive modeling
                                 solutions help extract actionable insights from
                                 their data. This includes predictive
                                 maintenance, demand forecasting, and anomaly
                                 detection.
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
                              <h3>IoT Integration</h3>
                              <p>
                                 Want to make your business smarter? Then,
                                 thanks for having us. We're experts at
                                 combining AI with the Internet of Things (IoT),
                                 providing solutions for remote monitoring,
                                 proactive maintenance, and making IoT devices
                                 smarter with AI.
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
                              <h3>Cloud-Based Services</h3>
                              <p>
                                 We use cloud platforms to offer AI and ML
                                 solutions that are scalable, efficient, and
                                 budget-friendly. These platforms simplify the
                                 process of training and deploying models.
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
                              <h3>Data Security and Privacy</h3>
                              <p>
                                 We prioritize data security and privacy to
                                 safeguard sensitive information. We use
                                 advanced encryption and compliance measures to
                                 protect our client's data.
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
