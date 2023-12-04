import React from 'react'
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import OurExpertise from "../components/Modules/OurExpertise/OurExpertise";
import Technology from "../components/Modules/Technology/Technology";
import Clients from "../components/Modules/Clients/Clients";
import IndustriesTwo from '../components/Modules/IndustriesTwo/IndustriesTwo';

const Expertise = () => {
  return (
    <>
       <PageBanner
        pageBg="/pageBg.jpg"
        title=" Our Expertise"
        description="With our strong expertise, dedication to innovation and customer-centric approach, we strive to be a reliable and trusted partner for businesses looking for high-quality software solutions that drive growth and success. As a software company, our expertise encompasses a wide range of skills and capabilities, enabling us to deliver high-quality software solutions to meet diverse needs."
      />
      <OurExpertise/>
      <IndustriesTwo/>
      <Technology/>
      <Clients/>
    </>
  )
}

export default Expertise