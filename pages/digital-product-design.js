import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import DigitalProductDesign from "../components/Modules/Expertise-inner-pages-all/DigitalProductDesign";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="Digital Product Design"
            description="Stand out digitally with our outstanding product design. Our team creates killer user experiences that effortlessly blend up-to-date function and aesthetics. Trust us to charm your audience and showcase your brand brilliance online."
         />

         <DigitalProductDesign />
      </>
   );
};

export default InnerPage;
