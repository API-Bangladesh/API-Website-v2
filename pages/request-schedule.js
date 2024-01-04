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
            description="We would love to hear from you! Please feel free to contact us for any inquiries, questions, or feedback. Our dedicated team is here to assist you and provide you with the information you need."

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
