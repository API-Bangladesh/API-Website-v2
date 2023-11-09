import React from "react";

const SectionTitle = (Title) => {
     return (
          <div className="container">
               <div className="SecTitleBox mb-3">
                    <h1 className="SecTitle text-capitalize ">{Title.titleUpDown}</h1>
                    <p className="SecTitleBg text-uppercase ">{Title.titleUpDown}</p>
               </div>
          </div>
     );
};

export default SectionTitle;
