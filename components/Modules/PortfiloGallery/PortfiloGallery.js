import React from "react";
import SectionTitle from "../Section_title/Section_title";

import FilterGallery from "../FilterGallery/FilterGallery";

const ServicePage = () => {
  return (
    <>
      
      <section id="portfolio" className="section_padding portfolio">
        <SectionTitle titleUpDown="Portfolio" />
        <FilterGallery />
      </section>
    </>
  );
};

export default ServicePage;
