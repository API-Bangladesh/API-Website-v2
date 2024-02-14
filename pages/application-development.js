import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import ApplicationDevelopment from "../components/Modules/Expertise-inner-pages-all/ApplicationDevelopment";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const InnerPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/innerPaageImg/services.webp"
            title="Application Development"
            description="We transform ideas into successful apps that engage users and grow businesses. With expertise in iOS, Android, and cross-platform development, we bring innovative portable solutions to life. Trust our skilled developers to turn your vision into a high-performing, intuitive mobile app that solves real business challenges."
         />

         <ApplicationDevelopment />
      </>
   );
};

export default InnerPage;
