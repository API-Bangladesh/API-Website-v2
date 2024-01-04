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
                        src={"/innerPaageImg/1.jpg"}
                        alt="img"
                     />

                     <p>
                        We're dedicated to crafting exceptional custom software
                        that's a perfect fit for your unique requirements. Our
                        specializations are as follows.
                     </p>

                     <p>
                        <b>PHP Development: </b>
                        Our expert PHP developers are well-versed in harnessing
                        the power of this versatile scripting language. Whether
                        it's building potent web applications or crafting
                        dynamic web applications, we use PHP to create solutions
                        that cater to your specific business requirements.
                     </p>

                     <p>
                        <b>Laravel Development: </b>Laravel is our go-to
                        framework for building powerful, secure, scalable web
                        applications. Our team leverages the full potential of
                        Laravel to ensure your software is feature-rich but also
                        maintainable and future-proof.
                     </p>

                     <p>
                        <b>Vue.js Development: </b>When it comes to creating
                        dynamic and high-performance web applications, Vue.js is
                        our tool of choice. Our Vue.js developers are experts in
                        building user-friendly interfaces that engage your
                        audience and enhance the user experience.
                     </p>

                     <p>
                        <b>Microservices Architecture: </b>Our software
                        development approach is rooted in microservices
                        architecture. We ensure that your solutions are agile,
                        maintainable, and adaptable to your evolving business
                        needs.
                     </p>

                     <p>
                        <b>Multiple Endpoints Integration: </b>We understand
                        that today's software needs to work seamlessly with
                        various endpoints, including API integrations, webhooks,
                        and third-party services. Our team configures custom
                        software solutions to connect efficiently and
                        communicate with multiple endpoints, ensuring a smooth
                        and integrated user experience.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={6} md={6}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                              Choose API Solution for technical excellence with seasoned developers crafting tailored software. Our customized precision ensures software beyond expectations, enhancing efficiency for enduring value. Built to grow, our solutions adapt to your changing needs
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
                        <Col lg={6} md={6}>
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
                              <h3>Code Crafting Blueprint</h3>
                              <p>
                              Initiating with a comprehensive exploration of your project's goals and constraints, we collaboratively craft a detailed plan. Mapping timelines, milestones, and deliverables, we pave a clear path forward for seamless progress together.
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
                              <h3>Segmenting Duties </h3>
                              <p>
                              Transform your vision with phased project segmentation, enabling iterative refinement. Constant interaction keeps you informed about the project's development. Ensuring continuous value delivery, we bring your vision to reality step by step.
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
                              We subject your software to an array of comprehensive tests. Since we want no stone to be unturned, we perform functional assessments to perform trials and stringent security scans. We promptly address the limitations and ensure the best end of the product. 
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
                              It doesn't stop here. We're here for your product launch too. Our meticulous launch process includes planning, cloud migration, quality testing, data migration, user training, and ongoing support. Ensuring a seamless transition, we're committed to your success.
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
