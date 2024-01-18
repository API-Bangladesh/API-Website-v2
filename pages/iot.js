import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import IOT from "../components/Modules/Expertise-inner-pages-all/IOT";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.jpg"
            title="IoT (Internet of Things)"
            description="Leveraging our profound IoT expertise, we engineer cutting-edge solutions harnessing the power of connected devices and data-driven insights. Transform your business with our innovative approach to the Internet of Things."
         />

         <IOT />
      </>
   );
};

export default InnerPage;
