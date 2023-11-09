import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../Section_title/Section_title";

import {
   AiFillHtml5,
   AiFillAndroid,
   AiOutlineAlibaba,
   AiOutlineApartment,
   AiOutlineSlack,
} from "react-icons/ai";
import {
   TbBrandCss3,
   TbBrandCucumber,
} from "react-icons/tb";
import {
   BiLogoJavascript,
   BiLogoApple,
   BiLogoFlutter,
   BiAnalyse,
   BiLogoAws,
   BiLogoTrello,
   BiLogoMongodb,
   BiLogoPostgresql,
   BiLogoRedux,
} from "react-icons/bi";
import { FaReact, FaNodeJs, FaPhp, FaUserLock } from "react-icons/fa";
import { IoLogoAngular, IoLogoPython } from "react-icons/io";
import {
   SiVuedotjs,
   SiNextdotjs,
   SiHuawei,
   SiMicrosoftazure,
   SiJirasoftware,
   SiMicrosoftoffice,
   SiMysql,
   SiPostman,
   SiApachejmeter,
   SiCypress,
   SiSelenium,
} from "react-icons/si";
import { DiDotnet, DiJava, DiBitbucket } from "react-icons/di";
import { BsFillCloudFog2Fill, BsFillDatabaseFill } from "react-icons/bs";
import { GrOracle } from "react-icons/gr";
import { RiChromeLine } from "react-icons/ri";

