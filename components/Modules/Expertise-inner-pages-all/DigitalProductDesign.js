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
                           <h3>Strategic Vision</h3>
                           <p>
                              Our approach begins with a strategic vision,
                              aligning your business goals with innovative
                              digital designs that resonate with your target
                              audience.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>In-Depth User-Centric Research</h3>
                           <p>
                              We conduct meticulous research into user
                              behaviors, preferences, and market trends to
                              inform our design process, ensuring products meet
                              and exceed user expectations.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>Conceptualization and Prototyping</h3>
                           <p>
                              Through brainstorming sessions and prototyping, we
                              breathe life into core product features,
                              validating concepts to guarantee seamless
                              alignment of design with functionality.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                           <h3>Aesthetic Precision</h3>
                           <p>
                              Meticulously crafting visually appealing designs,
                              our team ensures every element aligns with your
                              brand identity, delivering a user experience that
                              delights and engages.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Interactive Prototypes for User Validation</h3>
                           <p>
                              We build interactive prototypes, allowing for a
                              comprehensive visualization of the digital
                              product's flow and functionality, ensuring
                              user-centric design validation.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Iterative User Testing and Ongoing Support</h3>
                           <p>
                              Conducting iterative user testing sessions, we
                              refine designs based on valuable feedback. Upon
                              approval, we deliver finalized assets and provide
                              continuous support for a seamless implementation
                              process, fostering sustained success.
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
