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
                  <h1 className="roleTitle text-capitalize">Creative Design</h1>

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/8.webp"}
                        alt="img"
                     />

                     <p>
                        We know first impressions matter, and our Creative
                        Design service is about nailing that first impression.
                        We'll ensure your digital presence is visually stunning
                        and highly functional, meeting industry standards and
                        your unique brand identity. We, as a team, excel to
                        combine functionality with aesthetics. We help you
                        closely understand the brand and audience.
                     </p>

                     <h4 className="d-block my-2">What Sets Us Apart?</h4>

                     <p>
                        Our creative design team specializes in crafting
                        visually stunning materials that effectively communicate
                        your brand story. We collaborate closely to understand
                        your target audience, competitive landscape, and core
                        messaging. Our services span logo creation,
                        illustration, packaging, print publications, digital
                        ads, and complete integrated campaigns. Our designers
                        artfully blend aesthetics and functionality so your
                        collateral not only looks stunning but also effectively
                        informs, engages, and converts.
                     </p>

                     <h4>How Do We Perceive Creative Design?</h4>

                     <p>
                        We look at creative design like giving brands a face, a
                        personality, and visual language customers instantly
                        recognize. We try to create designs that connect on an
                        emotional level. We believe your audience becomes
                        immersed in your brand narrative as a result of
                        emotional attachment. Just share your business concept
                        and we'll make the best possible presence for your
                        business on the Internet. We hope you won't mind having
                        a bunch of talented artists to draw your business
                        digitally!
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 You're in the right spot if you want to see
                                 your digital creations fulfilled. We're here to
                                 help you make your ideas a reality in a way
                                 that will surprise others. Let's get started!
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
                                 src={"/our-services-avatar/3.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">Visualizer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        How Creative Design Enhances Business Success (The
                        Titles Need to Be Changed)
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Branding and Identity</h3>
                              <p>
                              We assist in giving your brand its own special identity. Developing an attractive logo and using shades that complement it are two essential steps in this process.
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
                              <h3>Graphic Design</h3>
                              <p>
                              We guarantee that your graphics, images, and visual elements are of the highest quality, making your content stand out.
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
                              <h3>Prototyping</h3>
                              <p>
                              Before diving into the deep end, we create prototypes to give you a feel for what the final product will be like. It's like a sneak peek to make sure we're on the right track.
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
                              <h3>Responsive Design</h3>
                              <p>
                              In today's digital age, your design needs to look fantastic on all devices, from desktop computers to mobile phones. We ensure that your design adapts to different screen sizes flawlessly.
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
