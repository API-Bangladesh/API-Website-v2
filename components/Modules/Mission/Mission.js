import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import SectionTitle from "../Section_title/Section_title";

const Mission = () => {
   return (
      <>
         <section id="mission" className="section_padding ">
            <div className="container">
               <SectionTitle titleUpDown="Mission Vision" className="pb-5"/>
               <div className="row">
                  <div className="col-lg-6 pt-5 clock_div">
                     <div
                        className="missionBg"
                        style={{ background: 'url("/mission.png")' }}
                     ></div>
                  </div>
                 
                  <div className="col-lg-6">
                     <div className="pb-5 pt-3 mision_vision_main">
                        <div className="missionItem mb-5">
                           <h3 className="text-uppercase mb-4 mission_title">Mission</h3>
                           <p className="details_paragraph">
                              Transforming Ideas through innovative digital
                              products and providing solutions embracing
                              tomorrow’s need to become ideal partners.
                           </p>
                        </div>
                        <div className="missionItem">
                           <h3 className="text-uppercase mb-4 vision_title">Vision</h3>
                           <p className="details_paragraph">
                              To cater client’s satisfaction maintaining high
                              value and standards in creating software as a
                              product and providing software as a service in our
                              mission to implement our vision.
                           </p>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
export default Mission;
