import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import ITSupportMaintenance from "../components/Modules/Expertise-inner-pages-all/ITSupportMaintenance";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="IT Support & Maintenance"
            description="Reliable IT enables reliable business! Take the stress out of IT management as our comprehensive support provides the expertise and responsiveness you need to thrive in the digital age. Here for you when you need us - that's our commitment."
         />

         <ITSupportMaintenance />
      </>
   );
};

export default InnerPage;
