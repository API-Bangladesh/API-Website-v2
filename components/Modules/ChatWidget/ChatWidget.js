import React, { useState } from "react";
import { TiMessages } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";
import { Button } from "react-bootstrap";
import SideDiv from "./RequestForm";
import CallUs from "./CallUs";

const ChatWidget = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <section>
        <div className="toggle_btn">
          {isShown && (
            <div>
              <div className="icons shadow mb-3">
                <SideDiv />
              </div>
              <div className="icons shadow mb-3">
                <CallUs />
              </div>
              <div className="icons shadow mb-3">
                <Button className="border-0 p-0 m-0 bg-transparent">
                  <TiMessages size={"50px"} className="first_icon" />
                </Button>
              </div> 
            </div>
          )}

          {isShown && <Box />}
          <div className="">
            <button
              onClick={handleClick}
              className="bg p-3 rounded-pill shadow border-0"
            >
              <LuMessagesSquare
                size={"25px"}
                color="white"
                className="main_icon"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
function Box() {
  return <div>{/* <h2>Box</h2> */}</div>;
}

export default ChatWidget;
