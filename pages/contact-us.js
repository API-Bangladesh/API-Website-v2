import React from "react";
import ProjectEstimate from "../components/Modules/ProjectEstimate/ProjectEstimate";
import Schedule from "../components/Modules/Schedule/Schedule";
import WhatNext from "../components/Modules/WhatNext/WhatNext";
import Map from "../components/Modules/Map/Map";
import PageBanner from "../components/Modules/PageBanner/PageBanner";

const ContactUs = () => {
   return (
      <>
         <PageBanner
            title="Contact Us"
            description="We would love to hear from you! Please feel free to contact us for any inquiries, questions, or feedback. Our dedicated team is here to assist you and provide you with the information you need."
            showButtons={true}
        />
         <ProjectEstimate />
         <Schedule />
         <WhatNext />
         <Map />
      </>
   );
};

export default ContactUs;
