import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../Section_title/Section_title";

const ClientReview = () => {
   return (
      <>
         <section id="clientsReview" className="section_padding">
            <SectionTitle titleUpDown="Clients Review" />
            <div className="clients_review">
               <Carousel fade pause="false">
                  <Carousel.Item>
                     <Container>
                        <Row>
                           <Col lg={5} md={5}>
                              <div className="d-flex align-items-center justify-content-center img_sec_height">
                                 <div className="client_img_bg rounded-pill d-flex justify-content-center align-items-center">
                                    <Image
                                       width={200}
                                       height={200}
                                       src="/Clients_logo/Picture9.png"
                                       alt=""
                                       className="client_img"
                                    />
                                 </div>
                              </div>
                           </Col>
                           <Col lg={7} md={7}>
                              <div className="align-items-center sec_height">
                                 <Image
                                    width={100}
                                    height={85}
                                    src="/commentimg.png"
                                    alt="img"
                                    className="Commentimg"
                                 />
                                 <p className="commentText pe-5 pb-4">
                                    API team have tremendous know how in
                                    building extensive web application.The
                                    project has been being implemented in close
                                    cooperation and we have influence on the
                                    project progress.
                                 </p>
                                 <div className="border-start border-2 border-w-2 border-secondary mt-3 review_person">
                                    <p className="client_name text-capitalize ps-3 mb-0">
                                       Md. Habibur Rahman
                                    </p>
                                    <p className="client_de text-capitalize text-muted ps-3 mb-0">
                                       Group Head of Information Technology
                                    </p>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Container>
                  </Carousel.Item>
                  <Carousel.Item>
                     <Container>
                        <Row>
                           <Col lg={5} md={5}>
                              <div className="d-flex align-items-center justify-content-center img_sec_height">
                                 <div className="client_img_bg rounded-pill d-flex justify-content-center align-items-center">
                                    <Image
                                       width={200}
                                       height={200}
                                       src="/Clients_logo/haefa.png"
                                       alt="img"
                                       className="client_img"
                                    />
                                 </div>
                              </div>
                           </Col>
                           <Col lg={7} md={7}>
                              <div className="align-items-center sec_height">
                                 <Image
                                    width={100}
                                    height={85}
                                    src="/commentimg.png"
                                    alt="img"
                                    className="Commentimg"
                                 />
                                 <p className="commentText pe-5 pb-4">
                                    We have been working with API SOLUTIONS for
                                    over a year now and have found them to be
                                    terrific Tech Partners. We will happly work
                                    with them again.
                                 </p>
                                 <div className="border-start border-2 border-w-2 border-secondary mt-3 review_person">
                                    <p className="client_name text-capitalize ps-3 mb-0">
                                       Mohammad Monjur Iqbal
                                    </p>
                                    <p className="client_de text-capitalize text-muted ps-3 mb-0">
                                       Senior Director, Strategic Planning and
                                       Communication
                                    </p>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Container>
                  </Carousel.Item>
                  <Carousel.Item>
                     <Container>
                        <Row>
                           <Col lg={5} md={5}>
                              <div className="d-flex align-items-center justify-content-center img_sec_height">
                                 <div className="client_img_bg rounded-pill d-flex justify-content-center align-items-center">
                                    <Image
                                       width={200}
                                       height={200}
                                       src="/Clients_logo/Picture01.png"
                                       alt="img"
                                       className="client_img"
                                    />
                                 </div>
                              </div>
                           </Col>
                           <Col lg={7} md={7}>
                              <div className="align-items-center sec_height">
                                 <Image
                                    width={100}
                                    height={85}
                                    src="/commentimg.png"
                                    alt="img"
                                    className="Commentimg"
                                 />
                                 <p className="commentText pe-5 pb-4">
                                    API team have tremendous know how in
                                    building extensive web application.The
                                    project has been being implemented in close
                                    cooperation and we have influence on the
                                    project progress.
                                 </p>
                                 <div className="border-start border-2 border-w-2 border-secondary mt-3 review_person">
                                    <p className="client_name text-capitalize ps-3 mb-0">
                                       Afshan Sattar
                                    </p>
                                    <p className="client_de text-capitalize text-muted ps-3 mb-0">
                                       Ganachery
                                    </p>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Container>
                  </Carousel.Item>
               </Carousel>
            </div>
         </section>
      </>
   );
};

export default ClientReview;
