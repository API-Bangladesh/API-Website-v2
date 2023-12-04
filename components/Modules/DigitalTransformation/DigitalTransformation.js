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
                     <Col lg={6} md={6}>
                        <div className="servicesBox position-relative">
                           <h3>Strategic Vision</h3>
                           <p>
                              We help you define a clear and ambitious vision
                              for your digital future. Our team collaborates
                              with your stakeholders to set measurable goals and
                              establish the roadmap for achieving them.
                           </p>
                           <div className="serIconBox">
                              <IoCodeSlash />
                           </div>
                        </div>
                     </Col>
                     <Col lg={6} md={6}>
                        <div className="servicesBox position-relative">
                           <h3>Customer-Centric Solutions</h3>
                           <p>
                              Understanding your customers is paramount. We
                              leverage data analytics and user research to
                              develop customer-centric digital solutions that
                              enhance engagement, satisfaction, and loyalty.
                           </p>
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                        </div>
                     </Col>
                     <Col lg={6} md={6}>
                        <div className="servicesBox position-relative">
                           <h3>Process Optimization</h3>
                           <p>
                              Streamlining workflows and automating repetitive
                              tasks can significantly boost efficiency. We
                              identify areas for process optimization, enabling
                              you to do more with fewer resources.
                           </p>
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                        </div>
                     </Col>
                     <Col lg={6} md={6}>
                        <div className="servicesBox position-relative">
                           <h3>Data-Driven Insights</h3>
                           <p>
                              Harnessing the power of data unlocks a wealth of
                              insights. Our data experts implement robust
                              analytics and reporting systems, empowering you to
                              make data-driven decisions with confidence.
                           </p>
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                        </div>
                     </Col>
                     <Col lg={6} md={6}>
                        <div className="servicesBox position-relative">
                           <h3>Agile Development</h3>
                           <p>
                              To stay competitive, businesses must adapt
                              quickly. Our agile development approach ensures
                              rapid deployment and continuous improvement of
                              digital solutions, keeping you ahead of the curve.
                           </p>
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                        </div>
                     </Col>
                     <Col lg={6} md={6}>
                        <div className="servicesBox position-relative">
                           <h3>Cybersecurity and Compliance</h3>
                           <p>
                              With digital advancements come new security
                              challenges. We prioritize data protection and
                              compliance, safeguarding your assets, and ensuring
                              regulatory adherence.
                           </p>
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
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
