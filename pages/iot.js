import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import IOT from "../components/Modules/Expertise-inner-pages-all/IOT";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="IoT (Internet of Things)"
            description="IoT's potential is endless, but it can be tricky to utilize. We thrive on the challenge of turning complex connected ecosystems into an asset for your business. Our creative ways to apply next-gen technology like IoT will help you to drive real results. Consider us your IoT tour guides!"
         />

         <IOT />
      </>
   );
};

export default InnerPage;
