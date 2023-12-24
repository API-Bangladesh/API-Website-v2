import React from "react";
import Schedule from "../components/Modules/Schedule/Schedule";
import WhatNext from "../components/Modules/WhatNext/WhatNext";
import PageBanner from "../components/Modules/PageBanner/PageBanner";

const ContactUs = () => {
   return (
      <>
         <PageBanner
            pageBg="/pageBg.jpg"
            title="Request Schedule"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium quidem veritatis eum, explicabo iste amet quam placeat porro minus exercitationem voluptatem ex tempore temporibus nemo aperiam? Quam, odit beatae."

            links={[
               {
               label: "Estimate Project",
               url: "/estimate-project"
            },
            {
               label: "Say Hello !",
               url: "/contact-us"
            }
         ]}
           
        />

      {/* Components here  */}
         <Schedule />
         <WhatNext />
      </>
   );
};

export default ContactUs;
