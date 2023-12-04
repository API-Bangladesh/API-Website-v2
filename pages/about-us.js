import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import NumberFigures from "../components/Modules/NumberFigures/NumberFigures";
import Mission from "../components/Modules/Mission/Mission";
import ManagementMember from "../components/Modules/ManagementMember/ManagementMember";
import Cooperation from "../components/Modules/Cooperation/Cooperation";
import YouWillGet from "../components/Modules/YouWillGet/YouWillGet";
// import AwardCertification from "../components/Modules/AwardCertification/AwardCertification";
import Clients from "../components/Modules/Clients/Clients";

const AboutUsPage = () => {
   return (
      <>
         <PageBanner
            pageBg="/pageBg.jpg"
            title="About Us"
            description="API Solutions is a software development company, specializing in cost-effective rapid prototyping, full-cycle software development, testing/QA, sustaining existing software, supporting infrastructure and AI-based IoT product development. We offer tailored solutions to individual customer needs, whether at the Primary, Medium, Built, or post-Built stage, with a focus on care, dedication, and sincerity."
         />
         <Mission />
         <NumberFigures />
         <ManagementMember />
         <Cooperation />
         <YouWillGet />
         {/* <AwardCertification /> */}
         <Clients />
      </>
   );
};

export default AboutUsPage;


