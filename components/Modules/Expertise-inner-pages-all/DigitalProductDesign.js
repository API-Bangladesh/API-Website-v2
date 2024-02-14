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
                           Our approach begins with a strategic vision, aligning your business goals with innovative digital designs that resonate with your target audience.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>Getting to Know Your Users</h3>
                           <p>
                           We'll dive deep into understanding who your users are and what matters most to them through comprehensive research. This ensures we design products that truly resonate.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>Brainstorming and Testing Concepts</h3>
                           <p>
                           Our team will brainstorm and prototype core features, collaborating together to shape experiences that align seamlessly with functionality. Testing concepts early allows us to validate that designs are on the right track.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                           <h3>Crafting Appealing and Aligned Visuals</h3>
                           <p>
                           With an eye for aesthetics, we'll meticulously craft visually appealing designs where each element aligns with and brings out the best in your brand. The result is an experience users simply delight in.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Bringing Ideas to Life Interactively</h3>
                           <p>
                           We'll build clickable prototypes that capture the product's flow and functionality. This allows you to visually walk through designs, ensuring they map to users' needs.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Refining the Details</h3>
                           <p>
                           Through iterative user testing and feedback, we'll continue refining designs until they're just right. Once complete, we'll deliver polished assets and work closely to ensure a smooth implementation that sets you up for ongoing success.
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
