import React from "react";
import ProjectEstimate from "../components/Modules/ProjectEstimate/ProjectEstimate";
import PageBanner from "../components/Modules/PageBanner/PageBanner";

const ContactUs = () => {
   return (
      <>
         <PageBanner
            pageBg="/pageBg.jpg"
            title="Estimate Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium quidem veritatis eum, explicabo iste amet quam placeat porro minus exercitationem voluptatem ex tempore temporibus nemo aperiam? Quam, odit beatae."
            
            links={[
               {
               label: "Say Hello !",
               url: "/contact-us"
            },
            {
               label: "Request Schedule",
               url: "/request-schedule"
            }
         ]}
           
        />

        {/* Components here  */}
         <ProjectEstimate />
         
      </>
   );
};

export default ContactUs;
