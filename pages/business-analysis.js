import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import BusinessAnalysis from "../components/Modules/Expertise-inner-pages-all/BusinessAnalysis";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="Business Analysis"
            description="Businesses these days are navigating all kinds of tricky situations and landscapes. API Solutions is all about helping businesses make smart, data-driven decisions. Our expertise means we can optimize processes, boost efficiency, and help organizations achieve sustainable growth."
         />

         <BusinessAnalysis />
      </>
   );
};

export default InnerPage;
