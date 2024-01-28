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
                     Web App Development
                  </h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/2.webp"}
                        alt="img"
                     />

                     <p>
                        Our eyes are on developing exceptional web applications
                        that redefine the online experience, taking businesses
                        to new heights through seamless functionality, stunning
                        design, and updated technology. Our web applications are
                        designed to grow as your needs expand. We use cloud
                        services such as Amazon Web Services, Google Cloud
                        Platform, and Microsoft Azure to make sure your
                        resources can be easily scaled up.
                     </p>

                     <p>
                        <b>Unmatched Technical Prowess: </b>A versatile team,
                        for sure. We have seasoned developers, coders, and
                        engineers who thrive on complex challenges. They speak
                        in languages like JavaScript, Python, Ruby, and PHP with
                        ease, ensuring your web app is built to perfection.
                     </p>

                     <p>
                        <b>Custom-Coded Excellence: </b>
                        We code web applications from scratch, blending every
                        line to suit your unique requirements. We're not just
                        developers; we're digital architects, building the web
                        infrastructure you need.
                     </p>

                     <p>
                        <b>End-to-End Services: </b>
                        API Solutions offers a comprehensive suite of services,
                        including project management, design, development,
                        testing, and ongoing maintenance to ensure your web
                        app's success.
                     </p>

                     <p>
                        <b>User-Centric Design: </b>
                        Our skilled UX/UI professionals design user-friendly
                        interfaces that bring pleasure to users, and our
                        developers guarantee smooth and flawless functionality
                        under the surface.
                     </p>

                     <p>
                        <b>Security is Paramount: </b>
                        We take data security seriously. Your web app will be
                        fortified against vulnerabilities with robust
                        authentication, encryption, and protection measures
                        implemented at every level.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Post-launch, count on us for comprehensive
                                 support, including regular maintenance,
                                 updates, and enhancements. We're dedicated to
                                 keeping your web app in peak condition for
                                 sustained performance and ongoing success.
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
                                 src={"/our-services-avatar/2.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">Web Developer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        Know Our Work Process
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <h3>Discovery and Planning</h3>
                              <p>
                                 The journey kicks off with a conversation. We
                                 attentively listen to your goals, vision, and
                                 expectations. Together, we define technical
                                 requirements and establish clear project
                                 milestones.
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
                              <h3>Design Precision</h3>
                              <p>
                                 Our design team creates wireframes and mockups,
                                 ensuring your web app aligns precisely with
                                 your vision. We collaborate closely with you to
                                 guarantee the design meets your expectations.
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
                              <h3>Development Excellence</h3>
                              <p>
                                 The coding phase begins! Our skilled developers
                                 utilize cutting-edge technologies, frameworks,
                                 and languages to breathe life into your web
                                 app. Regular check-ins and updates keep you
                                 informed throughout the process.
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
                              <h3>Quality Assurance and Support</h3>
                              <p>
                                 Before going live, our dedicated QA team
                                 conducts rigorous testing, ensuring your web
                                 application functions seamlessly, remains
                                 secure, and delivers top-notch performance.
                                 Post-launch, we support deployment and provide
                                 ongoing assistance, fine-tuning performance and
                                 making updates as needed.
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
