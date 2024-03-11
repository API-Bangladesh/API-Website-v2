import Link from "next/link";
import Image from 'next/image'
import React from "react";
// import TopButton from "./../Modules/SideNav/TopButton";
import BackToTop from "../Modules/BackToTop/BackToTop";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
   return (
      <>
         <footer id="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-lg-4 myOrder1">
                     <div className="footerLogo">
                        <Link href="/">
                        <Image
                              width={120}
                              height={60}
                              className="footer_api_logo"
                              src="/logo.png"
                              alt="logo"
                           />
                        </Link>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-4 myOrder2">
                     <div className="copyRight d-flex align-items-center justify-content-center h-100">
                        <p className="fs-6 mb-0">
                           &copy; {new Date().getFullYear()} API. All Rights Reserved.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-4 myOrder3">
                     <div className="social d-flex align-items-center justify-content-end h-100">
                        <ul className="footer_social_icons">
                           <li>
                              <Link
                                 target="_blank"
                                 href="https://www.facebook.com/apisolutionsofficial"
                              >
                                 <BiLogoFacebook />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 target="_blank"
                                 href="https://www.instagram.com/apisolutionsofficial"
                              >
                                 <IoLogoInstagram />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 target="_blank"
                                 href="https://www.linkedin.com/company/apisolutionsltd"
                              >
                                 <BiLogoLinkedin />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 target="_blank"
                                 href="https://twitter.com/apisolutionsltd"
                              >
                                 <RiTwitterXFill />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 target="_blank"
                                 href="https://www.youtube.com/@apisolutions"
                              >
                                 <AiOutlineYoutube />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            {/* BackToTop Button */}
            <BackToTop />
         </footer>
      </>
   );
}
