import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../Section_title/Section_title";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";

const OurExpertise = () => {
   const [currentActiveKey, setCurrentActiveKey] = useState("1");

   return (
      <>
         <section id="ourExpertise" className="section_padding_top">
            <SectionTitle titleUpDown="Our Expertise" />

            <div className="container">
               <div className="expertiseItem d-none pt-4">
                  <Tab.Container
                     id="left-tabs-example"
                     defaultActiveKey="1"
                     activeKey={currentActiveKey}
                     onSelect={(key) => setCurrentActiveKey(key)}
                  >
                     <Row>
                        <Col sm={6} lg={5} xl={5}>
                           <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="1"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("1")
                                    }
                                 >
                                    1. Application Development
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="2"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("2")
                                    }
                                 >
                                    2. Digital Transformation
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="3"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("3")
                                    }
                                 >
                                    3. Business Analysis
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="4"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("4")
                                    }
                                 >
                                    4. Digital Product Design
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="5"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("5")
                                    }
                                 >
                                    5. Data Management
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="6"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("6")
                                    }
                                 >
                                    6. IoT
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="7"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("7")
                                    }
                                 >
                                    7. DevOps
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="8"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("8")
                                    }
                                 >
                                    8. IT Support & Maintenance
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </Col>
                        <Col sm={6} lg={7} xl={7}>
                           <Tab.Content>
                              <Tab.Pane eventKey="1">
                                 <Image
                                    src="/OurExpertise/ApplicationDevelopment.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    Rapid advancements in technology,
                                    particularly the growth of mobile devices
                                    and the Internet, have been a driving force
                                    behind the growth in application
                                    development. From social media platforms and
                                    Ecommerce websites to productivity tools and
                                    entertainment apps, the digital landscape is
                                    teeming with applications that cater to a
                                    variety of needs and interests.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="2">
                                 <Image
                                    src="/OurExpertise/DigitalTransformation.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    In today's rapidly evolving business
                                    landscape, staying ahead requires more than
                                    just incremental changes – it demands a
                                    complete shift in mindset and operations. At
                                    API Solutions, we empower businesses to
                                    embrace the future through our
                                    transformative Digital Transformation
                                    services.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="3">
                                 <Image
                                    src="/OurExpertise/BusinessAnalysis.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    We believe Business Analysis goes beyond
                                    just a service and acts as an important
                                    driver to foster innovation and lead
                                    transformational change. Our skilled team of
                                    business analysts is dedicated to dissecting
                                    complex business dynamics, identifying
                                    potential areas of progress, and formulating
                                    strategies that align technology with your
                                    overarching business objectives, through
                                    thorough data analysis and collaborative
                                    engagement with stakeholders. This ensures
                                    that your business can adapt to the
                                    competitive and changing environment.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="4">
                                 <Image
                                    src="/OurExpertise/DigitalProductDesign.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    We truly understand the game-changing impact
                                    of digital product design in shaping the
                                    boundaries of technology. Our highly
                                    committed crew of digital product designers
                                    brings a blend of creativity, technical
                                    expertise, and market knowledge to every
                                    single project. Our objective is to create
                                    high-level digital experiences that strike a
                                    chord with our clients and their specific
                                    target audiences. We work by understanding
                                    clients' holistic vision and continuously
                                    refining what they want in real value
                                    through end-to-end contributions.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="5">
                                 <Image
                                    src="/OurExpertise/DataManagement.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    We pioneer efficient data management
                                    solutions whether organizing, storing or
                                    interpreting data, our comprehensive
                                    solutions allow you to make informed choices
                                    and unlock valuable insights. Our dedicated
                                    services cover the entire spectrum of data
                                    management from collection to analysis and
                                    with our team of experts, we streamline your
                                    data processes to ensure accuracy, security
                                    and accessibility. We recognize the
                                    importance of data in today's business
                                    landscape. API Solutions' data management
                                    services give you a competitive edge and a
                                    strong foundation for building a resilient,
                                    data-driven business strategy from the
                                    ground up.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="6">
                                 <Image
                                    src="/OurExpertise/IoT.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    With our deep understanding of IoT, we
                                    create innovative solutions that utilize the
                                    potential of connected devices and
                                    data-driven insights.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="7">
                                 <Image
                                    src="/OurExpertise/DevOps.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    Our proficiency in DevOps allows us to
                                    streamline the development process, enhance
                                    collaboration, and accelerate software
                                    delivery. With a deep learning of
                                    industry-leading DevOps tools and
                                    methodologies, we enable continuous
                                    integration and continuous delivery (CI/CD)
                                    pipelines, ensuring faster and more reliable
                                    software releases. Our skilled team
                                    implements automated testing, deployment,
                                    and monitoring, resulting in reduced errors
                                    and increased efficiency.
                                 </p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="8">
                                 <Image
                                    src="/OurExpertise/ITSupportMaintenance.webp"
                                    alt="img"
                                    width={500}
                                    height={500}
                                 />
                                 <p className="py-3 text-justify">
                                    We understand the critical role that IT
                                    infrastructure plays in the smooth
                                    functioning of businesses. That's why we
                                    offer comprehensive IT Support & Maintenance
                                    services to ensure your systems operate at
                                    their best, allowing you to focus on your
                                    core business objectives.
                                 </p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Col>
                     </Row>
                  </Tab.Container>
               </div>
            </div>

            <div id="ourExpertisePhone">
               <div className="container">
                  <Accordion defaultActiveKey="1">
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>
                           1. Application Development
                        </Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/ApplicationDevelopment.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              Rapid advancements in technology, particularly the
                              growth of mobile devices and the Internet, have
                              been a driving force behind the growth in
                              application development. From social media
                              platforms and Ecommerce websites to productivity
                              tools and entertainment apps, the digital
                              landscape is teeming with applications that cater
                              to a variety of needs and interests.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header>
                           2. Digital Transformation
                        </Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/DigitalTransformation.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              In today's rapidly evolving business landscape,
                              staying ahead requires more than just incremental
                              changes – it demands a complete shift in mindset
                              and operations. At API Solutions, we empower
                              businesses to embrace the future through our
                              transformative Digital Transformation services.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="3">
                        <Accordion.Header>
                           3. Business Analysis
                        </Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/BusinessAnalysis.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              We believe Business Analysis goes beyond just a
                              service and acts as an important driver to foster
                              innovation and lead transformational change. Our
                              skilled team of business analysts is dedicated to
                              dissecting complex business dynamics, identifying
                              potential areas of progress, and formulating
                              strategies that align technology with your
                              overarching business objectives, through thorough
                              data analysis and collaborative engagement with
                              stakeholders. This ensures that your business can
                              adapt to the competitive and changing environment.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="4">
                        <Accordion.Header>
                           4. Digital Product Design
                        </Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/DigitalProductDesign.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              We truly understand the game-changing impact of
                              digital product design in shaping the boundaries
                              of technology. Our highly committed crew of
                              digital product designers brings a blend of
                              creativity, technical expertise, and market
                              knowledge to every single project. Our objective
                              is to create high-level digital experiences that
                              strike a chord with our clients and their specific
                              target audiences. We work by understanding
                              clients' holistic vision and continuously refining
                              what they want in real value through end-to-end
                              contributions.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="5">
                        <Accordion.Header>5. Data Management</Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/DataManagement.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              We pioneer efficient data management solutions
                              whether organizing, storing or interpreting data,
                              our comprehensive solutions allow you to make
                              informed choices and unlock valuable insights. Our
                              dedicated services cover the entire spectrum of
                              data management from collection to analysis and
                              with our team of experts, we streamline your data
                              processes to ensure accuracy, security and
                              accessibility. We recognize the importance of data
                              in today's business landscape. API Solutions' data
                              management services give you a competitive edge
                              and a strong foundation for building a resilient,
                              data-driven business strategy from the ground up.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="6">
                        <Accordion.Header>6. IoT</Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/IoT.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              With our deep understanding of IoT, we create
                              innovative solutions that utilize the potential of
                              connected devices and data-driven insights.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="7">
                        <Accordion.Header>7. DevOps</Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/DevOps.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              Our proficiency in DevOps allows us to streamline
                              the development process, enhance collaboration,
                              and accelerate software delivery. With a deep
                              learning of industry-leading DevOps tools and
                              methodologies, we enable continuous integration
                              and continuous delivery (CI/CD) pipelines,
                              ensuring faster and more reliable software
                              releases. Our skilled team implements automated
                              testing, deployment, and monitoring, resulting in
                              reduced errors and increased efficiency.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="8">
                        <Accordion.Header>
                           8. IT Support & Maintenance
                        </Accordion.Header>
                        <Accordion.Body>
                           <Image
                              className="img-fluid"
                              src="/OurExpertise/ITSupportMaintenance.webp"
                              alt="img"
                              width={500}
                              height={500}
                           />
                           <p className="py-3 text-justify">
                              We understand the critical role that IT
                              infrastructure plays in the smooth functioning of
                              businesses. That's why we offer comprehensive IT
                              Support & Maintenance services to ensure your
                              systems operate at their best, allowing you to
                              focus on your core business objectives.
                           </p>
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </div>
            </div>

            <div className="section-overlay shapeOpacity">
               <Image
                  id="CTA-0"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-cyan.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-1"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-blue.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-2"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-blue.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-3"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-cyan.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-4"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-blue.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-5"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-cyan.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-6"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-cyan.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-7"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-blue.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-8"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-orange.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
               <Image
                  id="CTA-9"
                  loading="lazy"
                  decoding="async"
                  src="/shape/cta-blue.svg"
                  alt="img"
                  width={100}
                  height={100}
               />
            </div>
         </section>
      </>
   );
};

export default OurExpertise;
