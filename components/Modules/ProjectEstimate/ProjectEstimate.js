import React, { useState, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Col, Container, Form, Row } from "react-bootstrap";
import classEase from "classease";
import SectionTitle from "../Section_title/Section_title";
import { ImAttachment } from "react-icons/im";
import CustomReCAPTCHA from "../../../utils/ReCAPTCHA";
import { submitProjectEstimate } from "../../../lib/submit-form";
import Notification from "../Notification";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const initialFormData = {
  challenges: {
    rAndD: false,
    systemArchitecture: false,
    uiUx: false,
    development: false,
    qa: false,
    integrations: false,
    maintenance: false,
    consultancy: false,
    // ... other challenges
  },
  alreadyHave: {
    idea: false,
    specification: false,
    uiUx: false,
    code: false,
    // ... other already have options
  },
  timeframe: {
    hiringNow: false,
    hiringWithinOneMonth: false,
    hiringWithinThreeMonths: false,
    hiringLater: false,
    // ... other timeframe options
  },
  projectType: "", // 'New' or 'Existing'
  yourRole: "", // 'Individual' or 'Company'
  servicesNeeded: "", // the selected service option
  preferredContactTime: "", // 'Morning', 'Noon', 'Afternoon'
  attachment: null,
  projectDetails: "",
  userDetails: {
    name: "",
    email: "",
    phone: "",
  },
  newsletterSubscription: false,
};

