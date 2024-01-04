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
                           <h3>Tailored Solutions</h3>
                           <p>
                              Crafting bespoke applications, we align
                              development with your unique needs, ensuring
                              seamless functionality and a personalized user
                              experience.
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
                              From iOS to Android, our developers possess
                              cross-platform mastery, delivering applications
                              that seamlessly operate across diverse devices and
                              ecosystems.
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
                              Prioritizing user experience, our applications
                              boast intuitive interfaces, enhancing usability
                              and ensuring optimal engagement for your target
                              audience.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                        
                           <h3>Scalability and Performance</h3>
                           <p>
                              Our development process emphasizes scalability,
                              guaranteeing your application can grow with your
                              business while maintaining optimal performance in
                              any operational context.
                           </p>
                           </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Security and Compliance</h3>
                           <p>
                              Integrating robust security measures, we
                              prioritize the protection of user data and ensure
                              compliance with industry regulations, fostering
                              trust in your digital solutions.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12}>
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Agile Development Methodology</h3>
                           <p>
                              Embracing an agile approach, our development team
                              adapts swiftly to changes, ensuring a responsive
                              and dynamic development process that aligns with
                              evolving business needs.
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
