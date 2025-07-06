import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

import { ToastContainer } from 'react-toastify'
import ForgetPasswordHook from '../../hook/auth/forget-password-hook'
const ForgetPasswordPage = () => {
    const  [email ,onChangeEmail ,onSubmit ] = ForgetPasswordHook();
    return (
            <Container style={{ minHeight: "500px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login"> Enter Your Email </label>
                        <input
                        value={email}
                        onChange={onChangeEmail}
                            placeholder="Email"
                            type="email"
                            className="user-input my-3 text-center mx-auto"
                        />
                       
                        <button onClick={onSubmit} className="btn-login mx-auto mt-4">Send Code  </button>
                       
                    </Col>

                </Row>
                <ToastContainer />

            </Container>
    )
}

export default ForgetPasswordPage


