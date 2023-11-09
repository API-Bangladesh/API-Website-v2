import React from 'react'
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import Clients from "../components/Modules/Clients/Clients";
import OurProduct from "../components/Modules/OurProduct/OurProduct";

const OurProducts = () => {
  return (
    <>
      <PageBanner
        title=" Our Products"
        description="API Solutions is dedicated to providing innovative software solutions to meet the diverse needs of our customers, ensuring a commitment to best customer support, regular updates and continuous improvement. Our team is dedicated to helping you maximize the value of our products and achieve your business goals. Our products are designed with state-of-the-art technology and a user-friendly interface to ensure maximum efficiency and user satisfaction."
      />
      <OurProduct/>
      <Clients/>
    </>
  )
}

export default OurProducts