import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Counter3({ className, ...rest }) {
   const [viewPortEntered, setViewPortEntered] = useState(false);

   return (
      <>
         <div className="counter-column display-2 fw-bold">
            <strong data-number="310" className="countNum position-relative">
               <CountUp {...rest} start={viewPortEntered ? null : 0} end={82}>
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

               <span className="fw-normal fs-5 percent">%</span>
            </strong>
         </div>
      </>
   );
}

export default Counter3;
