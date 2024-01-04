import React from "react";
import SectionTitle from "../Section_title/Section_title";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

const WhatNext = () => {
  return (
    <>
      <section id="whatNext" className="section_padding mb-5">
        <SectionTitle titleUpDown="What Happens Next" />

        <div className="container">
          <ul className="nextItemsBox d-flex mt-5">
            <li className="nextItems">
              <span className="nextSerial">1</span>
              <p className="number_list_details">
                We'll read your e-mail, <br /> thank you
              </p>
            </li>
            <li className="nextItems">
              <span className="nextSerial">2</span>
              <p className="number_list_details">
                We'll respond <br /> within 8 hours
              </p>
            </li>
            <li className="nextItems">
              <span className="nextSerial">3</span>
              <p className="number_list_details">
                We'll line up a 30 min <br /> expert call with you
              </p>
            </li>
            <li className="nextItems">
              <span className="nextSerial">4</span>
              <p className="number_list_details">
                You'll get a proposal <br /> within 5 business days
              </p>
            </li>
            <li className="nextItems">
              <span className="nextSerial">5</span>
              <p className="number_list_details">
                All goes well
                <br /> we're a go !
              </p>
            </li>
          </ul>
          <div className="responsive_number_items">
            <Row>
              <Col md={4} sm={4} className="mt-4">
                <div className="nextItems">
                  <span className="nextSerial">1</span>
                  <p>
                    We'll read your e-mail, <br /> thank you
                  </p>
                </div>
              </Col>
              <Col md={4} sm={4} className="mt-4">
                <div className="nextItems">
                  <span className="nextSerial">2</span>
                  <p>
                    We'll respond <br /> within 8 hours
                  </p>
                </div>
              </Col>
              <Col md={4} sm={4} className="mt-4">
                <div className="nextItems">
                  <span className="nextSerial">3</span>
                  <p>
                    We'll line up a 30 min <br /> expert call with you
                  </p>
                </div>
              </Col>
              <Col md={4} sm={4} className="mt-4">
                <div className="nextItems">
                  <span className="nextSerial">4</span>
                  <p>
                    You'll get a proposal <br /> within 5 business days
                  </p>
                </div>
              </Col>
              <Col md={4} sm={4} className="mt-4">
                <div className="nextItems">
                  <span className="nextSerial">5</span>
                  <p>
                    All goes well
                    <br /> we're a go !
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatNext;
