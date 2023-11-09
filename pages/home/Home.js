import React from "react";
import Slider from "../../components/Modules/Slider/Slider";
import OurExpertise from "../../components/Modules/OurExpertise/OurExpertise";
import Services from "../../components/Modules/Services/Services";
import WorkProcess from "../../components/Modules/WorkProcess/WorkProcess";
import Technology from "../../components/Modules/Technology/Technology";
import AboutUs from "../../components/Modules/AboutUs/AboutUs";
import Contacts from "../../components/Modules/Contacts/Contacts";
import SideNav from "../../components/Modules/SideNav/SideNav";
import NumberFigures from "../../components/Modules/NumberFigures/NumberFigures";
import CoreValuesTwo from "../../components/Modules/CoreValuesTwo/CoreValuesTwo";
import Industry from "../../components/Modules/Industry/Industry";
import Clients from "../../components/Modules/Clients/Clients";
import WorkTogether from "../../components/Modules/WorkTogether/WorkTogether";
import ClientReview from "../../components/Modules/ClientReview/ClientReview";
import ChatWidget from "../../components/Modules/ChatWidget/ChatWidget";




const Home = () => {
   return (
      <>
         <Slider />
         <AboutUs />
         <NumberFigures />
         <OurExpertise />
         <CoreValuesTwo />
         <Services />
         <Industry />
         <Technology />
         <WorkProcess />
         <Clients />
         <ClientReview />
         <WorkTogether />
         {/* <SideNav /> */}
         <Contacts />
         <ChatWidget />
      </>
   );
};

export default Home;
