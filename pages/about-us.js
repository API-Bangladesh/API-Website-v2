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
            pageBg="/pageBg.webp"
            title="About Us"
            description="API Solutions specializes in tailored software prototyping, development, testing, and maintenance. We offer cost-effective solutions customized to your needs. Be it a rapid prototype, AI system, or support for existing apps, let's build software that accomplishes your goals!"
         />
         <Mission />
         {/* <NumberFigures /> */}
         <ManagementMember />
         <Cooperation />
         <YouWillGet />
         {/* <AwardCertification /> */}
         <Clients />
      </>
   );
};

export default AboutUsPage;


