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

                  <div className="textImgBox position-relative">
                     <img
                        className="curve"
                        src={"/innerPaageImg/9.webp"}
                        alt="img"
                     />

                     <p>
                        We're not just service providers; we're your partners in
                        digital growth. Ready to tackle any challenge, explore
                        new avenues, embrace tech trends, or craft a customized
                        strategy for your business success. Meet our digital
                        marketing gurus, the backstage crew for your online
                        success. Our services cover.
                     </p>

                     <p>
                        <b>SEO Optimization: </b>
                        Fine-tune your website elements for higher search engine
                        visibility, focusing on organic search presence for
                        enhanced discoverability on Google.
                     </p>

                     <p>
                        <b>Social Media Management: </b>
                        Take charge of your social media game on Facebook,
                        Instagram, Twitter, and LinkedIn. We create engaging
                        content, chat with your audience, and run ads to spread
                        your message.
                     </p>

                     <p>
                        <b>PPC Advertising: </b>
                        Set up and manage Google Ads and social media ad
                        campaigns, ensuring you reach the right audience, paying
                        only for clicks.
                     </p>

                     <p>
                        <b>Content Marketing: </b>
                        Craft valuable blog posts, videos, and infographics to
                        connect and educate your audience, building long-term
                        relationships. Our skilled writers create high-quality,
                        SEO-friendly content committed to your success.
                     </p>

                     <p>
                        <b>Analytics and Reporting: </b>
                        Track your digital marketing progress with regular
                        reports, crunching numbers to make informed moves.
                     </p>
                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Empowering your business goals, we keep you
                                 ahead in the digital world. Elevate your
                                 digital marketing, optimize online presence,
                                 and explore new opportunities with our
                                 services. Contact us for all your digital
                                 needs.
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
                                 <h3 className="mb-1">Digital Marketing Manager</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        The Services You will get
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Strategic Campaigns</h3>
                              <p>
                                 Craft targeted and data-driven digital
                                 marketing campaigns to amplify brand
                                 visibility, engage the target audience, and
                                 drive conversions, ensuring a strategic
                                 approach aligned with business objectives.
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
                                 Leverage advanced analytics tools to glean
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
