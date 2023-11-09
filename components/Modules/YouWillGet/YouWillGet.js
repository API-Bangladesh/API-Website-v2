import React from "react";
import SectionTitle from "../Section_title/Section_title";

const YouWillGet = () => {
   return (
      <>
         <section id="youWillGet" className="section_padding">
            <SectionTitle titleUpDown="You Will Get" />
            <div className="container">
               <ul className="youWillGetBox mt-5 mb-5">
                  <li className="youWillGetItems">
                     <span className="youWillGetSerial">
                        <img src="/youWillGet/15minutes.svg" alt="icon"/>
                     </span>
                     <p>
                        15 minutes of consultation
                     </p>
                  </li>
                  <li className="youWillGetItems">
                     <span className="youWillGetSerial">
                     <img src="/youWillGet/strict.svg" alt="icon"/>
                     </span>
                     <p>
                        Strict non-disclosure policy
                     </p>
                  </li>
                  <li className="youWillGetItems">
                     <span className="youWillGetSerial">
                     <img src="/youWillGet/timeline.svg" alt="icon"/>
                     </span>
                     <p>
                        Timeline and cost evaluation
                     </p>
                  </li>
                  <li className="youWillGetItems">
                     <span className="youWillGetSerial">
                     <img src="/youWillGet/suggestions.svg" alt="icon"/>
                     </span>
                     <p>
                        Suggestions in terms of the tech stack
                     </p>
                  </li>
                  <li className="youWillGetItems">
                     <span className="youWillGetSerial">
                     <img src="/youWillGet/action.svg" alt="icon"/>
                     </span>
                     <p>
                        Action plan to kick start your project
                     </p>
                  </li>
               </ul>
            </div>
         </section>
      </>
   );
};

export default YouWillGet;
