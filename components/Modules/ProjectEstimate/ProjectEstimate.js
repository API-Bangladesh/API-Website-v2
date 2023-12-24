import React, { useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Col, Container, Form, Row } from "react-bootstrap";
import SectionTitle from "../Section_title/Section_title";
import { ImAttachment } from "react-icons/im";

import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID2 } from "../../../utils/constants";
// import CustomReCAPTCHA from '../../../utils/ReCAPTCHA';
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../utils/notificationHelper";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProjectEstimate = () => {
  const [isVerified, setIsVerified] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    //  if(!isVerified){
    //     // console.log("ReCaptcha Failed!");
    //      showErrorNotification("Failed!", "ReCaptcha Validation Failed! Please Try Again.");
    //     return;
    //  }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID2, form.current, PUBLIC_KEY).then(
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

  return (
    <>
      <section id="projectEstimate" className="section_padding requirement">
        <SectionTitle titleUpDown="Contact Form" />
        <Container>
          <div className="d-flex justify-content-center">
            <Col lg={9}>
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                <p className="position-relative ms-2 mb-4 mt-3 ps-5">
                    <span className="estimateNumber rounded-1 me-2">
                      1
                    </span>
                    <span className="fw-bolder fs-5">What are your main challenges that we can help you with?</span>
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
                              name="Ui/Ux"
                              className="checkbox-input"
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
                              name="Development"
                              className="checkbox-input"
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
                              name="QA"
                              className="checkbox-input"
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
                              name="Integrations"
                              className="checkbox-input"
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
                              name="Maintenance"
                              className="checkbox-input"
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
                              name="Consultancy"
                              className="checkbox-input"
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
                    <span className="estimateNumber rounded-1 me-2">
                      2
                    </span>
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
                              name="Development2"
                              className="checkbox-input"
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
                              name="Specification1"
                              className="checkbox-input"
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
                              name="Ui/Ux"
                              className="checkbox-input"
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
                              name="Specification2"
                              className="checkbox-input"
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
                    <span className="estimateNumber rounded-1 me-2">
                      3
                    </span>
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
                              name="Development"
                              className="checkbox-input"
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                                Hiring
                                <br />
                                <span className="text-danger"> Now</span>
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
                              name="Development"
                              className="checkbox-input"
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                              Hiring within
                                <br />
                                <span className="text-danger"> 3 months</span>
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
                              name="Development"
                              className="checkbox-input"
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-label text-capitalize pt-2 fw-semibold">
                                Hiring
                                <br />
                                <span className="text-danger"> later</span>
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
                      <Col lg={6}>
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
                            {/* <Form.Label>Disabled select menu</Form.Label> */}
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
                              <option>It Support & Maintenance</option>
                              <option>It Consulting</option>
                              <option>Digital Transformation</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            5
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
                              name="existing-project"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                            >
                              <option>Choose an option</option>
                              <option>New Project</option>
                              <option>Existing Project</option>
                            </Form.Select>
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
                          You Are
                          <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Select
                              name="You-are"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                            >
                              <option>Choose an option</option>
                              <option>Individual</option>
                              <option>Company</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            7
                          </span>
                          <span className="fw-bolder fs-5">
                          Preferred Time For Contact
                          <span className="text-danger"> *</span>
                          </span>
                        </p>
                        <div>
                          <Form.Group className="mb-3">
                            <Form.Select
                              name="contact-time"
                              className="inner_select_form innner_form_focus rounded-1 px-3"
                            >
                              <option>Choose an option</option>
                              <option>Morning</option>
                              <option>Noon</option>
                              <option>Afternoon</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </Col>
                    </Row>

                    {/* question number 10 */}
                    <Row>
                      <Col lg={6}>
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
                      </Col>
                      <Col lg={6}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            9
                          </span>
                          <span className="fw-bolder fs-5">
                            Attach any files you feel would be useful
                            <span className="text-danger"> *</span>
                          </span>
                        </p>

                        <div className="file_upload ms-0">
                          <label htmlFor="apply">
                            <input
                              type="file"
                              id="apply"
                              accept="image/*,.pdf"
                              name="image"
                            />
                            <div className="d-flex align-items-center justify-content-center">
                              <ImAttachment />
                              Attach PDF or DOC files
                            </div>
                          </label>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <p className="position-relative mb-4 mt-3 ps-5">
                          <span className="estimateNumber rounded-1 me-2">
                            10
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
                              />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                              <Form.Control
                                className="proForm px-3"
                                name="email"
                                type="email"
                                placeholder="Your email address *"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="number">
                              <Form.Control
                                className="proForm px-3"
                                name="phone"
                                type="number"
                                placeholder="Your phone number *"
                              />
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
                                name="text-area"
                                placeholder="Project Details *"
                                rows={6}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <div className="checkBox d-flex align-items-center mb-2">
                          <Checkbox {...label} />
                          <label htmlFor="CheckDefault" className="checkBox_text">
                            I want to receive a monthly tech newaletter
                          </label>
                        </div>
                        {/* <CustomReCAPTCHA onVerify={setIsVerified}/> */}

                        <button type="submit" className="requestBtn border-0">
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