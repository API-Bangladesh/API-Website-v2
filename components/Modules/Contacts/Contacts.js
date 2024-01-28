import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { BsCloudDownloadFill } from "react-icons/bs";
import SectionTitle from "../Section_title/Section_title";
import Checkbox from "@mui/material/Checkbox";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../utils/constants";
// import CustomReCAPTCHA from '../../../utils/ReCAPTCHA';
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../utils/notificationHelper";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Contacts = () => {
  const [isVerified, setIsVerified] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        showSuccessNotification("Success!", "Form Submitted Successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        showErrorNotification(
          "Failed!",
          "Something Went Wrong! Please Try Again."
        );
      }
    );
  };

  const onButtonClick = () => {
    fetch("").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "";
        window.open("../api-profile.pdf");
        alink.click();
      });
    });
  };
  return (
    <>
      <section id="contact" className="section_padding_top">
        <SectionTitle titleUpDown="Say Hello !" />
        <div className="container demo overflow-hidden">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="contactForm ps-0">
                <div className="container ps-0">
                  <div className="text-left mb-5">
                    <h3 className="contactFormTitle">
                      Contact us for
                      <span className="focus ms-2">
                        a free <br />
                        IT consultation
                      </span>
                    </h3>
                  </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="companyName"
                          className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                          id="company"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-md-6">
                      <div className="mb-4">
                        <input
                          type="email"
                          name="corporateEmail"
                          className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <input
                          type="number"
                          name="phone"
                          className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                          id="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <textarea
                          className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                          id="comments"
                          rows="3"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                    </div>

                    {/* <CustomReCAPTCHA onVerify={setIsVerified}/> */}

                    <div className="col-lg-12">
                      <div className="submit pt-4 d-flex align-items-center justify-content-between btn_align_res">
                        <button type="submit" className="requestBtn">
                          Send request
                        </button>

                        {/* Go button start  */}
                        <div className="form-check checkbox_btn_start">
                          <Checkbox id="CheckedText" {...label}/>
                          <label
                            className="form-check-label"
                            htmlFor="CheckedText"
                          >
                            I want to protect my data by signing an NDA
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="contactFeature py-3">
                <h4 className="pb-4">What happens next?</h4>
                <p className="featureItem">
                  <span className="featureList">1</span>
                  In 3 days an expert contacts you shortly after having analyzed
                  your business requirements.
                </p>
                <p className="featureItem">
                  <span className="featureList">2</span>
                  We sign an NDA to ensure the highest privacy level if
                  required.
                </p>
                <p className="featureItem">
                  <span className="featureList">3</span>
                  We will submit a proposal according to your requirements
                  including an estimate and timeline.
                </p>
              </div>
              <div className="off_day_schedule">
                <p className="text-capitalize schedule_title">
                  feel free to contact us
                </p>
                <ul className=" py-4 p-md-2 open_timing">
                  <li className="text-capitalize border-bottom pb-1">
                    friday-saturday :
                    <span className="text-danger"> closed</span>
                  </li>
                  <li className="text-capitalize border-bottom py-1">
                    sunday-Thursday : 9am - 6pm
                  </li>
                </ul>

                {/* Download Profile PDF Here */}

                {/* <div className="customBtn">
                  <button
                    className="fw-bold text-capitalize download_btn mb-5 ms-0 ms-0"
                    onClick={onButtonClick}
                  >
                    <BsCloudDownloadFill className="me-2 fs-5" />
                    download profile
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contacts;
