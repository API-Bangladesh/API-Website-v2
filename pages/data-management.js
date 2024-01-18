import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import DataManagement from "../components/Modules/Expertise-inner-pages-all/DataManagement";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.jpg"
            title="Data Management"
            description="Unlock the full potential of your data with our software company's advanced expertise in Data Management. We specialize in orchestrating seamless data workflows, ensuring secure storage, efficient processing, and insightful analysis for informed decision-making."
         />

         <DataManagement />
      </>
   );
};

export default InnerPage;
