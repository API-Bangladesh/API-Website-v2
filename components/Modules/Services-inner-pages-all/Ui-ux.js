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
                     UI/UX Design
                  </h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/4.jpg"}
                        alt="img"
                     />

                     <p>
                        Unlock the potential of your digital presence with our
                        UI/UX Design Services, where design is an expression of
                        art and creativity. We set ourselves apart by making
                        your apps and websites not only function seamlessly but
                        also look stunning. Our philosophy centers on kindness,
                        understanding, and putting people first, ensuring an
                        enjoyable digital journey for every user.
                     </p>

                     <h4 className="d-block my-2">
                        Discover what sets us apart in UI design
                     </h4>

                     <p>
                        <b>Accessibility and Inclusivity: </b>
                        Ensuring a fluent experience for everyone, we create
                        interfaces accessible to all, making technology
                        inclusive.
                     </p>

                     <p>
                        <b>User Feedback Integration: </b>
                        Embracing feedback, we encourage users to share
                        experiences, refining and improving the design
                        continually.
                     </p>

                     <p>
                        <b>Rapid Prototyping: </b>
                        Prioritizing quick iterations, we use rapid prototyping
                        for fast idea testing, ensuring swift progress and
                        adaptability.
                     </p>

                     <p>
                        <b>Cross-Platform Consistency: </b>
                        Maintain brand and design consistency across platforms,
                        from websites to apps, ensuring a seamless user
                        experience.
                     </p>

                     <p>
                        <b>Data-Driven Design: </b>
                        Utilize data for informed decisions, aligning design
                        choices with user preferences through analytics and
                        behavior analysis.
                     </p>
                     <p>
                        <b>Responsive Design Best Practices: </b>
                        Follow the latest trends, ensuring your product not only
                        adapts to different screens but offers an excellent user
                        experience.
                     </p>
                     <p>
                        <b>Content Strategy: </b>
                        Beyond visuals, we organize and present content in a
                        user-friendly way, ensuring effective communication.
                     </p>
                     <p>
                        <b>Wireframing and Information Architecture: </b>
                        Plan information flow with wireframes, creating a
                        blueprint before detailed design, like constructing a
                        building.
                     </p>
                     <p>
                        <b>Ongoing Support: </b>
                        It doesn't end with design; we provide continuous
                        support and guidance as your digital product evolves.
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
                                 Craft seamless experiences with user-centric
                                 design, ensuring intuitive navigation and
                                 interactions that align with your audience's
                                 expectations.
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
                                 Our designs adapt flawlessly across devices,
                                 offering a consistent and visually appealing
                                 interface, enhancing brand coherence and user
                                 engagement.
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
                                 Elevate your brand aesthetics with visually
                                 polished designs. Our team pays meticulous
                                 attention to detail, ensuring a professional
                                 and visually striking digital presence.
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
                                 Leverage our designers' expertise in tools like
                                 Sketch, Adobe XD, and Figma. We create cool
                                 graphics, optimize images, and use CSS to make
                                 your product not only look awesome but work
                                 flawlessly.
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
