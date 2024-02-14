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
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                        <div className="serIconBox">
                              <IoCodeSlash />
                           </div>
                           <h3>Tailored Apps</h3>
                           <p>
                           We create custom apps tailored to your specific needs, ensuring seamless functionality and a personalized user experience.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>Cross-Platform Proficiency</h3>
                           <p>
                           From iOS to Android, our developers have mastered cross-platform skills to deliver apps that work flawlessly across devices.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>User-Centric Design</h3>
                           <p>
                           We prioritize intuitive interfaces that enhance usability and engagement for your audience.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                        
                           <h3>Scalability and Speed</h3>
                           <p>
                           Our process emphasizes building apps that can scale with your business while maintaining optimal speed.
                           </p>
                           </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Secure and Compliant</h3>
                           <p>
                           We integrate robust security and ensure compliance with industry regulations, fostering trust.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Agile Development</h3>
                           <p>
                           Our agile approach means we adapt quickly to changing needs for a responsive, dynamic development process.
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
