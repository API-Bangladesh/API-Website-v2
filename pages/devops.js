import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import Devops from "../components/Modules/Expertise-inner-pages-all/Devops";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="DevOps"
            description="Get More Speed and Reliability with Our DevOps Skills. Our mad team has expertise in all industry-leading tools and methods! We also automate testing, deployment, and monitoring. This minimizes errors and boosts efficiency big time. We make sure your teams are working together like a well-oiled machine!"
         />

         <Devops />
      </>
   );
};

export default InnerPage;
