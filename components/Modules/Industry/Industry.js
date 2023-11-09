import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
// import { BsArrowRight } from "react-icons/bs";
// import Link from "next/link";

const Industry = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
      <SectionTitle titleUpDown="Industries We Serve" />
      <div className="container">
        <p className="industry_text mb-5">
        At API Solutions, we take pride in delivering smart tech solutions to various industries. Here are the industries we proudly serve.
        </p>
      </div>

      <section id="industry" className="industry-bg">
        <Container fluid className="p-0">
          <div className="industry_bg_img">
            <Slider {...settings}>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Tourism & Hospitality
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Elevate guest experiences in the hospitality industry
                      through our technology solutions, encompassing website
                      development and seamless integration of IoT applications.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Retail & E-commerce
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Strengthen your online presence and deliver a seamless
                      shopping experience through our expert website and web
                      application development services.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      ICT
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Collaborate with us to spearhead innovation in the rapidly
                      evolving ICT industry, as we develop pioneering digital
                      solutions to keep you at the forefront of technological
                      advancement.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      NGO
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Fortify your NGO's data security and humanitarian efforts
                      with our expertise in cloud computing and cyber security.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Healthcare & Pharmaceuticals
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Safeguard sensitive data and ensure regulatory compliance
                      within the healthcare sector through our secure data
                      management solutions, enabling you to prioritize patient
                      care excellence.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      FMCG
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Drive sales growth and amplify customer engagement with
                      our tailor-made mobile app development solutions catering
                      to the unique demands of the FMCG sector.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      SME
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Leverage our tailored IT solutions to drive growth,
                      adaptability, and success in the fiercely competitive
                      business frame for SMEs.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Club & Association
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Bolster member interaction and communication with our
                      bespoke IT solutions, precisely designed to address the
                      specific requirements of clubs and associations.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Sports
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Engage your fan base, streamline event management, and
                      amplify your sports brand with our profound expertise in
                      mobile app development, delivering flawless experiences
                      for sports enthusiasts.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Non-Profit Organizations
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Experience seamless digital infrastructure management for
                      your noble causes with our comprehensive IT Managed
                      Services, enabling your organization to focus on achieving
                      positive social impact.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Real Estate
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Maximize property management efficiency through the
                      integration of our Enterprise Resource Planning (ERP) and
                      Internet of Things (IoT) solutions, which are
                      custom-tailored for the real estate sector. Elevate
                      service quality and cater to clients more effectively.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      RMG
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Enhance operational efficiency and optimize supply chain
                      management within the garment industry, leveraging our
                      specialized IT services to boost productivity.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Supply Chain
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Optimize supply chain operations and ensure efficient
                      logistics management with our specialized IT solutions,
                      enhancing coordination and streamlining processes.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Chemical
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Enhance chemical process optimization and regulatory
                      compliance by employing our digital solutions specially
                      designed for the chemical industry.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="main_card">
                <Card className="rounded-0 border-0 card_one position-relative">
                  <Card.Body className="card_body px-4">
                    <Card.Title className="text-capitalize text-light garments_title pb-4">
                      Handicrafts
                    </Card.Title>
                    <Card.Text className="text-capitalize text-light line_show pb-3">
                      Showcase the distinctiveness of your craftsmanship
                      worldwide with our website and web application development
                      services, ensuring an appealing online presence.
                    </Card.Text>
                    {/* <Link
                      href="/"
                      className="border-0 ps-0 pt-3 learn_more d-flex align-items-center"
                    >
                      <p className="pe-2 m-0 text-white">Learn more</p>
                      <BsArrowRight className="fs-5" />
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
              
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Industry;
