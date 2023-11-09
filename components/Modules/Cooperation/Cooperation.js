import React from "react";
import SectionTitle from "../Section_title/Section_title";

const Cooperation = () => {
   return (
      <>
         <section id="cooperation" className="section_padding">
            <SectionTitle titleUpDown="Cooperation" />
            <div className="container">
               <p className="w-50 mb-5 m-auto text-center cooperationText">
                  We believe that collaboration is the cornerstone of progress
                  and innovation. We are actively seeking like-minded partners
                  to join us on a journey of technological excellence and mutual
                  growth.
               </p>
               <div className="row gx-5">
                  <div className="col-lg-4 cooperationItem1">
                     <p className="cooperationText cooperation_iconBox">
                        <b className="d-block">What we offer in the partnership:</b>
                        We firmly dedicate our resources to fostering the
                        potential of ideas, enabling them to shape profound and
                        mutually advantageous collaborations between all parties
                        involved.
                        <span className="cooperationNumber">02</span>
                     </p>
                  </div>
                  <div className="col-lg-4 cooperationItem2">
                     <div className="p-3">
                        <img
                           className="cooperationimg"
                           src="/cooperation_img.png"
                           alt="img"
                        />
                        <p className="cooperationText cooperation_iconBox mt-3">
                           <b className="d-block">What we should share:</b>
                           building strong, collaborative relationships that
                           drive mutual growth and success for both parties
                           involved.

                           <span className="cooperationNumber">01</span>
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-4 cooperationItem3">
                     <p className="cooperationText cooperation_iconBox">
                        <b className="d-block">What we expect:</b>
                        Expertise and Skills, Networking Opportunities,
                        Collaborative Product Development, Shared Risk and
                        Accountability.

                        <span className="cooperationNumber">03</span>
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Cooperation;
