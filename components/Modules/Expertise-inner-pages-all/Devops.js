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
                           <h3>Continuous Integration and Deployment</h3>
                           <p>
                              Streamlining development processes, we implement
                              continuous integration and deployment practices,
                              facilitating rapid and reliable software releases.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>Automated Testing Solutions</h3>
                           <p>
                              Our DevOps approach includes automated testing
                              solutions, ensuring the delivery of high-quality
                              software by detecting and addressing issues early
                              in the development cycle.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>Infrastructure as Code (IaC)</h3>
                           <p>
                              Leveraging Infrastructure as Code principles, we
                              automate infrastructure management, enhancing
                              scalability, and ensuring consistency across
                              development and deployment environments.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                           <h3>Collaborative Culture</h3>
                           <p>
                              Fostering a collaborative culture, our DevOps
                              strategy bridges the gap between development and
                              operations teams, promoting communication, and
                              accelerating the software delivery pipeline.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Monitoring and Analytics</h3>
                           <p>
                              We integrate robust monitoring and analytics tools
                              to provide real-time insights into application
                              performance, enabling proactive issue resolution
                              and optimization of system efficiency.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Security Integration</h3>
                           <p>
                              Our DevOps practices prioritize security
                              integration throughout the development lifecycle,
                              implementing measures to identify and address
                              security vulnerabilities at every stage of the
                              process.
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
