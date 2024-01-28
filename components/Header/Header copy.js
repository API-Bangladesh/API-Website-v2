import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";

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

   const handleClickService = () => {
      setShowItems(false);
      router.push("/services");
   };
   const handleClickService2 = () => {
      setShowItems2(false);
      router.push("/expertise");
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
                              <Nav.Link as={Link} href="/">
                                 Home
                              </Nav.Link>
                              <Nav.Link as={Link} href="/about-us">
                                 About Us
                              </Nav.Link>

                              <NavDropdown
                                 title="Services"
                                 id="custome_dropdown"
                                 onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}
                                 onClick={handleClickService}
                                 show={showItems}
                              >
                                 <div className="subMenuBox d-flex">
                                    <div className="subMenu px-5 py-5 w-50">
                                       <div className="navBox">
                                          <p>
                                             <Nav.Link href="/custom-software-development">
                                                <IoIosArrowForward />
                                                Custom Software Development
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/web-app-development">
                                                <IoIosArrowForward />
                                                Web App Development
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/mobile-app-development">
                                                <IoIosArrowForward />
                                                Mobile App Development
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/ui-ux-design">
                                                <IoIosArrowForward />
                                                UI/UX Design
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/software-qa-and-testing">
                                                <IoIosArrowForward />
                                                Software QA and Testing
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/machine-learning-and-ai">
                                                <IoIosArrowForward />
                                                Machine Learning and AI
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/cloud-solutions">
                                                <IoIosArrowForward />
                                                Cloud Solutions
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/creative-design">
                                                <IoIosArrowForward />
                                                Creative Design
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/digital-marketing">
                                                <IoIosArrowForward />
                                                Digital Marketing
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/it-consultancy-service">
                                                <IoIosArrowForward />
                                                IT Consultancy Service
                                             </Nav.Link>
                                          </p>
                                       </div>
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
                                       <div className="navBox">
                                          <p>
                                             <Nav.Link href="/application-development">
                                                <IoIosArrowForward />
                                                Application Development
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/digital-transformation">
                                                <IoIosArrowForward />
                                                Digital Transformation
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/business-analysis">
                                                <IoIosArrowForward />
                                                Business Analysis
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/digital-product-design">
                                                <IoIosArrowForward />
                                                Digital Product Design
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/data-management">
                                                <IoIosArrowForward />
                                                Data Management
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/iot">
                                                <IoIosArrowForward />
                                                IoT (Internet of Things)
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/devops">
                                                <IoIosArrowForward />
                                                DevOps
                                             </Nav.Link>
                                          </p>
                                          <p>
                                             <Nav.Link href="/it-support-and-maintenance">
                                                <IoIosArrowForward />
                                                IT Support & Maintenance
                                             </Nav.Link>
                                          </p>
                                       </div>
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

                              <Nav.Link as={Link} href="/products">
                                 Products
                              </Nav.Link>
                              {/* <Nav.Link as={Link} href="/blog">
                              Blog
                           </Nav.Link> */}
                              <Nav.Link as={Link} href="/contact-us">
                                 Contact Us
                              </Nav.Link>
                           </Nav>
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>
               </div>
            </div>

            <div className="phoneMenu d-none">
               <div className="container">
                  <Navbar
                     expand="lg"
                     className="bg-body-tertiary"
                     onToggle={(prev) => setNavShow(prev)}
                     expanded={navShow}
                  >
                     <Container>
                        <Navbar.Brand as={Link} href="/">
                           <img
                              className="logo"
                              src="/logo.png"
                              alt="logoImg"
                           />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                           <Nav className="ms-auto d-flex align-items-center">
                              <Nav.Link
                                 as={Link}
                                 href="/"
                                 onClick={() => setNavShow(!navShow)}
                              >
                                 Home
                              </Nav.Link>
                              <Nav.Link
                                 as={Link}
                                 href="/about-us"
                                 onClick={() => setNavShow(!navShow)}
                              >
                                 About Us
                              </Nav.Link>
                              <NavDropdown
                                 title="Services"
                                 id="phnDrop"
                                 className="d-flex flex-column align-items-center"
                              >
                                 <ul className="bg-light px-3 py-2">
                                    <li className="phnSubMenu">
                                       <Link href="/services" onClick={() => setNavShow(!navShow)}>
                                          Services
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/custom-software-development" onClick={() => setNavShow(!navShow)}>
                                          Custom Software Development
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/web-app-development" onClick={() => setNavShow(!navShow)}>
                                          Web App Development
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/mobile-app-development" onClick={() => setNavShow(!navShow)}>
                                          Mobile App Development
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/ui-ux-design" onClick={() => setNavShow(!navShow)}>
                                          UI/UX Design
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/software-qa-and-testing" onClick={() => setNavShow(!navShow)}>
                                          Software QA and Testing
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/machine-learning-and-ai" onClick={() => setNavShow(!navShow)}>
                                          Machine Learning and AI
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/cloud-solutions" onClick={() => setNavShow(!navShow)}>
                                          Cloud Solutions
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/creative-design" onClick={() => setNavShow(!navShow)}>
                                          Creative Design
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/digital-marketing" onClick={() => setNavShow(!navShow)}>
                                          Digital Marketing
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/it-consultancy-service" onClick={() => setNavShow(!navShow)}>
                                          IT Consultancy Service
                                       </Link>
                                    </li>
                                 </ul>
                              </NavDropdown>
                              <NavDropdown
                                 title="Expertise"
                                 id="phnDrop"
                                 className="d-flex flex-column align-items-center"
                              >
                                 <ul className="bg-light px-3 py-2">
                                    <li className="phnSubMenu">
                                       <Link href="/expertise" onClick={() => setNavShow(!navShow)}>
                                          Expertise
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/application-development" onClick={() => setNavShow(!navShow)}>
                                       Application Development
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/digital-transformation" onClick={() => setNavShow(!navShow)}>
                                       Digital Transformation
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/business-analysis" onClick={() => setNavShow(!navShow)}>
                                       Business Analysis
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/digital-product-design" onClick={() => setNavShow(!navShow)}>
                                       Digital Product Design
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/data-management" onClick={() => setNavShow(!navShow)}>
                                       Data Management
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/iot" onClick={() => setNavShow(!navShow)}>
                                       IoT (Internet of Things)
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/devops" onClick={() => setNavShow(!navShow)}>
                                       DevOps
                                       </Link>
                                    </li>
                                    <li className="phnSubMenu">
                                       <Link href="/it-support-and-maintenance" onClick={() => setNavShow(!navShow)}>
                                       IT Support & Maintenance
                                       </Link>
                                    </li>
                                 </ul>
                              </NavDropdown>
                              <Nav.Link
                                 as={Link}
                                 href="/products"
                                 onClick={() => setNavShow(!navShow)}
                              >
                                 Products
                              </Nav.Link>
                              <Nav.Link
                                 as={Link}
                                 href="/contact-us"
                                 onClick={() => setNavShow(!navShow)}
                              >
                                 Contact Us
                              </Nav.Link>

                           </Nav>
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
