import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Contact.module.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
    // 1
    this.inputRef = React.createRef();

    // 2
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // };
  }
  componentDidMount() {
    // 1
    this.inputRef.current.focus();
    // this.inputRef.current.readOnly = true;
    console.log(this.inputRef);
    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
  }

  render() {
    return (
      <div className={styles.Form}>
        <h2 className="h3 text-success">Leave Your Preview</h2>
        <Card className={styles.Card}>
          <Card.Body className="p-5">
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name.."
                  ref={this.inputRef}
                  // ref={this.setCbRef}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Your Reveiw</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
