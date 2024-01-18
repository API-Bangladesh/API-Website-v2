import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import { BiCloudLightning } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { FaCodeCommit } from "react-icons/fa6";
import { SiCodereview } from "react-icons/si";
import { BiBulb } from "react-icons/bi";
import { BiChip } from "react-icons/bi";

const InnerPage = () => {
   return (
      <>
         <section id="innerPage" className="section_padding">
            <Container>
               <div className="digitalTransformation mb-5 mt-5">
                  <Row className="g-5">
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <IoCodeSlash />
                           </div>
                           <h3>End-to-End Solutions</h3>
                           <p>
                              We specialize in providing end-to-end IoT
                              solutions, from concept development to deployment
                              and ongoing support. Our comprehensive approach
                              ensures seamless integration and effective
                              implementation.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>IoT Platform Development</h3>
                           <p>
                              Our skilled team is well-versed in building robust
                              and scalable IoT platforms that facilitate data
                              collection, analysis, and management, empowering
                              businesses with real-time intelligence.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>Device Integration</h3>
                           <p>
                              We integrate diverse IoT devices and sensors,
                              enabling seamless communication and data exchange
                              while ensuring compatibility and security.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                           <h3>Data Analytics and Visualization</h3>
                           <p>
                              With a focus on extracting valuable insights, we
                              employ advanced data analytics and visualization
                              techniques to help businesses make informed
                              decisions and optimize operations.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Security and Privacy</h3>
                           <p>
                              Our IoT solutions prioritize the highest standards
                              of security and privacy, implementing measures to
                              safeguard data and devices against potential
                              threats.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>IoT and Cloud Integration</h3>
                           <p>
                              We seamlessly integrate IoT solutions with cloud
                              platforms, enabling data storage, processing, and
                              accessibility with enhanced reliability and
                              scalability.
                           </p>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </section>
      </>
   );
};

export default InnerPage;