const Technology = () => {
   const [currentActiveKey, setCurrentActiveKey] = useState("1");

   return (
      <>
         <section id="technology" className="section_padding_top margin_bottom">
            <div className="container">
               <SectionTitle titleUpDown="Our Technologies" />

               <div className="technologyItem">
                  <Tab.Container
                     id="left-tabs-example"
                     defaultActiveKey="1"
                     activeKey={currentActiveKey}
                     onSelect={(key) => setCurrentActiveKey(key)}
                  >
                     <div className="position-relative">
                        <div className="navBox">
                           <Nav variant="pills" className="flex-column tabMenu">
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="1"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("1")
                                    }
                                 >
                                    Front-End
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="2"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("2")
                                    }
                                 >
                                    Back-End
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="3"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("3")
                                    }
                                 >
                                    Mobile Development
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="4"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("4")
                                    }
                                 >
                                    QA & Testing
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="5"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("5")
                                    }
                                 >
                                    Cloud Solution
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="6"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("6")
                                    }
                                 >
                                    Project Management
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="7"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("7")
                                    }
                                 >
                                    Database
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>

                        <Tab.Content className="tabItemBox">
                           {/* Frontend  */}
                           <Tab.Pane
                              transition={false}
                              eventKey="1"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/Front-End.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/Front-End-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiFillHtml5 className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">HTML</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <TbBrandCss3 className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">CSS</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoJavascript className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">JavaScript</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaReact className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">React js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiNextdotjs className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Next js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiVuedotjs className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Vue js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <IoLogoAngular className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Angular js</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* Backend */}
                           <Tab.Pane
                              transition={false}
                              eventKey="2"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/Back-End.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/Back-End-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <IoLogoPython className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Python</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaNodeJs className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Node js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaPhp className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">PHP</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <DiDotnet className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">.NET</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <DiJava className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Java</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* mobile development */}
                           <Tab.Pane
                              transition={false}
                              eventKey="3"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/Mobile-Development.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/Mobile-Development-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiFillAndroid className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Android</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoApple className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">IOS</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaReact className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">React Native</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoFlutter className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Flutter</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiAnalyse className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">
                                          Cross platform
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/*  */}
                           <Tab.Pane
                              transition={false}
                              eventKey="4"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/QA-&-Testing.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/QA-&-Testing-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiPostman className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Postman</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiApachejmeter className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">
                                          Apache JMeter
                                       </p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiCypress className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Cypress</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <TbBrandCucumber className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Cucumber</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoRedux className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">load Runner</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <RiChromeLine className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Appium</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiSelenium className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Selenium</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* cloud */}
                           <Tab.Pane
                              transition={false}
                              eventKey="5"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/Cloud.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/Cloud-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoAws className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">AWS</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BsFillCloudFog2Fill className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Google cloud</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiMicrosoftazure className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">
                                          Microsoft Azure
                                       </p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiHuawei className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Huawei cloud</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineAlibaba className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">
                                          Alibaba cloud
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* Project Management */}
                           <Tab.Pane
                              transition={false}
                              eventKey="6"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/Project-Management.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/Project-Management-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiJirasoftware className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Jira</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoTrello className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Trello</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineApartment className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Draw.io</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <DiBitbucket className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Bitbucket</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineSlack className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Slack</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiMicrosoftoffice className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">
                                          Ms office Suite
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* database */}

                           <Tab.Pane
                              transition={false}
                              eventKey="7"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/ourTechnology/Database.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/ourTechnology/Database-2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiMysql className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">MySQL</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BsFillDatabaseFill className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">MsSQL</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoMongodb className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">MongoDB</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoPostgresql className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">PostgreSQL</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <GrOracle className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Oracle</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                        </Tab.Content>
                     </div>
                  </Tab.Container>
               </div>

               <div id="technologyPhone" className="d-none">
                  <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>Front-End</Accordion.Header>
                        <Accordion.Body>
                           <img src="/ourTechnology/Front-End.jpg" alt="img" />

                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <AiFillHtml5 className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">HTML</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <TbBrandCss3 className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">CSS</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoJavascript className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">JavaScript</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <FaReact className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">React js</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiNextdotjs className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Next js</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiVuedotjs className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Vue js</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <IoLogoAngular className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Angular js</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>Back-End</Accordion.Header>
                        <Accordion.Body>
                           <img src="/ourTechnology/Back-End.jpg" alt="img" />
                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <IoLogoPython className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Python</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <FaNodeJs className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Node js</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <FaPhp className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">PHP</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <DiDotnet className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">.NET</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <DiJava className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Java</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header>Mobile Development</Accordion.Header>
                        <Accordion.Body>
                           <img
                              src="/ourTechnology/Mobile-Development.jpg"
                              alt="img"
                           />
                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <AiFillAndroid className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Android</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoApple className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">IOS</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <FaReact className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">React Native</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoFlutter className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Flutter</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiAnalyse className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Cross platform</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="3">
                        <Accordion.Header>QA & Testing</Accordion.Header>
                        <Accordion.Body>
                           <img
                              src="/ourTechnology/QA-&-Testing.jpg"
                              alt="img"
                           />
                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiPostman className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Postman</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiApachejmeter className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Apache JMeter</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiCypress className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Cypress</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <TbBrandCucumber className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Cucumber</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoRedux className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">load Runner</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <RiChromeLine className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Appium</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiSelenium className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Selenium</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="4">
                        <Accordion.Header>Cloud</Accordion.Header>
                        <Accordion.Body>
                           <img src="/ourTechnology/Cloud.jpg" alt="img" />
                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoAws className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">AWS</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BsFillCloudFog2Fill className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Google cloud</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiMicrosoftazure className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Microsoft Azure</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiHuawei className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Huawei cloud</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <AiOutlineAlibaba className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Alibaba cloud</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="5">
                        <Accordion.Header>Project Management</Accordion.Header>
                        <Accordion.Body>
                           <img
                              src="/ourTechnology/Project-Management.jpg"
                              alt="img"
                           />
                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiJirasoftware className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Jira</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoTrello className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Trello</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <AiOutlineApartment className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Draw.io</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <DiBitbucket className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Bitbucket</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <AiOutlineSlack className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Slack</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiMicrosoftoffice className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Ms office Suite</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="6">
                        <Accordion.Header>Database</Accordion.Header>
                        <Accordion.Body>
                           <img src="/ourTechnology/Database.jpg" alt="img" />
                           <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <SiMysql className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">MySQL</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BsFillDatabaseFill className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">MsSQL</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoMongodb className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">MongoDB</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <BiLogoPostgresql className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">PostgreSQL</p>
                              </div>
                              <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                 <GrOracle className="fs-1 d-inline-block text-warning" />
                                 <p className="mb-0 mt-1">Oracle</p>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </div>
            </div>
         </section>
      </>
   );
};

export default Technology;
