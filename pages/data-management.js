import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import DataManagement from "../components/Modules/Expertise-inner-pages-all/DataManagement";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="Data Management"
            description="We know companies today are practically drowning in data. But how much are you really using it to drive smart decisions? That's where we come in. With us, you get secure, organized data storage, efficient processing, and most importantly powerful insights you can act on. We show even messy data can turn into clear competitive advantages sometimes!"
         />

         <DataManagement />
      </>
   );
};

export default InnerPage;
