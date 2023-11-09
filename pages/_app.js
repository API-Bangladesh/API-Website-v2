import Layout from './Layout';
import '@/styles/globals.css'
import '../styles/normalize.css';
import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SSRProvider } from 'react-bootstrap';


import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Section_title.css';
import '../styles/OurExpertise.css';
import '../styles/Slider.css';
import '../styles/Mission.css';
import '../styles/CoreValues.css';
import '../styles/Services.css';
import '../styles/WorkProcess.css';
import '../styles/Technology.css';
import '../styles/AboutUs.css'
import '../styles/AboutUsPage.css'
import '../styles/Products.css'
import '../styles/Contacts.css'
import '../styles/NumberFigures.css'
import '../styles/CoreValuesTwo.css'
import '../styles/Industry.css'
import '../styles/SideNav.css'
import '../styles/Clients.css'
import '../styles/WorkTogether.css'

import '../styles/ClientsReview.css'
import '../styles/Pricing.css'

import '../styles/Cooperation.css'
import '../styles/ChatWidget.css'
import '../styles/SideDiv.css';
import '../styles/ProjectEstimate.css';
import '../styles/FilterGallery.css';

import '../styles/ManagementMember.css';
import '../styles/WhatNext.css';
import '../styles/Map.css';
import '../styles/AwardCertification.css';

import '../styles/Blog.css';
import '../styles/YouWillGet.css';

import '../styles/Schedule.css';

import '../styles/AboutUsSVGAnimation.css';





export default function App({ Component, pageProps }) {

  return (
    <>
    <SSRProvider>
      <Layout>
      {/* For loader  */}
      {/* <NextNProgress options={{ easing: 'ease', speed: 500 }} /> */} 
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
    </>
  )
}




