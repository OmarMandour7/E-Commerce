import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword ,onSubmit] = RegisterHook();
  return (
    <Container style={{ minHeight: "500px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Sign In  </label>
          <input
          value={name}
          onChange={onChangeName}
            placeholder="Username  "
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
          value={email}
          onChange={onChangeEmail}
            placeholder="Email"
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <input
          value={phone}
          onChange={onChangePhone}
            placeholder="Phone Number"
            type="phone"
            className="user-input my-3 text-center mx-auto"
          />
          <input
          value={password}
          onChange={onChangePassword}
            placeholder="Password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <input
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
            placeholder="Confirm Password"
            type="password"
            className="user-input text-center mt-3 mx-auto"
          />
          <button onClick={onSubmit}  className="btn-login mx-auto mt-4">Register </button>
          <label className="mx-auto fon  my-4">
            Have Acount Already ?  
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="mx-3 text-danger">
                 Log In
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
