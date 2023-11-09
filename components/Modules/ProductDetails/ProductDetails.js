import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiLinkAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";

const ProductDetails = () => {
  return (
    <>
      <section className="section_padding">
        <Container className="top_space">
          <Row>
            <Col lg={6}>
              <div className="product_details_text">
                <h1 className="text-capitalize fw-bold project_overview_title">
                  Project overview
                </h1>
                <p className="text-justify pt-5 pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link href="https://www.ifadmultiproducts.com/" className="fw-bold live_link" target="_blank">
                  <div className="d-flex align-items-center">
                    <BiLinkAlt size={"25px"} />
                    <p className="ps-2">ifad-multiproduct.com</p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <img
                  src="/Eshop-Logo.png"
                  alt=""
                  className="product_details_img mt-5"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="team_information border-top border-bottom py-3">
          <Row>
            <Col lg={4}>
              <div className="team_member d-flex align-items-center">
                <IoIosPeople size={"80px"} className="me-4 team_member_icon" />
                <div className="border_start ps-4 position-relative">
                  <p className="text-uppercase display-6 fw-bold"> team</p>
                  <p className="project_"> 4 membes</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="team_member d-flex align-items-center">
                <FaRegHandshake
                  size={"80px"}
                  className="me-4 team_member_icon"
                />
                <div className="border_start ps-4">
                  <p className="text-uppercase display-6 fw-bold"> client</p>
                  <p className="text-capitalize"> IFAD</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="team_member d-flex align-items-center">
                <RxStopwatch size={"80px"} className="me-4 team_member_icon" />
                <div className="border_start ps-4">
                  <p className="text-uppercase display-6 fw-bold"> duration</p>
                  <p className="project_"> 2 months</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mt-5">
          <img src="/product_details.jpeg" alt="" className="" />
        </div>
        <Container>
          <Row>
            <Col lg={6} className="p-0">
              <div className="responsive_img">
                <img src="/Zappix.png" alt="" />
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="responsive_img">
                <img src="/Zappix2.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
