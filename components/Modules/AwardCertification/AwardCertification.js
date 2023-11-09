import React from "react";
import SectionTitle from "../Section_title/Section_title";

const AwardCertification = () => {
   return (
      <>
         <section id="awardCertification" className="section_padding">
            <SectionTitle titleUpDown="Award and Recognition" />
            <div className="container">
               <img src="/award.png" width={1000} height={250} className="awardimg py-5" alt="img" />
            </div>
         </section>
      </>
   );
};

export default AwardCertification;
