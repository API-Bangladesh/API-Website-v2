import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "../Section_title/Section_title";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import {
   AiFillSafetyCertificate,
   AiOutlineMonitor,
   AiOutlineBug,
} from "react-icons/ai";
import { RiChatSettingsLine } from "react-icons/ri";
import { TiGroupOutline } from "react-icons/ti";

const WorkProcess = () => {
   const [key, setKey] = useState("1");
   return (
      <>
         <section id="workProcess" className="section_padding">
            <div className="container">
               <SectionTitle titleUpDown="Our Work Process" />

               <div className="workProcessDesktop valueItem position-relative">
                  <div className="topBox">
                     <h2>AGILE</h2>
                  </div>
                  <Tabs
                     id="controlled-tab-example"
                     activeKey={key}
                     onSelect={(k) => setKey(k)}
                     className="process-tabs mb-3"
                  >
                     <Tab
                        eventKey="1"
                        title={
                           <span>
                              <AiOutlineMonitor className="tabIcon" />
                              Discovery and Analysis
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 1</p>
                              <h3 className="text-white">
                                 Discovery and Analysis
                              </h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 We kick off our agile work process with a
                                 thorough Discovery and Analysis phase. During
                                 this stage, we collaborate closely with you to
                                 understand your project requirements, goals,
                                 and target audience. By gaining deep insights
                                 into your business needs, we lay a strong
                                 foundation for the development journey ahead.
                              </p>
                           </div>
                        </div>
                     </Tab>
                     <Tab
                        eventKey="2"
                        title={
                           <span>
                              <SiMaterialdesignicons className="tabIcon p-2" />
                              UI/UX Design
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 2</p>
                              <h3 className="text-white">UI/UX Design</h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 Next, our talented UI/UX designers take the
                                 lead in crafting visually appealing and
                                 user-friendly interfaces. Through interactive
                                 prototypes and wireframes, we present you with
                                 a clear picture of how the final product will
                                 look and function. Our design approach
                                 prioritizes user experience, ensuring that your
                                 software or application is intuitive and
                                 engaging.
                              </p>
                           </div>
                        </div>
                     </Tab>
                     <Tab
                        eventKey="3"
                        title={
                           <span>
                              <FaLaptopCode className="tabIcon" />
                              Development
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 3</p>
                              <h3 className="text-white">Development</h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 With the design approved, our skilled
                                 development team springs into action. Following
                                 agile principles, we break down the project
                                 into manageable sprints. These short
                                 development cycles enable us to deliver
                                 incremental results and maintain flexibility
                                 for any changes or improvements along the way.
                                 You can expect regular updates and transparency
                                 throughout this phase.
                              </p>
                           </div>
                        </div>
                     </Tab>
                     <Tab
                        eventKey="4"
                        title={
                           <span>
                              <AiFillSafetyCertificate className="tabIcon" />
                              Release
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 6</p>
                              <h3 className="text-white">Release</h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 Once all the features have been developed,
                                 thoroughly tested, and refined based on your
                                 feedback, we prepare for the product release.
                                 Our agile process enables us to deliver
                                 frequent releases, ensuring that you can start
                                 benefiting from the software's value as soon as
                                 possible.
                              </p>
                           </div>
                        </div>
                     </Tab>
                     <Tab
                        eventKey="5"
                        title={
                           <span>
                              <RiChatSettingsLine className="tabIcon p-1" />
                              Support
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 7</p>
                              <h3 className="text-white">Support</h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 Our commitment to you doesn't end with the
                                 release. We continue to provide ongoing support
                                 and maintenance to keep the software running
                                 smoothly and efficiently. Whether it's
                                 addressing unforeseen issues or adding new
                                 features in the future, our support team is
                                 always ready to assist you.
                              </p>
                           </div>
                        </div>
                     </Tab>
                     <Tab
                        eventKey="6"
                        title={
                           <span>
                              <AiOutlineBug className="tabIcon p-1" />
                              Testing
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 4</p>
                              <h3 className="text-white">Testing</h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 Quality is at the heart of our methodology.
                                 Before releasing any feature or module, we
                                 conduct rigorous testing to ensure
                                 functionality, compatibility, and security. Our
                                 dedicated QA team meticulously reviews each
                                 aspect of the software, making certain it meets
                                 the highest standards and aligns with your
                                 expectations.
                              </p>
                           </div>
                        </div>
                     </Tab>
                     <Tab
                        eventKey="7"
                        title={
                           <span>
                              <TiGroupOutline className="tabIcon p-1" />
                              Feedback
                           </span>
                        }
                     >
                        <div className="workItem d-flex mt-5">
                           <div className="leftText d-flex flex-column justify-content-center">
                              <p className="text-white fw-light">Step 5</p>
                              <h3 className="text-white">Feedback</h3>
                           </div>

                           <div className="rightText">
                              <p>
                                 Your valuable feedback is crucial to us. We
                                 encourage open communication and actively seek
                                 your input throughout the development process.
                                 Regular checkpoints allow you to review the
                                 progress and provide feedback on the features
                                 implemented so far. This collaborative approach
                                 ensures that we are always on track and that
                                 the final product aligns precisely with your
                                 vision.
                              </p>
                           </div>
                        </div>
                     </Tab>
                  </Tabs>
               </div>

               <div className="workProcessPhone">
                  <div className="workItemBox">
                     <p className="text-uppercase mb-0">Analysis</p>
                  </div>
                  <div className="workItemBox">
                     <span className="workArrow"></span>
                     <p className="text-uppercase mb-0">Design</p>
                  </div>
                  <div className="workItemBox">
                  <span className="workArrow"></span>
                     <p className="text-uppercase mb-0">Development</p>
                  </div>
                  <div className="workItemBox">
                     <p className="text-uppercase mb-0">Testing</p>
                  </div>
                  <div className="workItemBox">
                     <p className="text-uppercase mb-0">Deployment</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default WorkProcess;
