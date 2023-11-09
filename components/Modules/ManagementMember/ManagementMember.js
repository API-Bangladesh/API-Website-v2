import React from "react";
import SectionTitle from "../Section_title/Section_title";

const ManagementMember = () => {
   return (
      <>
         <section id="managementMember" className="section_padding mb-5">
            <div className="pb-5">
               <SectionTitle titleUpDown="Top Management"/>
            </div>
            <div className="container">
               <div className="row g-4">
                  <div className="col-md-6 col-md-4 col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/chairman.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mosharraf Hossain</h6>
                           <p className="memberDesignation mb-4">Chairman</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-md-4 col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/CEO.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mirazuddin Ahmed</h6>
                           <p className="memberDesignation mb-4">CEO</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-md-4 col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/CTO.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Md Rubel</h6>
                           <p className="memberDesignation mb-4">CTO</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-md-4 col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/CMO.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mahbub Rashid Khan</h6>
                           <p className="memberDesignation mb-4">CMO</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ManagementMember;
