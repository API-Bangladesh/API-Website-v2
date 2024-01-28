import React, { useRef, useState } from "react";
import SectionTitle from "../Section_title/Section_title";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Calendar from "react-calendar";
import { CgArrowLongLeft } from "react-icons/cg";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../utils/constants";
import {
   showErrorNotification,
   showSuccessNotification,
} from "../../../utils/notificationHelper";
// import CustomReCAPTCHA from "../../../utils/ReCAPTCHA";

const Schedule = () => {
   const [isTimeSelect, setIsTimeSelect] = useState(false);
   const [selectedItem, setSelectedItem] = useState("");
   const [selectedOption, setSelectedOption] = useState("");
   // for date picker
   const [value, onChange] = useState(new Date());
   const [isVerified, setIsVerified] = useState(false);

   console.log(selectedOption);
   console.log(value);
   console.log(selectedItem);

   const handleItemClick = (e) => {
      const textValue = e.target.innerText;
      setSelectedItem(textValue);
      setIsTimeSelect(true);
      console.log(selectedItem);
   };

   const handleDivClick = (e) => {
      setSelectedItem("");
      setIsTimeSelect(false);
   };

   const handleRadioChange = (event) => {
      setSelectedOption(event.target.id);
   };

   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
      // if(!isVerified){
      //    // console.log("ReCaptcha Failed!");
      //    showErrorNotification("Failed!", "ReCaptcha Validation Failed! Please Try Again.");
      //    return;
      // }

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
                        <h4 className="mt-0 mb-3 pt-4 text-white">
                           Pick a Date
                        </h4>
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

                           <Form ref={form} onSubmit={sendEmail}>
                              <Row>
                                 <Col sm={12} lg={6}>
                                    <Form.Group
                                       className="mb-2"
                                       controlId="exampleForm.ControlInput1"
                                    >
                                       <Form.Label className="capitalize">
                                          Name
                                       </Form.Label>
                                       <Form.Control
                                       className="px-3 userinput"
                                          name="schedule-name"
                                          type="text"
                                          placeholder="Name *"
                                       />
                                    </Form.Group>
                                 </Col>
                                 <Col sm={12} lg={6}>
                                    <Form.Group
                                       className="mb-2"
                                       controlId="exampleForm.ControlInput1"
                                    >
                                       <Form.Label className="capitalize">
                                          Number
                                       </Form.Label>
                                       <Form.Control
                                       className="px-3 userinput"
                                          name="schedule-number"
                                          type="number"
                                          placeholder="Number *"
                                       />
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
                              >
                                 <option>Choose an option</option>
                                 <option value="50k - 100k">50k - 100k</option>
                                 <option value="100k - 200k">
                                    100k - 200k
                                 </option>
                                 <option value="200k - 500k">200k - 500k</option>
                                 <option value="200k +">
                                    More than 500k +
                                 </option>
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
                                 />
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
                                 <button
                                    type="submit"
                                    className="requestBtn border-0"
                                 >
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
