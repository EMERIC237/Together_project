import axios from "axios";
import React, { useState } from "react";
import { Form, Button, InputGroup, Image } from "react-bootstrap";
import "./inscription.css";

function Inscription() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageText, setImageText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, userName, email, tel, city, state, zipCode } =
      e.target;
    const uploadData = new FormData();
    uploadData.append("firstName", firstName.value);
    uploadData.append("lastName", lastName.value);
    uploadData.append("userName", userName.value);
    uploadData.append("email", email.value);
    uploadData.append("tel", tel.value);
    uploadData.append("city", city.value);
    uploadData.append("state", state.value);
    uploadData.append("zipCode", zipCode.value);
    uploadData.append("image", imageText, imageText.name);
    let url = "http://127.0.0.1:8000/actors/";
    axios
      .post(url, uploadData)
      .then((res) => {
        console.log("THIS IE",{res});
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onUploadImage = (evt) => {
    evt.preventDefault();
    console.log(evt.target.files);
    let src = URL.createObjectURL(evt.target.files[0]);
    setImageUrl(src);
    setImageText(evt.target.files[0]);
  };
  return (
    <div className="formContainer">
      <Form onSubmit={handleSubmit} className="formDiv">
        <div className="d-flex justify-content-between">
          <div className="flex-4">
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name: </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your first name: "
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your last Name"
              />
            </Form.Group>
            <Form.Group md="4" controlId="userName">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="your username"
                  aria-describedby="inputGroupPrepend"
                  name="userName"
                  required
                />
              </InputGroup>
            </Form.Group>
          </div>
          <div className="flex-2">
            <div className="imgContainer">
              <Image
                src={imageUrl}
                id="blah"
                alt="Your picture"
                thumbnail
                fluid
              />
            </div>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="Image"
                accept="image/*"
                onChange={onUploadImage}
                placeholder="Upload your image here"
              />
            </Form.Group>
          </div>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="tel">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="tel"
              placeholder="Enter your phone number"
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" placeholder="Enter your city" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control type="state" name="state" placeholder="State" />
        </Form.Group>
        <Form.Group md="3" controlId="zipCode" className="mb-3">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="number"
            name="zipCode"
            placeholder="Zip Code"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Inscription;
