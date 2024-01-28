import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import DigitalTransformation from "../components/Modules/Expertise-inner-pages-all/DigitalTransformation";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="Digital Transformation"
            description="In today's rapidly evolving business landscape, staying ahead requires more than just incremental changes – it demands a complete shift in mindset and operations. At API Solutions, we empower businesses to embrace the future through our transformative Digital Transformation services."
         />

         <DigitalTransformation />
      </>
   );
};

export default InnerPage;
