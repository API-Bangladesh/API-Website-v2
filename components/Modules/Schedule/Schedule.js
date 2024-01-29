import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Calendar from "react-calendar";
import { CgArrowLongLeft } from "react-icons/cg";
import classEase from "classease";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../utils/constants";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../utils/notificationHelper";
import submitForm from "../../../lib/submit-form";
import SectionTitle from "../Section_title/Section_title";
// import CustomReCAPTCHA from "../../../utils/ReCAPTCHA";

const Schedule = () => {
  const [formData, setFormData] = useState({
    service: "", // string
    date: "", // string or Date object
    time: "", // string or Time object
    budget: "", // string
    description: "", // string
    userDetails: {
      name: "", // string
      phone: "", // string
    },
  });

  const [isTimeSelect, setIsTimeSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  // for date picker
  const [value, onChange] = useState(new Date());
  const [isVerified, setIsVerified] = useState(false);

  console.log(selectedOption);
  console.log(value);
  console.log(selectedItem);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const errors = {};

    if (!formData.userDetails.name.trim()) {
      errors.name = "Name cannot be empty";
    }

    const phoneRegex = /^01\d{9}$/;

    if (!formData.userDetails.phone.trim()) {
      errors.phone = "Phone cannot be empty";
    } else if (!phoneRegex.test(formData.userDetails.phone)) {
      errors.phone =
        "Please enter a valid phone number (starting with 01 and length 11)";
    }

    if (!formData.service.trim()) {
      errors.service = "Service cannot be empty";
    }

    if (!formData?.date) {
      errors.date = "Date cannot be empty";
    }

    if (!formData.budget.trim()) {
      errors.budget = "Budget cannot be empty";
    }

    if (!formData.description.trim()) {
      errors.description = "Description cannot be empty";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleItemClick = (e) => {
    const textValue = e.target.innerText;
    setSelectedItem(textValue);
    setIsTimeSelect(true);
    setFormData((prev) => ({
      ...prev,
      time: e.target.innerText,
    }));
    console.log(selectedItem);
  };

  const handleDivClick = (e) => {
    setSelectedItem("");
    setIsTimeSelect(false);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
    setFormData((prev) => ({
      ...prev,
      service: event.target.id,
    }));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      date: value,
    }));
    console.log(formData);

    if (validateForm()) {
      setIsLoading(true);

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

  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // if(!isVerified){
  //   //    // console.log("ReCaptcha Failed!");
  //   //    showErrorNotification("Failed!", "ReCaptcha Validation Failed! Please Try Again.");
  //   //    return;
  //   // }

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

  return (
    <>
      <section id="schedule" className="section_padding_top">
        <SectionTitle titleUpDown="Let's talk!" />

        <div className="container">
          <div className="projectBox">
            <h4 className="mb-3">Select Services</h4>
          </div>

          <div className="row">
            <div className="col-sm-6 projectItem">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="1"
                checked={selectedOption === "1"}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="1">
                Application Development
              </label>
            </div>

            <div className="col-sm-6 projectItem">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="2"
                checked={selectedOption === "2"}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="2">
                Digital Transformation
              </label>
            </div>

            <div className="col-sm-6 projectItem">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="3"
                checked={selectedOption === "3"}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="3">
                Cloud Solutions
              </label>
            </div>

            <div className="col-sm-6 projectItem">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="4"
                checked={selectedOption === "4"}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="4">
                IT Consulting
              </label>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className={`row customRow ${
              isTimeSelect === true ? "scheduleBox" : ""
            }`}
          >
            {/* calendar satrts here */}
            <div className="col-md-6 scheduleItem">
              <div className="dateBox d-flex flex-column align-items-center pb-4">
                <h4 className="mt-0 mb-3 pt-4 text-white">Pick a Date</h4>
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>

            <div className="col-md-6 scheduleItem">
              <p className="packTimeTitle ms-3 text-center mb-3 px-3">
                30 Minute Meeting Choose What Time Works Best For You
              </p>

              <ul className="times">
                <li
                  className={`setTime ${
                    selectedItem === "9:30 AM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  9:30 AM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "10:00 AM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  10:00 AM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "10:30 AM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  10:30 AM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "11:00 AM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  11:00 AM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "11:30 AM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  11:30 AM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "12:00 AM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  12:00 AM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "12:30 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  12:30 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "1:00 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  1:00 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "1:30 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  1:30 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "2:00 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  2:00 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "2:30 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  2:30 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "3:00 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  3:00 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "3:30 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  3:30 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "4:00 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  4:00 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "4:30 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  4:30 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "5:00 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  5:00 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "5:30 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  5:30 PM
                </li>
                <li
                  className={`setTime ${
                    selectedItem === "6:00 PM" ? "selected" : ""
                  }`}
                  onClick={handleItemClick}
                >
                  6:00 PM
                </li>
              </ul>
            </div>
            {isTimeSelect && (
              <div className="col-md-6 scheduleItem hideShow ps-4">
                <div className="itemContent">
                  <p className="ms-3 fs-4 text-end mb-3 px-3 uppercase">
                    LAST STEP
                  </p>

                  <Form
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

                    <Row>
                      <Col sm={12} lg={6}>
                        <Form.Group
                          className="mb-2"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="capitalize">Name</Form.Label>
                          <Form.Control
                            className="px-3 userinput"
                            name="name"
                            type="text"
                            placeholder="Name *"
                            value={formData.userDetails.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                userDetails: {
                                  ...prev.userDetails,
                                  name: e.target.value,
                                },
                              }))
                            }
                          />
                          {errors.name && (
                            <span className="invalid-feedback d-block">
                              {errors.name}
                            </span>
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm={12} lg={6}>
                        <Form.Group
                          className="mb-2"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="capitalize">Number</Form.Label>
                          <Form.Control
                            className="px-3 userinput"
                            name="phone"
                            type="number"
                            placeholder="Number *"
                            value={formData.userDetails.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                userDetails: {
                                  ...prev.userDetails,
                                  phone: e.target.value,
                                },
                              }))
                            }
                          />
                          {errors.phone && (
                            <span className="invalid-feedback d-block">
                              {errors.phone}
                            </span>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Label className="capitalize">
                      Your Estimated Budget
                    </Form.Label>
                    <Form.Select
                      className="px-3 userinput mb-2"
                      name="schedule-budget"
                      aria-label="Default select example"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          budget: e.target.value,
                        }))
                      }
                      value={formData?.budget}
                    >
                      <option value="0">Choose an option</option>
                      <option value="1">50k - 100k</option>
                      <option value="2">100k - 200k</option>
                      <option value="3">200k - 500k</option>
                      <option value="4">More than 500k +</option>
                    </Form.Select>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="capitalize">
                        Short description
                      </Form.Label>
                      <Form.Control
                        name="schedule-message"
                        as="textarea"
                        placeholder="Type here"
                        rows={4}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                      />
                      {errors.description && (
                        <span className="invalid-feedback d-block">
                          {errors.description}
                        </span>
                      )}
                    </Form.Group>

                    <Form.Control
                      className="d-none"
                      name="service"
                      value={selectedOption}
                      type="text"
                    />
                    <Form.Control
                      className="d-none"
                      name="date"
                      value={value}
                      type="text"
                    />
                    <Form.Control
                      className="d-none"
                      name="time"
                      value={selectedItem}
                      type="text"
                    />
                    {/* <CustomReCAPTCHA onVerify={setIsVerified}/> */}

                    <div class="d-flex justify-content-between align-items-center pb-3">
                      <p
                        className="scheduleBackBtn mb-1"
                        onClick={handleDivClick}
                      >
                        <CgArrowLongLeft className="d-inline-block me-2 fs-5" />
                        Select a different date
                      </p>
                      <button type="submit" className="requestBtn border-0">
                        Confirm
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
