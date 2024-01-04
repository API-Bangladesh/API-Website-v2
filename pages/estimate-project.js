import React from "react";
import ProjectEstimate from "../components/Modules/ProjectEstimate/ProjectEstimate";
import PageBanner from "../components/Modules/PageBanner/PageBanner";

const ContactUs = () => {
   return (
      <>
         <PageBanner
            pageBg="/pageBg.jpg"
            title="Estimate Project"
            description="We would love to hear from you! Please feel free to contact us for any inquiries, questions, or feedback. Our dedicated team is here to assist you and provide you with the information you need."
            
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
