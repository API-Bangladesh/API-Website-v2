import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import ApplicationDevelopment from "../components/Modules/Expertise-inner-pages-all/ApplicationDevelopment";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="Application Development"
            description="Transform your digital presence with API Solutions LTD. As a leading software company, we specialize in creating innovative applications to meet diverse business needs. Count on us to turn your vision into reality, powering your success in the digital realm. Elevate your business with our cutting-edge solutions."
         />

         <ApplicationDevelopment />
      </>
   );
};

export default InnerPage;
