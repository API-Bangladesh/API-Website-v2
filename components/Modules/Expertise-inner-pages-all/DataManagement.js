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
                           <h3>Data Integration Mastery</h3>
                           <p>
                           We know how to seamlessly bring all your different data sources together so you can get the full picture. Our integration expertise delivers smooth data flow for those critical holistic insights.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <FaCodeCommit />
                           </div>
                           <h3>Efficient Data Storage Solutions</h3>
                           <p>
                           We implement robust systems to keep your data safe but still readily accessible when you need it. You can trust us to maintain data integrity and availability. You know it's crucial for operations!
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <SiCodereview />
                           </div>
                           <h3>Streamlined Data Processing</h3>
                           <p>
                           Navigate complex data processing with ease. Our advanced tools and algorithms ensure efficient processing, transforming raw data into actionable insights for your business.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiBulb />
                           </div>
                           <h3>Comprehensive Data Security</h3>
                           <p>
                              We prioritize data security at every level. Our
                              measures include encryption, access controls, and
                              regular audits to safeguard your sensitive
                              information against unauthorized access or
                              breaches.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiChip />
                           </div>
                           <h3>Data Quality Assurance</h3>
                           <p>
                           Garbage data leads to rubbish decisions, so we take care to ensure accuracy and reliability. Our QA process flags inconsistencies so we can fix them fast. You can be confident the data guiding your choices is solid.
                           </p>
                        </div>
                     </Col>
                     <Col lg={6} md={12} sm={12} >
                        <div className="servicesBox position-relative">
                           <div className="serIconBox">
                              <BiCloudLightning />
                           </div>
                           <h3>Data Governance Expertise</h3>
                           <p>
                              We establish robust data governance frameworks,
                              ensuring compliance and ethical use. Our expertise
                              in regulatory standards guarantees that your data
                              management aligns with industry best practices and
                              legal requirements.
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
