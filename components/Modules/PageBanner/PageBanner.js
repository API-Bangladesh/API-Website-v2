import React, { Fragment } from "react";
import Link from "next/link";

const PageBanner = ({ title, description, description2, links, pageBg }) => {
   return (
      <>
         <section id="pageBanner" style={{ backgroundImage: `url(${pageBg})` }}>
            <div className="bannerText px-5 py-4">
               <h1 className="bannerTitle fw-bold pb-4">{title}</h1>
               <p className="bannerDescription">{description}</p>
               <p className="bannerDescription mt-3">{description2}</p>
               {links && (
                  <Fragment>
                     {links.map((l, i) => (
                        <Link
                           key={i}
                           className="requestBtn mt-4 me-4"
                           href={l?.url}
                        >
                           {l?.label}
                        </Link>
                     ))}
                     {/*                      
                     <Link className="requestBtn mt-4" href="#schedule">
                        
                     </Link> */}
                  </Fragment>
               )}
            </div>
         </section>
      </>
   );
};

export default PageBanner;
