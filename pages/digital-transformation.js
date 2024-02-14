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
            description="Change is never easy, but it's necessary to stay relevant. With our digital world expertise, companies can jump confidently into the digital age, ready to succeed now and in the years to come. The future belongs to the bold!"
         />

         <DigitalTransformation />
      </>
   );
};

export default InnerPage;
