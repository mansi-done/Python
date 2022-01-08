import React from "react";
import BonusEditor from './BonusEditor';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddEmployee = () => {
  return (
    <div>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control type="number" placeholder="Enter ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Location" />
          </Form.Group>

          <BonusEditor/>
          <Button variant="dark" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddEmployee;
