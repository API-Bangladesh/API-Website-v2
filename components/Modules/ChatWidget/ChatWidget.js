import { useState, useEffect } from "react";
import Link from 'next/link'
import { TiMessages } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { LiaSmsSolid } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";

const ChatWidget = () => {

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  // Loop through 3 items
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentItemIndex((index) => (index + 1) % 3);
     }, 3000); 
 
     return () => clearInterval(interval);
   }, []);
   // Loop through 3 items

  return (
    <>
      <section>
          {isShown && (
              <div className="chatOptions">
                <Link href="/contact-us" className="icons mb-3" onClick={handleClick}>
                  <LiaSmsSolid size={'22px'} className="text-white" />
                </Link>
                <Link href="tel:+8801686449007" className="icons mb-3" onClick={handleClick}>
                  <IoCallOutline size={'22px'} className="text-white" />
                </Link>
                <a href="https://wa.me/8801551761805?text=Hello" target="_blank" className="icons mb-3" onClick={handleClick}>
                  <MdWhatsapp size={'22px'} className="text-white" />
                </a>
              </div>
            )}

        <div className="ChatBox">
            <button
              onClick={handleClick}
              className="fadeOutBackground ChatBtn rounded-pill border-0"
            >
              <div className={`item ${currentItemIndex === 0 ? "fadeIn" : "fadeOut"}`}>
                <LuMessagesSquare
                  size={"25px"}
                  color={"white"}
                />
              </div>
              <div className={`item ${currentItemIndex === 1 ? "fadeIn" : "fadeOut"}`}>
              <IoCallOutline
                  size={"25px"}
                  color={"white"}
                />
              </div>
              <div className={`item ${currentItemIndex === 2 ? "fadeIn" : "fadeOut"}`}>
              <MdWhatsapp
                  size={"25px"}
                  color={"white"}
                />
              </div>

            </button>
        </div>
      </section>
    </>
  );
};


export default ChatWidget;
