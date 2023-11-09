import Link from "next/link";
import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "../Section_title/Section_title";

const CoreValuesTwo = () => {
   return (
      <>
         <section id="coreValuesTwo" className="coreValuesSec">
            <SectionTitle titleUpDown="Our Core Values" />

            <div className="cvtBox1">
               <div className="cvtBox2">
                  <ul className="all_items">
                     <li className="coreValue_item">
                        <h3 className="coreValue_item_title boxShadow">
                           <span className="coreValue_item_shape">
                              Accepting Challenge
                           </span>
                        </h3>
                        <div className="coreValue_item_sub_title">
                           <strong>Result:</strong>
                           <p className="resultDetails">positive outcomes.</p>
                        </div>
                     </li>
                     <li className="coreValue_item">
                        <h3 className="coreValue_item_title boxShadow">
                           <span className="coreValue_item_shape">
                              Act with Integrity
                           </span>
                        </h3>
                        <div className="coreValue_item_sub_title">
                           <strong>Result:</strong>
                           <p className="resultDetails">
                              a virtuous cycle of trust, credibility, and
                              positive relationships.
                           </p>
                        </div>
                     </li>
                     <li className="coreValue_item">
                        <h3 className="coreValue_item_title boxShadow">
                           <span className="coreValue_item_shape">
                              Valuing Relationship
                           </span>
                        </h3>
                        <div className="coreValue_item_sub_title">
                           <strong>Result:</strong>
                           <p className="resultDetails">
                              strengthens teamwork and customer satisfaction.
                           </p>
                        </div>
                     </li>
                     <li className="coreValue_item">
                        <h3 className="coreValue_item_title boxShadow">
                           <span className="coreValue_item_shape">
                              Winning Together
                           </span>
                        </h3>
                        <div className="coreValue_item_sub_title">
                           <strong>Result:</strong>
                           <p className="resultDetails">mutual understanding and shared success.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </section>
      </>
   );
};

export default CoreValuesTwo;
