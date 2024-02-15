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
                     AWS Cloud Solutions
                  </h1>

                  <div className="textImgBox">
                     <div className="curve">
                        <img src={"/innerPaageImg/7.webp"} alt="img" />
                     </div>

                     <p>
                     We're committed to delivering AWS cloud solutions that empower your business to thrive in the digital age. Our proficiency in cloud migration, cloud-to-on-premises transition, and system design distinguishes us as your reliable partner in cloud technology. Here's a short glimpse of our offered expertise.
                     </p>

                     <h4>Cloud Migration</h4>
                     <p>
                     Achieve enhanced scalability, efficiency, and cost savings with our mastery of cloud migration. Our team of seasoned experts specializes in the smooth transition of your on-premises infrastructure to AWS, ensuring minimal impact on your daily operations. We leverage advanced techniques and industry best practices to proficiently manage data transfer, fortify security, and optimize your system.
                     </p>

                     <h4>Cloud-to-On-Premises Migration</h4>
                     <p>
                     For some organizations, a hybrid approach is ideal. We understand that not all workloads can be fully migrated to the cloud, which is why we specialize in cloud-to-on-premises migration. This approach allows you to maintain essential on-site infrastructure while taking advantage of cloud services. This approach ensures a unified and efficient operation, allowing you to utilize the advantages of both on-premises and cloud environments.
                     </p>

                     <h4>System Design</h4>
                     <p>
                     A robust cloud solution starts with a well-designed system architecture. Our system architects create customized designs aligning with your business goals. Ensuring a seamless blend with your requirements, we lay the foundation for a future-ready and efficient cloud ecosystem.
                     </p>

                  </div>

                  <div className="roleProfile">
                     <Row>
                        <Col lg={8} md={8}>
                           <div className="leftContent position-relative h-100">
                              <h3 className="fw-light lh-sm">
                                 Thrive in the digital landscape with our
                                 commitment to excellence and expertise. Unlock
                                 your business potential through our technical
                                 prowess, industrial expertise, and unwavering
                                 commitment. Start your confident cloud
                                 journey-contact us today.
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
                                 src={"/our-services-avatar/7.svg"}
                                 alt="img"
                              />

                              <div className="proDesignation text-start">
                                 <h3 className="mb-1">DevOps Engineer</h3>
                                 {/* <p className="mb-0">UX / UI Designer</p> */}
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>

                  <div className="someServices mt-5 mb-5">
                     <h1 className="servicesTitle text-center pt-5 mb-5">
                        The Significance of Cloud Solutions
                     </h1>
                     <Row className="g-5">
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={"/innerPaageImg/icon/DesignResearch.svg"}
                                 alt="img"
                              />
                              <h3>Scalability</h3>
                              <p>
                              Effortlessly adapt to business growth with systems that scale dynamically, ensuring seamless performance amid fluctuating workloads.
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
                              <h3>Security</h3>
                              <p>
                                 Relentless measures safeguard your data and applications, meeting industry standards to shield against potential threats and ensure compliance.
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
                              <h3>Performance Optimization</h3>
                              <p>
                                 Maximize efficiency and cost-effectiveness by fine-tuning your system for peak performance, ensuring optimal cost-to-output ratios.
                              </p>
                           </div>
                        </Col>
                        <Col lg={6} md={6}>
                           <div className="servicesBox position-relative">
                              <img
                                 className="servicesImg"
                                 src={
                                    "/innerPaageImg/icon/PostLaunchDesignOptimization.svg"
                                 }
                                 alt="img"
                              />
                              <h3>Disaster Recovery and Cost Efficiency</h3>
                              <p>
                                 Concentrated disaster recovery solutions guarantee business continuity while our cost management expertise ensures budget-friendly resource utilization.
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
