import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Doctors = ({ doctors, setDoctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setselectedDrName] = useState("");
  const handleClick = () => {
    setShow(true);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctors.map((dr) => (
          <Col>
            <img src={dr.img} />
            <h5> {dr.name} </h5>
            <h6> {dr.dep} </h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