const ProjectEstimate = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);

  const refSection = useRef(null);

  const handleCheckboxChange = (category, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: !prevData[category][name],
      },
    }));
  };

  const handleRadioChange = (category, key) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...Object.keys(prevData[category]).reduce((acc, categoryKey) => {
          acc[categoryKey] = key === categoryKey;
          return acc;
        }, {}),
      },
    }));
  };

  const handleSelectChange = (e, key) => {
    const selected = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: selected,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [key]: undefined }));
  };

  const handleUserDetailsChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      userDetails: {
        ...prevFormData.userDetails,
        [name]: value,
      },
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    files ? console.log(files) : "";

    // Check if the input is a checkbox
    const inputValue =
      type === "file" ? files[0] : type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleClearAttachment = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      attachment: null,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, attachment: undefined }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.userDetails.name.trim()) {
      errors.name = "Name cannot be empty";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.userDetails.email.trim()) {
      errors.email = "Email cannot be empty";
    } else if (!emailRegex.test(formData.userDetails.email)) {
      errors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^01\d{9}$/;
    if (!formData.userDetails.phone.trim()) {
      errors.phone = "Phone cannot be empty";
    } else if (!phoneRegex.test(formData.userDetails.phone)) {
      errors.phone =
        "Please enter a valid phone number (starting with 01 and length 11)";
    }

    if (!formData.projectDetails.trim()) {
      errors.projectDetails = "Write details about your project";
    }

    if (!formData.projectType.trim()) {
      errors.projectType = "Select your project type";
    }

    if (!formData.yourRole.trim()) {
      errors.yourRole = "Select your role";
    }

    if (!formData.preferredContactTime.trim()) {
      errors.preferredContactTime = "Select preferred contact time";
    }

    // file validation
    const allowedTypes = ["application/pdf"];
    const maxSize = 1024 * 1024; // 1MB

    if (
      formData.attachment &&
      !allowedTypes.includes(formData.attachment?.type)
    ) {
      errors.attachment = "File type must be PDF.";
    }

    if (formData.attachment && formData.attachment?.size > maxSize) {
      errors.attachment = "File size must be less than 1MB.";
    }

    if (!isVerified) {
      errors.verification = "Please verify the reCAPTCHA";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleVerificationAttempted = () => {
    setErrors((prevErrors) => ({ ...prevErrors, verification: undefined }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsVerified(false);
    setErrors({});
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
        const formDataToSend = new FormData();

        // Append form data
        Object.entries(formData).forEach(([key, value]) => {
          if (key !== "attachment") {
            formDataToSend.append(key, JSON.stringify(value));
          }
        });

        // Append image file
        formDataToSend.append("attachment", formData.attachment);
        console.log("Form data", formDataToSend);

        const data = await submitProjectEstimate(formDataToSend);

        // console.log(data);

        // return;
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
      console.log("Form validation failed");
    }
  };

  return (
    <>
      <div ref={refSection}></div>

      <section id="projectEstimate" className="section_padding requirement">
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

        <SectionTitle titleUpDown="Contact Form" />

        <Container>
          <div className="d-flex justify-content-center">
            <Col lg={9}>
              <Form
                onSubmit={handleSubmit}
                method="POST"
                enctype="multipart/form-data"
              >
                <Row>
                  <p className="position-relative ms-2 mb-4 mt-3 ps-5">
                    <span className="estimateNumber rounded-1 me-2">1</span>
                    <span className="fw-bolder fs-5">
                      What are your main challenges that we can help you with?
                    </span>
                  </p>

                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="rAndD"
                              className="checkbox-input"
                              checked={formData.challenges.rAndD}
                              onChange={() =>
                                handleCheckboxChange("challenges", "rAndD")
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/r&d.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                R&D
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="systemArchitecture"
                              className="checkbox-input"
                              checked={formData.challenges.systemArchitecture}
                              onChange={() =>
                                handleCheckboxChange(
                                  "challenges",
                                  "systemArchitecture"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/architecture.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                Systems Architecture
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="uiUx"
                              className="checkbox-input"
                              checked={formData.challenges.uiUx}
                              onChange={() =>
                                handleCheckboxChange("challenges", "uiUx")
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/ui-ux.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                UI/UX
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="development"
                              className="checkbox-input"
                              checked={formData.challenges.development}
                              onChange={() =>
                                handleCheckboxChange(
                                  "challenges",
                                  "development"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/development.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                development
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="qa"
                              className="checkbox-input"
                              checked={formData.challenges.qa}
                              onChange={() =>
                                handleCheckboxChange("challenges", "qa")
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/qa.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                QA
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="integrations"
                              className="checkbox-input"
                              checked={formData.challenges.integrations}
                              onChange={() =>
                                handleCheckboxChange(
                                  "challenges",
                                  "integrations"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/integration.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                integrations
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="maintenance"
                              className="checkbox-input"
                              checked={formData.challenges.maintenance}
                              onChange={() =>
                                handleCheckboxChange(
                                  "challenges",
                                  "maintenance"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/maintenance.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                maintenance
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="consultancy"
                              className="checkbox-input"
                              checked={formData.challenges.consultancy}
                              onChange={() =>
                                handleCheckboxChange(
                                  "challenges",
                                  "consultancy"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/consultancy.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                consultancy
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>

                  <p className="position-relative ms-2 mb-4 mt-3 ps-5">
                    <span className="estimateNumber rounded-1 me-2">2</span>
                    <span className="fw-bolder fs-5 ">I already have:</span>
                  </p>

                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="already_have">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="idea"
                              className="checkbox-input"
                              checked={formData.alreadyHave.idea}
                              onChange={() =>
                                handleCheckboxChange("alreadyHave", "idea")
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/idea.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                Idea
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="already_have">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="specification"
                              className="checkbox-input"
                              checked={formData.alreadyHave.specification}
                              onChange={() =>
                                handleCheckboxChange(
                                  "alreadyHave",
                                  "specification"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/specification.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                specification
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="uiUx"
                              className="checkbox-input"
                              checked={formData.alreadyHave.uiUx}
                              onChange={() =>
                                handleCheckboxChange("alreadyHave", "uiUx")
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/ui-ux.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                UI/UX
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="checkbox"
                              name="code"
                              className="checkbox-input"
                              checked={formData.alreadyHave.code}
                              onChange={() =>
                                handleCheckboxChange("alreadyHave", "code")
                              }
                            />
                            <span className="checkbox-tile">
                              <img
                                src="/projectEstimateicon/code.svg"
                                alt="icon"
                              />
                              <span className="checkbox-label text-capitalize pt-2">
                                Code
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>

                  <p className="position-relative ms-2 mb-4 mt-3 ps-5">
                    <span className="estimateNumber rounded-1 me-2">3</span>
                    <span className="fw-bolder fs-5">Timeframe</span>
                  </p>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="radio"
                              name="timeframe"
                              className="checkbox-input"
                              checked={formData?.timeframe?.hiringNow}
                              onChange={() =>
                                handleRadioChange("timeframe", "hiringNow")
                              }
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                                Hiring
                                <br />
                                <span className="text-danger">Now</span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="radio"
                              name="timeframe"
                              className="checkbox-input"
                              checked={
                                formData?.timeframe?.hiringWithinOneMonth
                              }
                              onChange={() =>
                                handleRadioChange(
                                  "timeframe",
                                  "hiringWithinOneMonth"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                                Hiring Within
                                <br />
                                <span className="text-danger">1 Months</span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="radio"
                              name="timeframe"
                              className="checkbox-input"
                              checked={
                                formData?.timeframe?.hiringWithinThreeMonths
                              }
                              onChange={() =>
                                handleRadioChange(
                                  "timeframe",
                                  "hiringWithinThreeMonths"
                                )
                              }
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                                Hiring within
                                <br />
                                <span className="text-danger">3 months</span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="text-center mb-4 phn_width mar_btm_phn"
                  >
                    <div className="">
                      <fieldset className="checkbox-group">
                        <div className="checkbox">
                          <label className="checkbox-wrapper">
                            <input
                              type="radio"
                              name="timeframe"
                              className="checkbox-input"
                              checked={formData?.timeframe?.hiringLater}
                              onChange={() =>
                                handleRadioChange("timeframe", "hiringLater")
                              }
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                                Hiring
                                <br />
                                <span className="text-danger">later</span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </Col>

                  {/* question number 5 */}

                  <div className="res_gutter">
                    <Row>
                      {/* <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            4
                          </span>
                          <span className="fw-bolder fs-5">
                            What services do you need?
                            <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3 ">
                            <Form.Select
                              name="building-project"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                            >
                              <option>Choose an option</option>
                              <option>Custom Software Development</option>
                              <option>Web Development</option>
                              <option>Mobile App Development</option>
                              <option>UI/UX Design</option>
                              <option>Software QA and Testing</option>
                              <option>Machine learning & AI</option>
                              <option>Cloud Solutions</option>
                              <option>IT Support & Maintenance</option>
                              <option>IT Consulting</option>
                              <option>Digital Transformation</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </Col> */}
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            4
                          </span>
                          <span className="fw-bolder fs-5">
                            Is this a new or existing project?
                            <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3">
                            {/* <Form.Label>Disabled select menu</Form.Label> */}
                            <Form.Select
                              name="projectType"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                              value={formData?.projectType}
                              onChange={(e) =>
                                handleSelectChange(e, "projectType")
                              }
                            >
                              <option value="">Choose an option</option>
                              <option value="New">New Project</option>
                              <option value="Existing">Existing Project</option>
                            </Form.Select>
                            {errors.projectType && (
                              <span className="invalid-feedback d-block">
                                {errors.projectType}
                              </span>
                            )}
                          </Form.Group>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            5
                          </span>
                          <span className="fw-bolder fs-5">
                            You Are
                            <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Select
                              name="yourRole"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                              value={formData?.yourRole}
                              onChange={(e) =>
                                handleSelectChange(e, "yourRole")
                              }
                            >
                              <option value="">Choose an option</option>
                              <option value="Individual">Individual</option>
                              <option value="Company">Company</option>
                            </Form.Select>
                            {errors.yourRole && (
                              <span className="invalid-feedback d-block">
                                {errors.yourRole}
                              </span>
                            )}
                          </Form.Group>
                        </div>
                      </Col>
                    </Row>
                    {/* question number 8,9 */}
                    <Row>
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            6
                          </span>
                          <span className="fw-bolder fs-5">
                            Preferred Time For Contact
                            <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Select
                              name="preferredContactTime"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                              value={formData?.preferredContactTime}
                              onChange={(e) =>
                                handleSelectChange(e, "preferredContactTime")
                              }
                            >
                              <option value="">Choose an option</option>
                              <option value="Morning">Morning</option>
                              <option value="Noon">Noon</option>
                              <option value="Afternoon">Afternoon</option>
                            </Form.Select>
                            {errors.preferredContactTime && (
                              <span className="invalid-feedback d-block">
                                {errors.preferredContactTime}
                              </span>
                            )}
                          </Form.Group>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            7
                          </span>
                          <span className="fw-bolder fs-5">
                            Attach any files you feel would be useful
                            {/* <span className="text-danger"> *</span> */}
                          </span>
                        </p>

                        <div className="file_upload ms-0">
                          <label htmlFor="attachment">
                            <input
                              type="file"
                              id="attachment"
                              // accept="image/*,.pdf"
                              accept="application/pdf"
                              name="attachment"
                              onChange={(e) => handleInputChange(e)}
                            />
                            <div className="d-flex align-items-center justify-content-center">
                              <ImAttachment className="me-2" />
                              Please attach the PDF file
                            </div>
                          </label>
                        </div>

                        {formData?.attachment && (
                          <p className="attachment-pdf">
                            {formData?.attachment.name}
                            <span onClick={(e) => handleClearAttachment(e)}>
                              &#x2715;
                            </span>
                          </p>
                        )}

                        {errors.attachment && (
                          <span className="invalid-feedback d-block">
                            {errors.attachment}
                          </span>
                        )}
                      </Col>
                    </Row>

                    {/* question number 10 */}
                    <Row>
                      {/* <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            8
                          </span>
                          <span className="fw-bolder fs-5">
                            What do you want to achieve?
                            <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Select
                              name="service-type"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                            >
                              <option>Building a New Product</option>
                              <option>Achieve Business Objectives</option>
                              <option>Out Source Production</option>
                              <option>Find a Long-Term Partnership</option>
                              <option>Something else</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </Col> */}

                      <Col lg={12}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            8
                          </span>
                          <span className="fw-bolder fs-5">
                            Fill the details
                            <span className="text-danger"> *</span>
                          </span>
                        </p>
                        {/* <Form> */}
                        <Row>
                          <Col lg={6} md={6}>
                            <Form.Group className="mb-3" controlId="name">
                              <Form.Control
                                className="proForm px-3"
                                name="name"
                                type="text"
                                placeholder="Your name *"
                                value={formData?.userDetails?.name}
                                onChange={(e) => handleUserDetailsChange(e)}
                              />
                              {errors.name && (
                                <span className="invalid-feedback d-block">
                                  {errors.name}
                                </span>
                              )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                              <Form.Control
                                className="proForm px-3"
                                name="email"
                                type="text"
                                placeholder="Your email address *"
                                value={formData?.userDetails?.email}
                                onChange={(e) => handleUserDetailsChange(e)}
                              />
                              {errors.email && (
                                <span className="invalid-feedback d-block">
                                  {errors.email}
                                </span>
                              )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="number">
                              <Form.Control
                                className="proForm px-3"
                                name="phone"
                                type="number"
                                placeholder="Your phone number *"
                                value={formData?.userDetails?.phone}
                                onChange={(e) => handleUserDetailsChange(e)}
                              />
                              {errors.phone && (
                                <span className="invalid-feedback d-block">
                                  {errors.phone}
                                </span>
                              )}
                            </Form.Group>
                          </Col>
                          <Col lg={6} md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                className="py-4 px-3"
                                as="textarea"
                                name="projectDetails"
                                placeholder="Project Details *"
                                rows={6}
                                value={formData?.projectDetails}
                                onChange={(e) => handleInputChange(e)}
                              />
                              {errors.projectDetails && (
                                <span className="invalid-feedback d-block">
                                  {errors.projectDetails}
                                </span>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>

                        <div className="checkBox d-flex align-items-center mb-2">
                          <Form.Check
                            type="checkbox"
                            id="CheckedText"
                            label="I want to receive a monthly tech newaletter"
                            name="newsletterSubscription"
                            checked={formData.newsletterSubscription}
                            onChange={(e) => handleInputChange(e)}
                            disabled={isLoading}
                          />

                          {/* <label
                            htmlFor="CheckedText"
                            className="checkBox_text"
                          >
                            I want to receive a monthly tech newaletter
                          </label> */}
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

                        <button
                          type="submit"
                          className="requestBtn mt-3 mb-5 border-0 d-flex justify-content-center align-items-center"
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
                        {/* </Form> */}
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Form>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectEstimate;
