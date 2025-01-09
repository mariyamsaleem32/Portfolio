import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Input = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSubmittedName(`${firstName} ${lastName} ${email} ${password} ${address}`);
    alert("your form submitted succesfully! ")
  };

  return (
    <>
      <Form onSubmit={submit}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>first name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)}/>
          </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)}/>
          </Form.Group>     

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>karachi</option>
              <option>islamabad</option>
              <option>lahore</option>
              <option>faislabad</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div>
        <p>{submittedName}</p>
      </div>
    </>
  );
};

export default Input;
