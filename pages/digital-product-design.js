import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import DigitalProductDesign from "../components/Modules/Expertise-inner-pages-all/DigitalProductDesign";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.jpg"
            title="Digital Product Design"
            description="Unleash your brand's digital brilliance with our expertise in digital product design, and our software company's unmatched expertise in creating impressive user experiences. We specialize in seamlessly combining functionality with aesthetics, making your digital products stand out in today's fiercely competitive landscape. Trust us to enhance your digital presence and captivate your audience with innovative design solutions."
         />

         <DigitalProductDesign />
      </>
   );
};

export default InnerPage;
