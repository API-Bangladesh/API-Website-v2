import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import ITSupportMaintenance from "../components/Modules/Expertise-inner-pages-all/ITSupportMaintenance";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="IT Support & Maintenance"
            description="Experience uninterrupted business operations with our software company's unmatched expertise in IT support and maintenance. We go beyond problem-solving, offering comprehensive services that ensure optimal performance, security, and continuous evolution of your IT infrastructure."
         />

         <ITSupportMaintenance />
      </>
   );
};

export default InnerPage;
