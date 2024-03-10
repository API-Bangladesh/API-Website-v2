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
                     Digital Marketing
                  </h1>

                  <div className="textImgBox">
                     <div className="curve">
                        <img src={"/innerPaageImg/9.webp"} alt="img" />
                     </div>

                     <p>
                        Our team of digital marketing gurus knows how to make
                        your brand rock on the internet. We're like the
                        backstage crew that makes your online show a hit.
                     </p>

                     <h4>Our Digital Marketing Mission & Vision</h4>

                     <p>
                        Our vision is to be more than just a provider of
                        standard digital marketing services. We aim to be a true
                        partner in your business's digital growth and success.
                        Our holistic approach focuses on executing essential
                        services like SEO, PPC, social media marketing, and
                        analytics with skill and dedication. But we also keep an
                        eye on the bigger picture of how to continually
                        innovate, explore new opportunities, and boost your
                        digital presence. Above all, our mission is to help our
                        clients achieve their most important business goals
                        through digitally-driven growth and engagement. We will
                        ensure you’re one step ahead in identifying and
                        capitalizing on new digital opportunities.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Don't hesitate to contact us for your digital
                                 needs. Take your digital marketing to the next
                                 level, optimize your online presence, or
                                 explore new opportunities by taking our
                                 services.
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
                                 src={"/our-services-avatar/9.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">
                                    Digital Marketing Manager
                                 </h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        What Do We offer?
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Comprehensive SEO Solutions</h3>
                              <p>
                                 Elevate online presence with our SEO expertise,
                                 optimizing content, and website structure.
                                 Enhance search rankings, increase organic
                                 traffic, and stay ahead in the competitive
                                 digital landscape.
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
                              <h3>Premium Content Marketing Services</h3>
                              <p>
                                 Our skilled content developers and editors
                                 write SEO-optimized articles and can draft and
                                 fine-tune them to merge with brand image and
                                 intent. Be it for a marketing company, or
                                 niche-based blogging, we provide top-notch
                                 content writing services.
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
                              <h3>Engaging Social Media Management</h3>
                              <p>
                                 Foster meaningful connections through expertly
                                 managed social media platforms. Our services
                                 include content creation, community engagement,
                                 and strategic campaigns, enhancing brand
                                 presence across diverse channels.
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
                              <h3>Data-Driven Analytics</h3>
                              <p>
                                 We use advanced analytics tools to have
                                 valuable insights into campaign performance,
                                 audience behavior, and ROI. Make informed
                                 decisions, refine strategies, and achieve
                                 measurable success with our data-driven
                                 approach.
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
