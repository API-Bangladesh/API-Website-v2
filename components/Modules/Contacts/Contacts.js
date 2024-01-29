import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
// import emailjs from "@emailjs/browser";
// import Link from "next/link";
// import { BsCloudDownloadFill } from "react-icons/bs";
import classEase from "classease";
import SectionTitle from "../Section_title/Section_title";
// import Checkbox from "@mui/material/Checkbox";
// import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../utils/constants";
// import CustomReCAPTCHA from '../../../utils/ReCAPTCHA';
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../utils/notificationHelper";
import submitForm from "../../../lib/submit-form";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Contacts = () => {
  const [isVerified, setIsVerified] = useState(false);
  // const form = useRef();

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    corporateEmail: "",
    phone: "",
    comments: "",
    protectDataByNDA: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name cannot be empty";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.corporateEmail)) {
      errors.corporateEmail = "Please enter a valid email address";
    }

    const phoneRegex = /^01\d{9}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone cannot be empty";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone =
        "Please enter a valid phone number (starting with 01 and length 11)";
    }

    if (!formData.comments.trim()) {
      errors.comments = "Comments cannot be empty";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      console.log(formData);
      try {
        // Simulate network delay (you can remove this in production)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const data = await submitForm(formData);
        console.log(data);

        setSubmissionStatus("success");
        showSuccessNotification("Success!", "Form Submitted Successfully!");

        // Handle success or display success messages to the user
      } catch (error) {
        console.error(error);
        setSubmissionStatus("error");
        showErrorNotification(
          "Failed!",
          "Something Went Wrong! Please Try Again."
        );
        // Handle server-side errors or display error messages to the user
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Form validation failed");
      // Optionally display validation error messages to the user
    }
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
  //     (result) => {
  //       showSuccessNotification("Success!", "Form Submitted Successfully!");
  //       e.target.reset();
  //     },
  //     (error) => {
  //       console.log(error.text);
  //       showErrorNotification(
  //         "Failed!",
  //         "Something Went Wrong! Please Try Again."
  //       );
  //     }
  //   );
  // };

  // const onButtonClick = () => {
  //   fetch("").then((response) => {
  //     response.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob);
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "";
  //       window.open("../api-profile.pdf");
  //       alink.click();
  //     });
  //   });
  // };

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
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="position-relative"
                >
                  {isLoading && (
                    <div className="api-form-loader">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  )}

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="companyName"
                          className={classEase(
                            "form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1",
                            errors.companyName ? "is-invalid" : ""
                          )}
                          id="company"
                          placeholder="Company"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                        {errors.companyName && (
                          <span className="invalid-feedback d-block">
                            {errors.companyName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="name"
                          className={classEase(
                            "form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1",
                            errors.name ? "is-invalid" : ""
                          )}
                          id="name"
                          placeholder="Name"
                          // required
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <span className="invalid-feedback d-block">
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-md-6">
                      <div className="mb-4">
                        <input
                          // type="email"
                          type="text"
                          name="corporateEmail"
                          className={classEase(
                            "form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1",
                            errors.corporateEmail ? "is-invalid" : ""
                          )}
                          id="email"
                          placeholder="Email"
                          // required
                          value={formData.corporateEmail}
                          onChange={handleChange}
                        />
                        {errors.corporateEmail && (
                          <span className="invalid-feedback d-block">
                            {errors.corporateEmail}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <input
                          type="number"
                          name="phone"
                          className={classEase(
                            "form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1",
                            errors.phone ? "is-invalid" : ""
                          )}
                          id="phone"
                          placeholder="Phone"
                          // required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className="invalid-feedback d-block">
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <textarea
                          className={classEase(
                            "form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1",
                            errors.comments ? "is-invalid" : ""
                          )}
                          id="comments"
                          rows="3"
                          placeholder="Comments"
                          name="comments"
                          value={formData.comments}
                          onChange={handleChange}
                        ></textarea>
                        {errors.comments && (
                          <span className="invalid-feedback">
                            {errors.comments}
                          </span>
                        )}
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
                          {/* <Checkbox id="CheckedText" {...label}/> */}
                          <Form.Check // prettier-ignore
                            type="checkbox"
                            id="CheckedText"
                            label="I want to protect my data by signing an NDA"
                            name="protectDataByNDA"
                            checked={formData.protectDataByNDA}
                            onChange={handleChange}
                          />
                          {/* <label
                            className="form-check-label"
                            htmlFor="CheckedText"
                          >
                            I want to protect my data by signing an NDA
                          </label> */}
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
