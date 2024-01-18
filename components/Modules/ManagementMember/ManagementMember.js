import React from "react";
import SectionTitle from "../Section_title/Section_title";
import Slider from "react-slick";

const ManagementMember = () => {

      const settings = {
         infinite: true,
         autoplay: true,
         speed: 1000,
         slidesToShow: 4,
         slidesToScroll: 1,
         initialSlide: 0,
         dots: true,
         pauseOnHover: false,
         arrows: false,
         responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      };


      
   return (
      <>
         <section id="managementMember" className="section_padding mb-5">
            <div className="pb-5">
               <SectionTitle titleUpDown="Top Management"/>
            </div>
            <div className="container">
               {/* <div className="row g-4"> */}

            <Slider {...settings}>
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
                           <p className="memberDesignation mb-0">Chairman</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p> */}
                        </div>
                     </div>
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
                           <p className="memberDesignation mb-0">CEO</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p> */}
                        </div>
                     </div>
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
                           <p className="memberDesignation mb-0">CTO</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p> */}
                        </div>
                     </div>
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
                           <p className="memberDesignation mb-0">CMO</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p> */}
                        </div>
                     </div>
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/ZiauddinAhmed.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mir Ziauddin Ahmed</h6>
                           <p className="memberDesignation mb-0">Director</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p> */}
                        </div>
                     </div>
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/MahabubHassan.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">MD. Mahabub Hassan</h6>
                           <p className="memberDesignation mb-0">Director</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p> */}
                        </div>
                     </div>
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/IftekharMahmud.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Iftekhar Mahmud</h6>
                           <p className="memberDesignation mb-0">Director</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p> */}
                        </div>
                     </div>
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/management/TaniaAhmed.png"
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Tania Ahmed</h6>
                           <p className="memberDesignation mb-0">Director</p>
                           {/* <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p> */}
                        </div>
                     </div>

                  </Slider>

               {/* </div> */}
            </div>
         </section>
      </>
   );
};

export default ManagementMember;
