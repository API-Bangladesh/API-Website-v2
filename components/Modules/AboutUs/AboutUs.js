import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import LoopItems from "./LoopItems";

const AboutUs = () => {
   return (
      <>
         <section id="aboutUs" className="section_padding">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-md-12 col-lg-6 col-xl-7">
                     <SectionTitle titleUpDown="Who we are" />
                     <div className="aboutDetailsBox">
                        <h2 className="text-capitalize about-header mb-3 position-relative">
                           we are digital <br /> transformation experts
                        </h2>
                        <p className="aboutDetails pt-4 mb-4">
                           API Solutions is a software development company,
                           specializing in cost-effective rapid prototyping,
                           full-cycle software development, testing/QA,
                           sustaining existing software, supporting
                           infrastructure and AI-based IoT product development.
                        </p>
                        <p className="aboutDetails">
                           We have a team of experts in various fields including
                           AWS Solution Architects, Software
                           Architects/Analysts, Software Project Managers,
                           Software Engineers, QA Engineers and IT Engineers. We
                           offer tailored solutions to individual customer
                           needs, whether at the Primary, Medium, Built, or
                           post-Built stage, with a focus on care, dedication,
                           and sincerity.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-5">
                     <div className="svgBox">
                        <LoopItems />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutUs;
