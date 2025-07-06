import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import s50 from '../../images/5050.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="8">
                    <div className="discount-title fon">   Ask Now About Redeem Code                 </div>
                </Col>
                <Col sm="4">
                    <img className="dicount-img" src={s50} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
