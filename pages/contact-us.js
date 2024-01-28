import React from "react";
import ProjectEstimate from "../components/Modules/ProjectEstimate/ProjectEstimate";
import Schedule from "../components/Modules/Schedule/Schedule";
import WhatNext from "../components/Modules/WhatNext/WhatNext";
import Map from "../components/Modules/Map/Map";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import Contacts from "../components/Modules/Contacts/Contacts";

const ContactUs = () => {
   return (
      <>
         <PageBanner
            pageBg="/pageBg.webp"
            title="Contact Us"
            description="We would love to hear from you! Please feel free to contact us for any inquiries, questions, or feedback. Our dedicated team is here to assist you and provide you with the information you need."
            // showButtons={true}
            links={[
               {
               label: "Estimate Project",
               url: "/estimate-project"
            },
            {
               label: "Request Schedule",
               url: "/request-schedule"
            }
         ]}
        />
         {/* <ProjectEstimate /> */}
         {/* <Schedule /> */}
         {/* <WhatNext /> */}
         <Contacts />
         <Map />
      </>
   );
};

export default ContactUs;
