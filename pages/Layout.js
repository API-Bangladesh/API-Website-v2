import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ChatWidget from "../components/Modules/ChatWidget/ChatWidget";


 function Layout({children}) {
  return (
    <>    
    <Header/>
    {children}
    <Footer/>
    <ChatWidget />
    </> 
  )
}

export default Layout