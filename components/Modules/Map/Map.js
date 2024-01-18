import React from "react";
import SectionTitle from "../Section_title/Section_title";

const Map = () => {
   return (
      <>
         <section id="map" className="section_padding">
            <SectionTitle titleUpDown="Our Location" />
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 col-md-6">
                     <div className="mapBox">
                        {/* <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.661800124093!2d90.40053467594353!3d23.795054687059398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c711d6140df3%3A0x9c9b28dbfb569ecc!2sBanani%20Biddaniketon%20Canteen!5e0!3m2!1sen!2sbd!4v1690699188574!5m2!1sen!2sbd"
                           width={500}
                           height={500}
                           style={{ border: 0 }}
                           allowFullScreen
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        /> */}

                        {/* <iframe
                           classname="mapBg"
                           src="https://my.atlist.com/map/18ec4bc1-fe1f-4af4-8d4d-36a1b1fedf30?share=true"
                           allow="geolocation 'self' https://my.atlist.com"
                           width="500px"
                           height="500px"
                           frameBorder={0}
                           scrolling="no"
                           allowFullScreen
                        /> */}
                        

                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6279004406138!2d90.39996767479337!3d23.79625198701545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7102559e17d%3A0x63849c8fb856db3!2sAPI%20Solutions%20Limited!5e0!3m2!1sen!2sbd!4v1705221394294!5m2!1sen!2sbd"
                           allowfullscreen=""
                           loading="lazy"
                           referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* <iframe
                           src="https://snazzymaps.com/embed/517665"
                        ></iframe> */}
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="contactInfo">
                        <h2 className="contactTitle mb-4 fs-1">Contacts</h2>
                        <div className="contactText mb-3">
                           <p className="fs-6 mb-0">Phone :</p>
                           <p className="fs-5">
                              <a href="tel:0255035911">+88-02 55035911</a>
                           </p>
                        </div>
                        <div className="contactText mb-3">
                           <p className="fs-6 mb-0">Email :</p>
                           <p className="fs-5">
                              <a href="mailto:hello@ apisolutionsltd.com">
                                 hello@apisolutionsltd.com
                              </a>
                           </p>
                        </div>
                        <div className="contactText mb-3">
                           <p className="fs-6 mb-0">Address :</p>
                           <p className="fs-5">
                              House -4, Road 23/A, Block B, Banani Dhaka 1213,
                              Bangladesh
                           </p>
                        </div>
                        <div className="contactText mt-4">
                           <p className="fs-6 mb-0 text-capitalize">Friday-saturday :
                              <span className="text-danger"> closed</span>
                           </p>
                           <p className="fs-6 mb-0 text-capitalize">
                              Sunday-Thursday : 9am - 6pm
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

export default Map;
