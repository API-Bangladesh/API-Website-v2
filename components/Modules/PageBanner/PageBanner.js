import React, { Fragment } from "react";
import Link from "next/link";

const PageBanner = ({ title, description, description2, showButtons }) => {
   return (
      <>
         <section id="pageBanner">
            <div className="bannerText px-5 py-4">
               <h1 className="bannerTitle fw-bold pb-4">{title}</h1>
               <p className="bannerDescription">{description}</p>
               <p className="bannerDescription mt-3">{description2}</p>
               {showButtons && (
                  <Fragment>
                     <Link
                        className="requestBtn mt-4 me-4"
                        href="#projectEstimate"
                     >
                        Estimate Project
                     </Link>
                     <Link className="requestBtn mt-4" href="#schedule">
                        Request Schedule
                     </Link>
                  </Fragment>
               )}
            </div>
         </section>
      </>
   );
};

export default PageBanner;
