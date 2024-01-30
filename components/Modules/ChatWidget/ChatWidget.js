import React, { useState } from "react";
import Link from 'next/link'
import { TiMessages } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { LiaSmsSolid } from "react-icons/lia";

const ChatWidget = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };


  return (
    <>
      <section>
          {isShown && (
              <div className="chatOptions">
                <Link href="/contact-us" className="icons shadow mb-3" onClick={handleClick}>
                  <LiaSmsSolid size={'22px'} className="text-white" />
                </Link>
                <Link href="tel:+8801686449007" className="icons shadow mb-3" onClick={handleClick}>
                  <IoCallOutline size={'22px'} className="text-white" />
                </Link>
                <Link href="/" className="icons shadow mb-3" onClick={handleClick}>
                  <LiaSmsSolid size={'22px'} className="text-white" />
                </Link>

              </div>
            )}

        <div className="ChatBox">
            <button
              onClick={handleClick}
              className="ChatBtn rounded-pill shadow border-0"
            >
              <LuMessagesSquare
                size={"50px"}
                color={"white"}
              />
            </button>
        </div>
      </section>
    </>
  );
};


export default ChatWidget;
