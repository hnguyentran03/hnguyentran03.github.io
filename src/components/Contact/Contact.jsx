import { useState } from "react";

import { Row, Col, Container } from "react-bootstrap";


import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const initialFormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = () => {
    
  }

  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  return (
    <section id="contact" className="">
      <Container>
        <Row>
          <Col md={6}>
            <img src={} alt="Contact"/>
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(event) => onFormUpdate("firstName", event.target.value)} />
                </Col>
                <Col sm={6} className="">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(event) => onFormUpdate("lastName", event.target.value)} />
                </Col>
                <Col sm={6} className="">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(event) => onFormUpdate("email", event.target.value)} />
                </Col>
                <Col sm={6} className="">
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(event) => onFormUpdate("phone", event.target.value)} />
                </Col>
                <Col className="">
                  <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(event) => onFormUpdate("message", event.target.value)} />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
