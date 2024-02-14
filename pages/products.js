import React from 'react'
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import Clients from "../components/Modules/Clients/Clients";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const OurProducts = () => {
  return (
    <>
      <PageBanner
        pageBg="/pageBg.webp"
        title=" Our Products"
        description="API Solutions is dedicated to providing innovative software solutions to meet the diverse needs of our customers. Our goal is to create products that truly help you accomplish your business objectives. 
        We design our software with the latest technology, always keeping real-world use in mind. This ensures our products are reflexive and efficient, allowing your team to work at their best
        ."
      />
      <OurProduct/>
      <Clients/>
    </>
  )
}

export default OurProducts