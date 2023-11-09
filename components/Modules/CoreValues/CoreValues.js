import Link from "next/link";
import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "../Section_title/Section_title";

const CoreValues = () => {
   const [key, setKey] = useState("1");
   return (
      <>
         <section id="coreValues" className="section_padding">
            <div className="container">
               <SectionTitle titleUpDown="Our Core Values"/>

               <div className="valueItem">
                  <Tabs
                     id="controlled-tab-example"
                     activeKey={key}
                     onSelect={(k) => setKey(k)}
                     className="mb-3"
                  >
                     <Tab
                        eventKey="1"
                        title="Experts in the financial industry"
                     >
                        <div className="row">
                           <div className="conteinBox text-white col-lg-7">
                              <h2 className="mb-5 mt-4">Experts in the financial industry</h2>
                              <p>
                                 Our financial industry know-how is a rarity
                                 among IT companies. It allows us to develop
                                 highly specialized and super-secure software
                                 but also to be a trustworthy partner for your
                                 company.
                              </p>
                           </div>
                           <div className="imgBox col-lg-5">
                              <img src="/coreValue.jpg" alt="img" />
                           </div>
                        </div>
                     </Tab>
                     <Tab eventKey="2" title="20+ years of experience">
                     <div className="row">
                           <div className="conteinBox text-white col-lg-7">
                              <h2 className="mb-5 mt-4">20+ years of experience</h2>
                              <p>
                                 Our financial industry know-how is a rarity
                                 among IT companies. It allows us to develop
                                 highly specialized and super-secure software
                                 but also to be a trustworthy partner for your
                                 company.
                              </p>
                           </div>
                           <div className="imgBox col-lg-5">
                              <img src="/coreValue2.jpg" alt="img" />
                           </div>
                        </div>
                     </Tab>
                     <Tab eventKey="3" title="Top-notch talent">
                     <div className="row">
                           <div className="conteinBox text-white col-lg-7">
                              <h2 className="mb-5 mt-4">Top-notch talent</h2>
                              <p>
                                 Our financial industry know-how is a rarity
                                 among IT companies. It allows us to develop
                                 highly specialized and super-secure software
                                 but also to be a trustworthy partner for your
                                 company.
                              </p>
                           </div>
                           <div className="imgBox col-lg-5">
                              <img src="/coreValue3.jpg" alt="img" />
                           </div>
                        </div>
                     </Tab>
                  </Tabs>
               </div>
            </div>
         </section>
      </>
   );
};

export default CoreValues;
