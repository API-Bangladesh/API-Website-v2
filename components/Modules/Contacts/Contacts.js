import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
// import { BsCloudDownloadFill } from "react-icons/bs";
import classEase from "classease";
import SectionTitle from "../Section_title/Section_title";
// import Checkbox from "@mui/material/Checkbox";
import CustomReCAPTCHA from "../../../utils/ReCAPTCHA";
import { submitContactUs } from "../../../lib/submit-form";
import Notification from "../Notification";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const initialFormData = {
  companyName: "",
  name: "",
  corporateEmail: "",
  phone: "",
  comments: "",
  protectDataByNDA: false,
};

const Contacts = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);

  const refSection = useRef(null);

  const validateForm = () => {
    const errors = {};

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name cannot be empty";
    }

    if (!formData.name.trim()) {
      errors.name = "Name cannot be empty";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.corporateEmail.trim()) {
      errors.corporateEmail = "Email cannot be empty";
    } else if (!emailRegex.test(formData.corporateEmail)) {
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

    if (!isVerified) {
      errors.verification = "Please verify the reCAPTCHA";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    setHasError(false);
  };

  const handleVerificationAttempted = () => {
    setErrors((prevErrors) => ({ ...prevErrors, verification: undefined }));
    setHasError(false);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsVerified(false);
    setErrors({});
    setHasError(false);
    setIsLoading(false);
    setShouldReset(true);
    // setNotification(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      setShouldReset(false);

      try {
        const data = await submitContactUs(formData);

        console.log(data);

        if (data?.status === "success") {
          setNotification({
            show: true,
            type: "success",
            message: data?.message || "Form Submitted Successfully!",
          });
        } else if (data?.status === "error") {
          setNotification({
            show: true,
            type: "error",
            message: data?.message || "Something went wrong!",
          });
        }
      } catch (error) {
        console.error(error);
        setNotification({
          show: true,
          type: "error",
          message: "An error occurred. Please try again later.",
        });
      } finally {
        resetForm();
        setIsLoading(false);

        // // Scroll to the refSection
        // if (refSection.current) {
        //   refSection.current.scrollIntoView({ behavior: "smooth" });
        // }

        // Scroll to the refSection with an additional offset of 50 pixels
        if (refSection.current) {
          // Get the top position of the refSection
          const topPosition = refSection.current.getBoundingClientRect().top;

          // Scroll to the top position with an additional offset of 50 pixels
          window.scrollTo({
            top: window.scrollY + topPosition - 100,
            behavior: "smooth", // You can use "auto" or "smooth" for smooth scrolling
          });
        }

        setTimeout(() => {
          setNotification(null);
        }, 5500);
      }
    } else {
      setHasError(true);
      console.log("Form validation failed");
    }
  };

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
      <div ref={refSection}></div>

      <section id="contact" className="section_padding_top">
        {notification?.show ? (
          <div className="container">
            <Notification
              type={notification?.type}
              message={notification?.message}
            />
          </div>
        ) : (
          ""
        )}

        <SectionTitle titleUpDown="Say Hello!" />

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

                <form onSubmit={handleSubmit} method="POST">
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
                          onChange={(e) => handleChange(e)}
                          readOnly={isLoading}
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
                          onChange={(e) => handleChange(e)}
                          readOnly={isLoading}
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
                          onChange={(e) => handleChange(e)}
                          readOnly={isLoading}
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
                          onChange={(e) => handleChange(e)}
                          readOnly={isLoading}
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
                          onChange={(e) => handleChange(e)}
                          readOnly={isLoading}
                        ></textarea>
                        {errors.comments && (
                          <span className="invalid-feedback">
                            {errors.comments}
                          </span>
                        )}
                      </div>
                    </div>

                    <CustomReCAPTCHA
                      onAttempted={handleVerificationAttempted}
                      onVerify={setIsVerified}
                      shouldReset={shouldReset}
                    />

                    {errors.verification && (
                      <span className="invalid-feedback d-block">
                        {errors.verification}
                      </span>
                    )}

                    <div className="col-lg-12">
                      <div className="submit pt-4 d-flex align-items-center justify-content-between btn_align_res">
                        <button
                          type="submit"
                          className="requestBtn d-flex justify-content-center align-items-center"
                          disabled={isLoading || notification?.show}
                        >
                          {isLoading && (
                            <div className="api-form-loader">
                              <Spinner
                                animation="border"
                                size="sm"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </Spinner>
                            </div>
                          )}
                          Send request
                        </button>

                        {/* Go button start  */}
                        <div className="form-check checkbox_btn_start">
                          {/* <Checkbox id="CheckedText" {...label}/> */}
                          <Form.Check
                            type="checkbox"
                            id="CheckedText"
                            label="I want to protect my data by signing an NDA"
                            name="protectDataByNDA"
                            checked={formData.protectDataByNDA}
                            onChange={(e) => handleChange(e)}
                            disabled={isLoading}
                          />
                          {/* <label
                            className="form-check-label"
                            htmlFor="CheckedText"
                          >
                            I want to protect my data by signing an NDA
                          </label> */}
                        </div>
                      </div>
                      {hasError && (
                        <span className="invalid-feedback d-block mt-2">
                          Please fill in all required fields correctly.
                        </span>
                      )}
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
