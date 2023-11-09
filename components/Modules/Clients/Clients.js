import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const Clients = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="clients" className="section_padding clients mb-5">
        <SectionTitle titleUpDown="Our Clients" />
        <Container>
          <Row>
            <Col lg={7} md={6}>
              <div>
                <p className="trusted_by fw-semibold pb-3">Trusted by</p>
                 <p>We pride ourselves on contributing to our client's success and
                  building long-term, trusted relationships with them. Most of
                  our enterprise clients are still with us and have worked with
                  us for years.</p>
              </div>
            </Col>

            <Col lg={5} md={6}>
              <Slider {...settings}>
                <div className="clientsBox">
                  <div className="row g-0">
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/IFAD-Autos.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/IFAD-Motors.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/travelworld.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/thamesoptic.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/insignia.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/Picture13.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                  </div>
                </div>

                <div>
                  <div className="row">
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/tangontravels.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/bcb.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/tennis.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/muslim.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/Picture1.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/Picture01.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                  </div>
                </div>


                <div>
                  <div className="row">
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                          src="/Clients_logo/IFAD-ESHOP-Logo.png"
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4 for_responsive">
                      <div className="client_logos d-flex justify-content-end">
                        <img
                        src="/Clients_logo/IFAD-Multi-Products.png"
                          
                          alt=""
                          className="logo_size img-fluid"
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
