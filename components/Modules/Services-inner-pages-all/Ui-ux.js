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
                  <h1 className="roleTitle text-capitalize">UI/UX Design</h1>

                  <div className="textImgBox">
                     <div className="curve">
                        <img src={"/innerPaageImg/4.webp"} alt="img" />
                     </div>

                     <p>
                        Our UI/UX Design Services are like the artists of the
                        digital world. Design is an expression of art and
                        creativity. What sets us apart is we make your apps and
                        websites not only work well but look stunning!
                     </p>

                     <h4 className="d-block my-2">
                        Our UI/UX Design Philosophy
                     </h4>

                     <p>
                        We're all about making technology friendly and personal.
                        We believe that every click or tap comes from a real
                        person with their own wants and needs. Our design
                        philosophy is all about being kind, understanding, and
                        putting people first. We design with the folks who use
                        your stuff in mind, so their digital journey is super
                        enjoyable!
                     </p>

                     <h4>What We Offer?</h4>

                     <p>
                        We offer UX/UI consulting to provide expert guidance and
                        audits to solve design challenges. Our design strategy
                        and workshops help clients unlock their digital
                        potential. Our UX/UI design services transform user
                        experiences through wireframing and prototyping. We
                        bring concepts to life, bridging gaps from wireframes to
                        interactive prototypes. We develop component libraries
                        and documentation to maintain brand integrity across
                        touchpoints. Our research and usability testing provides
                        comprehensive user insights to identify pain points.
                        Clients gain confidence in product direction through our
                        data-driven findings. With an emphasis on understanding
                        users, we help craft engaging, frictionless digital
                        experiences merged with actual user behaviors and needs.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Ready to transform your digital presence?
                                 Choose us for exceptional UI/UX Design. Our
                                 expert designers ensure smooth functionality on
                                 all devices. Skilled in tools like Sketch,
                                 Adobe XD, and Figma, they craft polished,
                                 professional, and awesome-looking digital
                                 experiences.
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
                                 src={"/our-services-avatar/4.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">UI/UX Designer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Elevate Your Digital Experience with Our Tailored UX/UI
                        Design Solutions
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <h3>Intuitive User Journeys</h3>
                              <p>
                              Create smooth experiences through user-centric design, ensuring easy navigation and interactions that align with your audience's expectations.
                              </p>
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative ">
                              <h3>Responsive and Consistent Design</h3>
                              <p>
                              Our designs work smoothly on any device. It will give you a consistent and good-looking interface that boosts your brand and keeps users engaged.
                              </p>
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/UserInterfaceDesign.svg"
                                 }
                                 alt="img"
                              />
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative ">
                              <h3>Visual Appeal and Professionalism</h3>
                              <p>
                              Enhance your brand's look with visually refined designs. Our team pays close attention to detail, ensuring a polished and visually appealing digital presence.
                              </p>
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/RapidPrototyping.svg"
                                 }
                                 alt="img"
                              />
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative ">
                              <h3>Efficiency through Tools and Expertise</h3>
                              <p>
                              Harness the expertise of our designers proficient in tools like Sketch, Adobe XD, and Figma. We craft appealing graphics, optimize images, and employ CSS to not only make your product visually appealing but also ensure flawless functionality.
                              </p>
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/PostLaunchDesignOptimization.svg"
                                 }
                                 alt="img"
                              />
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
