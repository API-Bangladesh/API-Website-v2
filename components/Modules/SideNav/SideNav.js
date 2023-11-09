
import React from "react";
import { Col, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Tooltip from "react-bootstrap/Tooltip";
import Tool from "./Tool";

const SideNav = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <>
      <section id="new">
        <Container>
          <Col lg={1}>
            <div className="d-flex align-items-center">
              <ListGroup
                as="ul"
                width={20}
                className="border-0 text-center main_side_nav"
              >
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool name="Home" listName="01" link="/" />
                </ListGroup.Item>

                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool name="About Us" listName="02" link="#aboutUs" />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name="Number & Figures"
                    listName="03"
                    link="#numberFigures"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name="Our Expertise"
                    listName="04"
                    link="#expertiseTech"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name="Our Core Values"
                    listName="05"
                    link="#coreValuesTwo"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool name="Our Services" listName="06" link="#services" />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool name="industries" listName="07" link="#industry" />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name=" Our Technology"
                    listName="08"
                    link="#technology"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name=" Our Work Process"
                    listName="09"
                    link="#workProcess"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool name=" Our Clients" listName="10" link="#clients" />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name=" Clients Review"
                    listName="11"
                    link="#clientsReview"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool
                    name="Let's Work Together"
                    listName="12"
                    link="#workTogether"
                  />
                </ListGroup.Item>
                <ListGroup.Item as="li" className="border-0 bg-transparent">
                  <Tool name="Contact Us" listName="13" link="#contact" />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default SideNav;
