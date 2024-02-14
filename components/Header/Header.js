import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";

import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiOutline } from "react-icons/bi";
import { RiLayout3Line } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";
import { LuDot } from "react-icons/lu";
import classEase from "classease";

const Header = () => {
   const router = useRouter();
   const [navShow, setNavShow] = useState(false);
   const [showItems, setShowItems] = useState(false);
   const [showItems2, setShowItems2] = useState(false);

   const handleMouseEnter = () => {
      setShowItems(true);
   };
   const handleMouseEnter2 = () => {
      setShowItems2(true);
   };

   const handleMouseLeave = () => {
      setShowItems(false);
      // setTimeout(() => {setShowItems(false);}, 3000)
   };

   const handleMouseLeave2 = () => {
      setShowItems2(false);
   };

   const handleClickService = (e) => {
      console.log(e)
      e.stopPropagation();
      e.preventDefault();
      console.log(e.target)
      const id = e.target.id;
      console.log(id);
      setShowItems(false);
      id === "custome_dropdown" ? router.push("/services") : null;
   };
   const handleClickService2 = (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(e.target)
      const id = e.target.id;
      console.log(id);
      setShowItems2(false);
      id === "custome_dropdown" ? router.push("/expertise") : null;
   };

   const [activeKey, setActiveKey] = useState(null);
   const handleAccordionToggle = (eventKey) => {
      setActiveKey(activeKey === eventKey ? null : eventKey);
   };

   // menu toggle for phone
   const [showDiv, setShowDiv] = useState(false);
   const toggle = (e) => {
      setShowDiv((prev) => !prev);
      setActiveKey(null);
   };

   return (
      <>
         <header id="header">
            <div className="desktop d-none">
               <div className="container">
                  <Navbar expand="lg" className="bg-body-tertiary">
                     <Container>
                        <Navbar.Brand as={Link} href="/">
                           <img
                              className="logo"
                              src="/logo.png"
                              alt="logoImg"
                           />
                        </Navbar.Brand>

                        <Navbar.Collapse id="basic-navbar-nav">
                           <Nav className="ms-auto d-flex align-items-center">
                              <Link className="menuLink" href="/">
                                 Home
                              </Link>
                              <Link className="menuLink" href="/about-us">
                                 About Us
                              </Link>

                              <NavDropdown
                                 title="Services"
                                 id="custome_dropdown"
                                 onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}
                                 onClick={edhgfdf => handleClickService(edhgfdf)}
                                 show={showItems}
                              >
                                 <div className="subMenuBox d-flex">
                                    <div className="subMenu px-5 py-5 w-50">
                                       <ul className="navBox">
                                          <li>
                                             <Link href="/custom-software-development">
                                                <IoIosArrowForward />
                                                Custom Software Development
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/mobile-app-development">
                                                <IoIosArrowForward />
                                                Mobile App Development
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/ui-ux-design">
                                                <IoIosArrowForward />
                                                UI/UX Design
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/software-qa-and-testing">
                                                <IoIosArrowForward />
                                                Software QA and Testing
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/machine-learning-and-ai">
                                                <IoIosArrowForward />
                                                Machine Learning and AI
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/cloud-solutions">
                                                <IoIosArrowForward />
                                                Cloud Solutions
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/creative-design">
                                                <IoIosArrowForward />
                                                Creative Design
                                             </Link>
                                          </li>

                                          <li>
                                             <Link href="/digital-marketing">
                                                <IoIosArrowForward />
                                                Digital Marketing
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/it-consultancy-service">
                                                <IoIosArrowForward />
                                                IT Consultancy Service
                                             </Link>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="menuContent w-50 d-flex align-items-center">
                                       <div className="textBox px-5 py-5">
                                          <h4 className="mb-3">Our Services</h4>
                                          <p>
                                             As a software company, we are
                                             committed to excellence, innovation
                                             and customer satisfaction by
                                             providing cutting-edge solutions
                                             that drive growth, efficiency and
                                             innovation. Our mission is to
                                             empower your business with powerful
                                             software solutions that drive
                                             success and growth. Our diverse
                                             range of services is tailored to
                                             meet the unique needs of businesses
                                             and organizations across
                                             industries.
                                          </p>
                                          <Link
                                             href={`/services`}
                                             onClick={() => setShowItems(false)}
                                             className="menuBtn mt-4"
                                          >
                                             Read More
                                             <BsArrowRight className="text-danger fs-4 ms-2 d-inline-block" />
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </NavDropdown>

                              <NavDropdown
                                 title="Expertise"
                                 id="custome_dropdown"
                                 onMouseEnter={handleMouseEnter2}
                                 onMouseLeave={handleMouseLeave2}
                                 onClick={handleClickService2}
                                 show={showItems2}
                              >
                                 <div className="subMenuBox d-flex">
                                    <div className="subMenu px-5 py-5 w-50">
                                       <ul className="navBox">
                                          <li>
                                             <Link href="/application-development">
                                                <IoIosArrowForward />
                                                Application Development
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/digital-transformation">
                                                <IoIosArrowForward />
                                                Digital Transformation
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/business-analysis">
                                                <IoIosArrowForward />
                                                Business Analysis
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/digital-product-design">
                                                <IoIosArrowForward />
                                                Digital Product Design
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/data-management">
                                                <IoIosArrowForward />
                                                Data Management
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/iot">
                                                <IoIosArrowForward />
                                                IoT (Internet of Things)
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/devops">
                                                <IoIosArrowForward />
                                                DevOps
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="/it-support-and-maintenance">
                                                <IoIosArrowForward />
                                                IT Support & Maintenance
                                             </Link>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="menuContent w-50 d-flex align-items-center">
                                       <div className="textBox px-5 py-5">
                                          <h4 className="mb-3">
                                             Our Expertise
                                          </h4>
                                          <p>
                                             As a software company, we are
                                             committed to excellence, innovation
                                             and customer satisfaction by
                                             providing cutting-edge solutions
                                             that drive growth, efficiency and
                                             innovation. Our mission is to
                                             empower your business with powerful
                                             software solutions that drive
                                             success and growth. Our diverse
                                             range of services is tailored to
                                             meet the unique needs of businesses
                                             and organizations across
                                             industries.
                                          </p>
                                          <Link
                                             href={`/expertise`}
                                             onClick={() =>
                                                setShowItems2(false)
                                             }
                                             className="menuBtn mt-4"
                                          >
                                             Read More
                                             <BsArrowRight className="text-danger fs-4 ms-2 d-inline-block" />
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </NavDropdown>

                              <Link className="menuLink" href="/products">
                                 Products
                              </Link>
                              <Link className="menuLink" href="/contact-us">
                                 Contact Us
                              </Link>
                           </Nav>
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>
               </div>
            </div>

            <div className="phoneMenu d-none">
               {/* <div className="container"> */}
               <div className="position-relative">
                  <Link className="phnLogo" href="/">
                     <img
                        className="logo ms-3 mt-2"
                        src="/logo.png"
                        alt="logoImg"
                     />
                  </Link>

                  {/* <div className="toggleMenu"> */}

                  <div className={classEase("hamburger", showDiv ? "open" : "")} onClick={(e) => toggle(e)}>
                     <div
                        id="toggleBox"
                        className={
                           // "menu toggleLine mt-3 me-4" + (showDiv ? " open" : "")
                           "menu toggleLine" + (showDiv ? " open" : "")
                        }
                     >
                        <span className="item"></span>
                        <span className="item"></span>
                        <span className="item"></span>
                     </div>
                  </div>

                  <div className={"myDiv" + (showDiv ? " show" : "")}>
                     <Nav className="menuBox d-flex flex-column">
                        <Link
                           className="navLink d-flex align-items-center"
                           href="/"
                           onClick={(e) => toggle(e)}
                        >
                           <GoHome className="me-3" />
                           Home
                        </Link>
                        <Link
                           className="navLink d-flex align-items-center"
                           href="/about-us"
                           onClick={(e) => toggle(e)}
                        >
                           <LuUsers2 className="me-3" />
                           About Us
                        </Link>
                        <Accordion
                           activeKey={activeKey}
                           onSelect={handleAccordionToggle}
                        >
                           <Accordion.Item
                              eventKey="0"
                              className="navLink mt-3"
                           >
                              <Accordion.Header className="d-flex align-items-center">
                                 <MdOutlineDesignServices className="me-3" />
                                 Services
                              </Accordion.Header>
                              <Accordion.Body className="d-flex flex-column">
                                 <Link
                                    className="navLink mt-0 d-flex align-items-center"
                                    href="/services"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Our Services
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/custom-software-development"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Custom Software Development
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/web-app-development"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Web App Development
                                 </Link>

                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/mobile-app-development"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Mobile App Development
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/ui-ux-design"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    UI/UX Design
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/software-qa-and-testing"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Software QA and Testing
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/machine-learning-and-ai"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Machine Learning and AI
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/cloud-solutions"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Cloud Solutions
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/creative-design"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Creative Design
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/digital-marketing"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Digital Marketing
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/it-consultancy-service"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    IT Consultancy Service
                                 </Link>
                              </Accordion.Body>
                           </Accordion.Item>

                           <Accordion.Item
                              eventKey="1"
                              className="navLink mt-3"
                           >
                              <Accordion.Header className="d-flex align-items-center">
                                 <BiOutline className="me-3" />
                                 Expertise
                              </Accordion.Header>
                              <Accordion.Body className="d-flex flex-column">
                                 <Link
                                    className="navLink mt-0 d-flex align-items-center"
                                    href="/expertise"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Our Expertise
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/application-development"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Application Development
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/digital-transformation"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Digital Transformation
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/business-analysis"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Business Analysis
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/digital-product-design"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Digital Product Design
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/data-management"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    Data Management
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/iot"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    IoT (Internet of Things)
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/devops"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    DevOps
                                 </Link>
                                 <Link
                                    className="navLink d-flex align-items-center"
                                    href="/it-support-and-maintenance"
                                    onClick={(e) => toggle(e)}
                                 >
                                    <LuDot className="fs-1" />
                                    IT Support & Maintenance
                                 </Link>
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>
                        <Link
                           className="navLink d-flex align-items-center"
                           href="/products"
                           onClick={(e) => toggle(e)}
                        >
                           <RiLayout3Line className="me-3" />
                           Products
                        </Link>
                        <Link
                           className="navLink d-flex align-items-center"
                           href="/contact-us"
                           onClick={(e) => toggle(e)}
                        >
                           <TiLocationOutline className="me-3" />
                           Contact Us
                        </Link>
                     </Nav>
                  </div>
                  {/* </div> */}
               </div>

               {/* </div> */}
            </div>
         </header>
      </>
   );
};

export default Header;
