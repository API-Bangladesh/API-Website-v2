import Link from "next/link";
import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Container, Row, Col } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import Card from "react-bootstrap/Card";
import { FiArrowRight } from "react-icons/fi";

const BlogPage = () => {
  return (
    <>
      <section className="section_padding">
        <SectionTitle titleUpDown="Our Blogs" />
        <Container>
          <Row>
            <Col lg={3} md={4} sm={6} className="pb-4">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize pb-2 m-0">analysis & design</p>
                  <Link
                    href="#analysis_design"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pb-3">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize blog_btn_title pb-2 m-0">cloud</p>
                  <Link
                    href="#cloud_design"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pb-3">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize blog_btn_title pb-2 m-0 ">
                    Data solution
                  </p>
                  <Link
                    href="#data_solution"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pb-3">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize blog_btn_title pb-2 m-0">IT news</p>
                  <Link
                    href="#it_news"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pb-3">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize blog_btn_title pb-2 m-0">
                    project management
                  </p>
                  <Link
                    href="#project_management"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pb-3">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize blog_btn_title pb-2 m-0">
                    security
                  </p>
                  <Link
                    href="#security"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pb-3">
              <div className="blog_one ps-3 shadow d-flex align-items-center">
                <div className="">
                  <p className="text-capitalize blog_btn_title pb-2 m-0">
                    software management
                  </p>
                  <Link
                    href="#software_development"
                    className="d-flex align-items-center justify-content-between analysis_design_btn"
                  >
                    <span className="text-capitalize ms-3 design_btn_text">
                      read more
                    </span>
                    <GoArrowRight className="me-3 design_btn_icon" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* analysis design */}
      <section id="analysis_design " className="section_padding_bottom">
        <SectionTitle titleUpDown="analysis & design" />

        <Container>
          <Row>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
           
          </Row>
        </Container>
      </section>
      {/* Cloud design */}
      <section id="cloud_design" className="section_padding_bottom">
        <SectionTitle titleUpDown="Cloud" />
        <Container>
          <Row>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Data solution design */}
      <section id="data_solution" className="section_padding_bottom">
        <SectionTitle titleUpDown="Data solution" />
        <Container>
          <Row>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* IT news design */}
      <section id="it_news" className="section_padding_bottom">
        <SectionTitle titleUpDown="Data solution" />
        <Container>
          <Row>
          <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project management design */}
      <section id="project_management" className="section_padding_bottom">
        <SectionTitle titleUpDown="Data solution" />
        <Container>
          <Row>
          <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* security design */}
      <section id="security" className="section_padding_bottom">
        <SectionTitle titleUpDown="Data solution" />
        <Container>
          <Row>
          <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* software development design */}
      <section id="software_development" className="section_padding_bottom">
        <SectionTitle titleUpDown="Data solution" />
        <Container>
          <Row>
          <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <Link href="">
                <Card className="rounded-3 card_border">
                  <Card.Img
                    variant="top"
                    src="/coreValue2.jpg"
                    className="rounded-0 blog_card_img"
                  />

                  <Card.Body className="p-3">
                    <Card.Title className="text-capitalize text-dark">
                      event Title
                    </Card.Title>
                    <Card.Text>
                      <p className="text-justify text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-4 ">
                        {/* <div className=" pt-3"> */}
                        <p className="fw-semibold card_date m-0">
                          {" "}
                          Date : 01-01-2023
                        </p>

                        <FiArrowRight size={"20px"} className=" card_date" />
                        {/* </div> */}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
