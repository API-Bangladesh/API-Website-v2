import React from "react";
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import Services from "../components/Modules/Services/Services";
import WorkProcess from "../components/Modules/WorkProcess/WorkProcess";
import Clients from "../components/Modules/Clients/Clients";
import ServicePage from "../components/Modules/PortfiloGallery/PortfiloGallery";
import Pricing from "../components/Modules/Pricing/Pricing";

const ServicesPage = () => {
  return (
    <>
      <PageBanner
        title=" Our Services"
        description="As a software company, we are committed to excellence, innovation and customer satisfaction by providing cutting-edge solutions that drive growth, efficiency and innovation. Our mission is to empower your business with powerful software solutions that drive success and growth. Our diverse range of services is tailored to meet the unique needs of businesses and organizations across industries."
      />
      <Services/>
      <WorkProcess/>
      <Pricing/>
      <ServicePage/>
      {/* <Clients/> */}
    </>
  );
};

export default ServicesPage;
