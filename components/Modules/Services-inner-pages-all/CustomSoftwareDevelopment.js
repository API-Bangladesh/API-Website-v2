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
                     Custom Software Development
                  </h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/1.webp"}
                        alt="img"
                     />

                     <p>
                        We provide fully customized solutions that meet each
                        client's specific business needs. With over a decade of
                        experience, our team of experts specializes in building
                        robust, scalable applications using modern architectures
                        and agile methodologies.
                     </p>

                     <h4>What We Offer?</h4>
                     <p>
                        Our goal is to create software that evolves with your
                        business needs now and in the future. That's why we
                        design solutions from scratch based on your unique
                        requirements and our autonomous teams work closely
                        together to transform your ideas into reality. Our
                        software development approach is rooted in microservices
                        architecture. We ensure that your solutions are agile,
                        maintainable, and adaptable to your evolving business
                        needs. Plus, we understand that today's software needs
                        to work flawlessly with various endpoints, including API
                        integrations, webhooks, and third-party services. Our
                        team configures custom software solutions to connect
                        efficiently and communicate with multiple endpoints,
                        ensuring a smooth and integrated user experience.
                     </p>

                     
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Choose API Solution for technical excellence
                                 with seasoned developers crafting tailored
                                 software. Our customized precision ensures
                                 software beyond expectations, enhancing
                                 efficiency for enduring value. Built to grow,
                                 our solutions adapt to your changing needs
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
                                 src={"/our-services-avatar/1.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">Software Developer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p>  */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Know Our Unique Work Model for Clients
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={12} sm={12}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Project Overview</h3>
                              <p>
                              We commence with an in-depth exploration of your project's objectives and constraints. We weave a thorough project plan that maps out timelines, milestones, and deliverables, creating a clear track forward.
                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                           <div className="servicesBox position-relative ">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/UserInterfaceDesign.svg"
                                 }
                                 alt="img"
                              />
                              <h3>Segmenting Duties</h3>
                              <p>
                              We break the project into iterative stages to bring your vision to life. We ensure you stay updated on development status so we can deliver value incrementally. Our process ensures seamless refinement from idea to finished product.
                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                           <div className="servicesBox position-relative ">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/RapidPrototyping.svg"
                                 }
                                 alt="img"
                              />
                              <h3>Quality Fortification </h3>
                              <p>
                              We thoroughly test your software using comprehensive assessments including functionality testing and rigorous security scanning. We promptly address the limitations and ensure the best end of the product. 
                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                           <div className="servicesBox position-relative ">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/PostLaunchDesignOptimization.svg"
                                 }
                                 alt="img"
                              />
                              <h3>We Provide Maintenance</h3>
                              <p>
                              It isn't the end here. We are here to launch your product as well. Our software launch process involves careful planning, cloud migration if needed, testing for quality, data migration, user training, and ongoing support. It ensures a smooth transition to your new software solution, backed by our commitment to your success.
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
