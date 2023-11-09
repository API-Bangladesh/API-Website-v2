import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="section_padding services_bg">
        <SectionTitle titleUpDown="Pricing" />
        <Container>
          <Row className="">
            <Col lg={4} md={6} className="mb-4 p-0">
              <div className="mx-4">
                <Card className="p-4 multi_color_border">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="../OurService/1.png"
                        alt="time"
                        width={70}
                        height={70}
                        className="img-fluid clock_img"
                      />
                      <Card.Title className="m-0 pricing_title fw-bold ps-3">
                        Large-scale projects
                      </Card.Title>
                    </div>
                    <div className="border-bottom border-white">
                      <p className="fw-bold pt-2 m-0 text-capitalize">
                        Pricing Model :
                      </p>
                      <p className="dedicated_team pb-2 m-0">Dedicated team</p>
                    </div>
                    <div className="border-bottom border-white">
                      <p className="fw-bold pt-2 text-capitalize m-0">terms :</p>
                      <p className="dedicated_team pb-2 m-0">9+</p>
                    </div>
                    <div className="">
                      <p className="fw-bold pt-2 text-capitalize m-0">
                        team size :
                      </p>
                      <p className="dedicated_team pb-2 m-0">
                        More than 8 specialists
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 p-0">
              <div className="mx-4">
                <Card className=" p-4 multi_color_border">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="../OurService/2.png"
                        alt="time"
                        width={70}
                        height={70}
                        className="img-fluid clock_img"
                      />
                      <Card.Title className="m-0 pricing_title fw-bold ps-3">
                        Mid-scale projects
                      </Card.Title>
                    </div>
                    <div className="border-bottom border-white">
                      <p className="fw-bold pt-2 text-capitalize m-0">
                        Pricing Model :
                      </p>
                      <p className="dedicated_team pb-2 m-0">Time-and-Material</p>
                    </div>
                    <div className="border-bottom border-white">
                      <p className="fw-bold pt-2 text-capitalize m-0">terms :</p>
                      <p className="dedicated_team pb-2 m-0">4-6 months</p>
                    </div>
                    <div className="">
                      <p className="fw-bold pt-2 text-capitalize m-0">
                        team size :
                      </p>
                      <p className="dedicated_team pb-2 m-0">3-7 specialists</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 p-0">
              <div className="mx-4">
                <Card className=" p-4 multi_color_border ">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="../OurService/3.png"
                        alt="time"
                        width={70}
                        height={70}
                        className="img-fluid clock_img"
                      />
                      <Card.Title className="m-0 pricing_title fw-bold ps-3">
                        Small-scale projects
                      </Card.Title>
                    </div>
                    <div className="border-bottom border-white">
                      <p className="fw-bold pt-2 text-capitalize m-0">
                        Pricing Model :
                      </p>
                      <p className="dedicated_team pb-2 m-0">Fixed Price</p>
                    </div>
                    <div className="border-bottom border-white">
                      <p className="fw-bold pt-2 text-capitalize m-0">terms :</p>
                      <p className="dedicated_team pb-2 m-0">1-3 months</p>
                    </div>
                    <div className="">
                      <p className="fw-bold pt-2 text-capitalize m-0">
                        team size :
                      </p>
                      <p className="dedicated_team pb-2 m-0">1-2 specialist</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
