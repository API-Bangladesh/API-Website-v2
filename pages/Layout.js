import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ChatWidget from "../components/Modules/ChatWidget/ChatWidget";


 function Layout({children}) {
  return (
    <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
    <Header/>
    {children}
    <Footer/>
    <ChatWidget />
    </>
  )
}

export default Layout