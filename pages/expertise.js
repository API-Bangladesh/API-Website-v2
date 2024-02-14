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
        pageBg="/pageBg.webp"
        title=" Our Expertise"
        description="Our broad expertise encompasses extensive skills and capabilities that empower us to deliver elevated software solutions that meet diverse needs both on and off the internet. We aim to be a trusted partner for businesses seeking high-quality software solutions that enable growth and success."
      />
      <OurExpertise/>
      <IndustriesTwo/>
      <Technology/>
      <Clients/>
    </>
  )
}

export default Expertise