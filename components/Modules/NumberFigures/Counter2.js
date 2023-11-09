import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Counter2({ className, ...rest }) {
   const [viewPortEntered, setViewPortEntered] = useState(false);

   return (
      <>
         <div className="counter-column display-2 fw-bold">
            <strong data-number="310" className="countNum position-relative">
               <CountUp {...rest} start={viewPortEntered ? null : 0} end={63}>
                  {({ countUpRef }) => {
                     return (
                        <ReactVisibilitySensor
                           active={!viewPortEntered}
                           onChange={(isVisible) => {
                              if (isVisible) {
                                 setViewPortEntered(true);
                              }
                           }}
                           delayedCall
                        >
                           <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                     );
                  }}
               </CountUp>

               <span className="fw-normal plus">+</span>
            </strong>
         </div>
      </>
   );
}

export default Counter2;
