import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ImPageBreak } from "react-icons/im";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SideDiv = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="border-0 p-0 m-0 bg-transparent"
      >
        <ImPageBreak size={"50px"} className="request_form rounded-pill mb-3" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="off_screen">
        <Offcanvas.Header closeButton className="mb-0 py-2 request_form_title">
          <Offcanvas.Title className="">
            <h3 className="text-capitalize text-center pb-3 fw-bold pt-3">
              request form
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-4">
          <p className="text-capitalize text-center font-14 pb-3">
            Getting our team to build a product for you is straightforward. All
            you need is to fill out the contact us form.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter Full Name *"
                className="form_input ps-3 border-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Phone Number</Form.Label> */}
              <Form.Control
                type="number"
                placeholder="Enter Number *"
                className="form_input ps-3 border-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Enter Email *"
                className="form_input ps-3 border-0"
                required
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="How we can help? *"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                className="text_area border-0"
                required
              />
            </FloatingLabel>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="mt-4 submit_btn border-0"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideDiv;
