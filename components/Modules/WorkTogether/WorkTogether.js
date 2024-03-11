import React from "react";
import Image from 'next/image'
import SectionTitle from "../Section_title/Section_title";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const WorkTogether = () => {
   return (
      <>
         <section id="workTogether" className="section_padding">
            <SectionTitle titleUpDown="Let's Work Together" />
            <Container>
               <Row>
                  <Col lg={7} md={7} className="px-0 workTogetherCol">
                     <div
                        className="d-flex justify-content-center align-items-center touch_main_dtn position-relative"
                        style={{ height: "300px" }}
                     >
                        <Image
                          fill={true} 
                           src="/plan.png"
                           alt="plan"
                           className="work_together"
                        />
                        <h1 className="text-capitalize work_title">
                           Let’s work
                           <br />
                           together
                        </h1>
                     </div>
                  </Col>
                  <Col lg={5} md={5} className="workTogetherCol">
                     <div
                        className="d-flex justify-content-center align-items-center position-relative touch_main_div"
                        style={{ height: "300px" }}
                     >
                        <Link href="/contact-us">
                           <div className="get_in_touch">
                              <h2 className="get_in_touch_bg position-relative text-capitalize mb-0">
                                 Get in touch
                              </h2>
                           </div>
                        </Link>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default WorkTogether;
