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
                           <h3>Continuous Monitoring</h3>
                           <p>
                              Employing advanced tools, we continuously monitor
                              the health and performance of your IT systems,
                              proactively identifying potential issues before
                              they escalate.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>Regular System Updates</h3>
                           <p>
                              In the dynamic tech landscape, staying updated is
                              crucial. We ensure your software, operating
                              systems, and security protocols receive regular
                              updates for peak performance and protection
                              against emerging threats.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>Performance Optimization</h3>
                           <p>
                              Conducting regular assessments, our team
                              fine-tunes your systems and networks, optimizing
                              efficiency and responsiveness.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                           <h3>Strategic IT Consultation</h3>
                           <p>
                              Beyond support and maintenance, we provide expert
                              IT consultation tailored to align with your
                              business goals and budget, empowering informed
                              technology infrastructure decisions.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Efficient Remote Support</h3>
                           <p>
                              Leveraging remote capabilities, we swiftly
                              troubleshoot and resolve IT issues, offering quick
                              assistance regardless of your business's location,
                              enhancing efficiency without the need for on-site
                              visits.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Proactive Network Management</h3>
                           <p>
                              Our skilled professionals monitor your network
                              continuously, ensuring optimal performance,
                              security, and stability. We proactively identify
                              potential issues, taking preventive measures to
                              maintain uninterrupted operations.
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
