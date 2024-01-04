import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import BusinessAnalysis from "../components/Modules/Expertise-inner-pages-all/BusinessAnalysis";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.jpg"
            title="Business Analysis"
            description="Navigating the complexities of business landscapes, our software company excels in business analytics and strategic decision-making. Using data insights, we empower organizations to optimize processes, increase efficiency, and achieve sustainable growth through our unmatched expertise."
         />

         <BusinessAnalysis />
      </>
   );
};

export default InnerPage;
