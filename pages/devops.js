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
            description="Benefit from our DevOps proficiency as we streamline development processes, foster collaboration, and expedite software delivery. Armed with industry-leading tools and methodologies, we implement CI/CD pipelines, ensuring swift and reliable releases. Our adept team automates testing, deployment, and monitoring, minimizing errors and enhancing efficiency. Embrace our DevOps expertise to instill greater agility, scalability, and flexibility into your business's software development and deployment workflows."
         />

         <Devops />
      </>
   );
};

export default InnerPage;
