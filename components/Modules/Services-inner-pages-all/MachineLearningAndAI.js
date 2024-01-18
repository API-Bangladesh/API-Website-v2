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

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/6.jpg"}
                        alt="img"
                     />

                     <p>
                        In the realm of Artificial Intelligence (AI) and Machine
                        Learning (ML), our dedicated team thrives in the dynamic
                        landscape. Fueled by innovation and supported by a
                        stellar lineup of data scientists, engineers, and
                        developers, we offer a spectrum of AI solutions tailored
                        to our clients' unique needs.
                     </p>

                     <p>
                        <b>Custom Machine Learning Solutions: </b>
                        We excel in crafting personalized ML models that tackle
                        intricate challenges across diverse industries.
                        Versatile in nature, these models adeptly handle tasks
                        like image recognition, language understanding,
                        predictions, and recommendations.
                     </p>

                     <p>
                        <b>Deep Learning Expertise:</b>
                        Leveraging neural networks and CNNs, our deep learning
                        proficiency enables us to navigate complex tasks, from
                        identifying objects to understanding speech and creating
                        autonomous systems.
                     </p>

                     <p>
                        <b>Natural Language Processing (NLP):</b>
                        NLP is a forte. Our prowess lies in developing AI models
                        for sentiment analysis, chatbots, text summarization,
                        language translation, and various language-centric
                        applications. At the intersection of innovation and
                        expertise, our AI and ML services stand poised to
                        transform industries, providing tailored solutions that
                        push the boundaries of what's possible. Whether it's
                        crafting personalized ML models, delving into deep
                        learning intricacies, or mastering NLP applications, our
                        commitment to excellence drives unparalleled results for
                        our clients.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Unlock tailored AI and ML solutions with API
                                 Solutions. Elevate your business, optimize
                                 operations, and drive industry innovation.
                                 Contact us today to embark on a more
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
                                 <h3 className="mb-1">Software Engineer (AI,ML)</h3>
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
