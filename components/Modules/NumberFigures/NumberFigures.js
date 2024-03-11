import React from "react";
import Image from 'next/image'
import SectionTitle from "../Section_title/Section_title";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";

const NumberFigures = () => {
  return (
    <>
      <section id="numberFigures" className="section_padding">
        <SectionTitle titleUpDown="Numbers & Figures " />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-7 d-flex justify-content-center">
              <div className="wItem position-relative">
                  <Image
                    src="/welcome.webp"
                    alt="img"
                    className="welcpmeImg img-fluid"
                    width={300}
                    height={300}
                  />

                <div className="yearBg">
                  <h1 className="yearNum">7</h1>
                  <p className="mb-3">Years of <br/> experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-5 numbers_bg">
                <div className="row customGatter gy-4 gx-5 gx-xxl-0 justify-content-end">
                  <div className="col-md-6 col-sm-6">
                    <div className="numberBox text-center position-relative">
                      <Counter1 />
                      <p className="mb-0">Team Members</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="numberBox text-center position-relative">
                      <Counter2 />
                      <p className="mb-0">Satisfied Customers</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="numberBox text-center position-relative">
                      <Counter3 />
                      <p className="mb-0">Software Engineers</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="numberBox text-center position-relative">
                      <Counter4 />
                      <p className="mb-0">Customer Retention Rate</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default NumberFigures;
