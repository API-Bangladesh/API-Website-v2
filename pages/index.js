import Head from "next/head";
import Home from "./home/Home";

const Index = () => {
   return (
      <>
         <Head>
            <title>API Solutions Ltd.</title>
         </Head>
         <Home />

         {/* <img id="betaImg" src="/beta.png" width={70} height={70} alt="img" /> */}
      </>
   );
};

export default Index;
