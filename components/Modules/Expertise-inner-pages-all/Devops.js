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
                           We bring development and operations together to release software fast without sacrificing quality. Our DevOps approach is all about speed, collaboration, and automation.
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
                           We implement continuous integration and deployment so you can rapidly release updates. Our automated testing solutions help detect bugs early when they're easiest to squash.
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
                           We utilize Infrastructure as Code to automate management, making scaling a breeze. Consistency across environments? API Solutions is here thanks to our expertise!
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
                           Our DevOps strategy gets dev and ops teams working closely together. This collaboration accelerates the delivery pipeline big time.
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
                           Plus, we integrate monitoring and analytics for real-time performance insights. That allows proactive optimizations to keep things running smoothly.
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
                           Security is top of mind too. We bake it into every stage of development to identify risks before they become headaches.
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
