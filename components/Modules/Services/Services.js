import Link from "next/link";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../Section_title/Section_title";
import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";


const Services = () => {
  const initialCardCount = 4;
  const additionalCardCount = 4;
  const [visibleCards, setVisibleCards] = useState(initialCardCount);
  const totalCards = 10;

  const cardData = [
   {
     title: "Custom Software Development",
     imageUrl: "/ourServicePhone-icon/customSoftwareDevelopment.svg",
     description:
       "Our team is comprised of passionate and skilled professionals who are committed to delivering excellence...",
     link: "/#",
   },
   {
     title: "Web App Development",
     imageUrl: "/ourServicePhone-icon/webAppDevelopment.svg",
     description:
       "API Solutions provides high-quality web application development services designed to suit your business requirements. Our skilled web developers utilize the latest technologies to create web apps that are scalable, responsive, and visually appealing, enhancing your online presence.",
     link: "/#",
   },
   {
     title: "Mobile App Development",
     imageUrl: "/ourServicePhone-icon/mobileAppDevelopment.svg",
     description:
       "Empower your business to connect with customers on the go through our exceptional mobile app development services. API Solutions is passionate about creating user-friendly, feature-rich, and high-performance mobile applications for Android and iOS platforms.",
     link: "/#",
   },
   {
     title: "UI/UX Design",
     imageUrl: "/ourServicePhone-icon/UI-UX-Design.svg",
     description:
       "A seamless and enjoyable user experience is paramount to the success of any digital product or service. Our UI/UX design service is dedicated to creating visually captivating and intuitively functional interfaces that leave a lasting impression on your users.",
     link: "/#",
   },
   {
     title: "Software QA and Testing",
     imageUrl: "/ourServicePhone-icon/Software-QA-and-Testing.svg",
     description:
       "In the dynamic world of software development, Software QA and Testing emerge as the cornerstones of success. Embracing a range of benefits, they revolutionize the entire software development lifecycle, empowering businesses to thrive and users to enjoy seamless experiences.",
     link: "/#",
   },
   {
     title: "Machine Learning and AI",
     imageUrl: "/ourServicePhone-icon/Machine-Learning-and-AI.svg",
     description:
       "We lead the way in offering Machine Learning (ML) and Artificial Intelligence (AI) services that give businesses a significant competitive advantage. Our specialized expertise in ML and AI empowers companies to explore data-driven insights, automate tasks, and boost overall efficiency across diverse industries. With our services, businesses can embrace the future of technology and unlock new opportunities for growth and success.",
     link: "/#",
   },
   {
     title: "Cloud Solutions",
     imageUrl: "/ourServicePhone-icon/Cloud-Solutions.svg",
     description:
       "API Solutions is proud to offer cutting-edge Cloud Solutions that enable businesses to harness the full potential of cloud computing. As cloud technology continues to revolutionize the way organizations operate, we stand ready to be your trusted partner in this digital transformation journey.",
     link: "/#",
   },
   {
     title: "Creative Design",
     imageUrl: "/ourServicePhone-icon/UI-UX-Design.svg",
     description:
       "Our team of creative minds is dedicated to transforming your ideas into a visually stunning reality. From strategic digital marketing to attractive graphic design, we are here to enhance your brand. In terms of creative design, we specialize in graphic design, logo design, motion graphics, info-graphics design etc. Our creative capabilities know no bounds. We are always looking for new ways to keep your brand ahead of the curve.",
     link: "/#",
   },
   {
     title: "Digital Marketing",
     imageUrl: "/ourServicePhone-icon/Digital_Transformation.svg",
     description:
       "API Solutions specializes in digital marketing and content development. We specialize in creating custom marketing strategies and compelling content to boost your online presence and impact. Our expertise includes SEO optimization, social media management, PPC advertising, and data-driven insights. Join hands with us to elevate your brand, connect with your audience, and succeed in the digital world.",
     link: "/#",
   },
   {
     title: "IT Consultancy Service",
     imageUrl: "/ourServicePhone-icon/IT-Consulting.svg",
     description:
       "We offer comprehensive IT consulting services to help businesses navigate the ever-changing landscape of technology. Our expert consultants are here to understand your unique challenges and provide solutions that drive growth, efficiency, and innovation.",
     link: "/#",
   },
   // Add more objects for additional cards as needed
 ];

  const loadMore = () => {
    const newVisibleCards = visibleCards + additionalCardCount;
    setVisibleCards(
      newVisibleCards > totalCards ? totalCards : newVisibleCards
    );
  };

  const showLess = () => {
    setVisibleCards(initialCardCount);
  };
  return (
    <>
      <section id="services" className="section_padding">
        <SectionTitle titleUpDown="Our Services" />
        <div className="container">
          <div className="serviceItem d-none">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>

                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            Our team is comprised of passionate and skilled
                            professionals who are committed to delivering
                            excellence. With years of experience in the
                            industry, they have successfully executed numerous
                            custom software projects for diverse clients. We
                            handpick our developers to ensure they have the
                            right expertise and align with our company's values
                            of innovation, collaboration, and client
                            satisfaction.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/1.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            API Solutions provides high-quality web application
                            development services designed to suit your business
                            requirements. Our skilled web developers utilize the
                            latest technologies to create web apps that are
                            scalable, responsive, and visually appealing,
                            enhancing your online presence.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/2.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            Empower your business to connect with customers on
                            the go through our exceptional mobile app
                            development services. API Solutions is passionate
                            about creating user-friendly, feature-rich, and
                            high-performance mobile applications for Android and
                            iOS platforms.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/3.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            A seamless and enjoyable user experience is
                            paramount to the success of any digital product or
                            service. Our UI/UX design service is dedicated to
                            creating visually captivating and intuitively
                            functional interfaces that leave a lasting
                            impression on your users.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/4.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="5">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            In the dynamic world of software development,
                            Software QA and Testing emerge as the cornerstones
                            of success. Embracing a range of benefits, they
                            revolutionize the entire software development
                            lifecycle, empowering businesses to thrive and users
                            to enjoy seamless experiences.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/5.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="6">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            We lead the way in offering Machine Learning (ML)
                            and Artificial Intelligence (AI) services that give
                            businesses a significant competitive advantage. Our
                            specialized expertise in ML and AI empowers
                            companies to explore data-driven insights, automate
                            tasks, and boost overall efficiency across diverse
                            industries. With our services, businesses can
                            embrace the future of technology and unlock new
                            opportunities for growth and success.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/6.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="7">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            API Solutions is proud to offer cutting-edge Cloud
                            Solutions that enable businesses to harness the full
                            potential of cloud computing. As cloud technology
                            continues to revolutionize the way organizations
                            operate, we stand ready to be your trusted partner
                            in this digital transformation journey.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/7.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="8">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            Our team of creative minds is dedicated to
                            transforming your ideas into a visually stunning
                            reality. From strategic digital marketing to
                            attractive graphic design, we are here to enhance
                            your brand. In terms of creative design, we
                            specialize in "graphic design, logo design, motion
                            graphics, info-graphics design" etc. Our creative
                            capabilities know no bounds. We are always looking
                            for new ways to keep your brand ahead of the curve.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/8.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="9">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            API Solutions specializes in digital marketing and
                            content development. We specialize in creating
                            custom marketing strategies and compelling content
                            to boost your online presence and impact. Our
                            expertise includes SEO optimization, social media
                            management, PPC advertising, and data-driven
                            insights. Join hands with us to elevate your brand,
                            connect with your audience, and succeed in the
                            digital world.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img
                            src="our-services-avatar/9.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="10">
                      <div className="serviceName">
                        <p>Application Development</p>
                        <p>Digital Transformation</p>
                        <p>Business Analysis</p>
                        <p>Digital Product Design</p>
                        <p>Data Management</p>
                        <p>IoT</p>
                        <p>DevOps</p>
                        <p>IT Support & Maintenance </p>
                      </div>
                      <div className="serviceContein d-flex">
                        <div className="serviceText pe-5 mt-5">
                          <p className="lh-lg">
                            We offer comprehensive IT consulting services to
                            help businesses navigate the ever-changing landscape
                            of technology. Our expert consultants are here to
                            understand your unique challenges and provide
                            solutions that drive growth, efficiency, and
                            innovation.
                          </p>
                          {/* <Link href="/" className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                          </Link> */}
                        </div>
                        <div className="serviceImg">
                          <img src="our-services-avatar/10.svg" alt="img" />
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col sm={4}>
                  <Nav variant="pills" className="flex-column serviceTabs">
                    <Nav.Item>
                      <Nav.Link eventKey="1">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Custom Software Development
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Web App Development
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Mobile App Development
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        UI/UX Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Software QA and Testing
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="6">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Machine Learning and AI
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="7">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Cloud Solutions
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="8">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Creative Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="9">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        Digital Marketing
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="10">
                        <span className="arrowIcon">
                          <FaLongArrowAltLeft />
                        </span>
                        IT Consultancy Service
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Tab.Container>
          </div>

          <div id="servicesPhone">
            <Row className="g-4">
              {cardData.slice(0, visibleCards).map((card, index) => (
                <Col key={index} md={6} lg={6} xl={4}>
                  <div className="serviceItemBox">
                    <div className="serviceIconBox">
                      <img
                        className="serviceIcon"
                        src={card.imageUrl}
                        alt="icon"
                      />
                    </div>
                    <Link href={card.link}>
                      <h6 className="mt-3 fw-bold text-dark">{card.title}</h6>
                    </Link>
                    <p className="mt-2 serviceItemDetails">
                      {card.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
            {visibleCards < totalCards ? (
              visibleCards === initialCardCount ? (
                <div className="d-flex justify-content-center mt-3 mb-3">
                  <button type="submit" onClick={loadMore} className="requestBtn border-0">
                    More Services
                  </button>
                </div>
              ) : (
                //  <button onClick={loadMore}>Load More</button>
                <>
                  <div className="d-flex justify-content-center mt-3 mb-3">
                     <button type="submit" onClick={loadMore} className="requestBtn border-0">
                     More Services
                     </button>
                  </div>
                 
                </>
              )
            ) : (
               <div className="d-flex justify-content-center mt-3 mb-3">
               <button type="submit" onClick={showLess} className="requestBtn border-0">
               Less Services
               </button>
            </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
