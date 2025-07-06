import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
const Footer = () => {
    return (
        <div className="footer footer-background  mt-5 pt-3">
            <Container className="">
                <Row className="d-flex justify-content-between my-2  align-items-center">
                    <Col sm="3" className="d-flex align-items-center ">
                        <div className="con ">Infinity Growth</div>                        
                    </Col>
                    <Col sm="2" className="d-flex align-items-center my-3 ">
                        <div className="footer-shroot ">COMPANY </div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-shroot ">HELP</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-shroot ">FAQ</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-shroot ">RESOURCES</div>                        
                    </Col>
                    
                </Row>
                <Row className="d-flex justify-content-between mt-5 align-items-center">
                    <Col sm="3" className="d-flex align-items-center ">
                        <div className="footer-phone ">
                        We have clothes that suits your style and which you’re proud to wear. From women to men.</div>                        
                    </Col>
                    <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">About </div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Custom Support</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Accounts</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Free eBooks</div>                        
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between mt-1 align-items-center">
                    <Col sm="3" className="d-flex align-items-center ">
                        <div className="footer-phone icon mt-2 ">
                        <i class="fa-brands fa-facebook fs-3"></i>
                        <i class="fa-brands fa-twitter fs-3 mx-4"></i>
                        <i class="fa-brands fa-instagram fs-3 "></i>
                        
                        </div>                        
                    </Col>
                    <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Features </div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Delivery Details</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">manage Deliver</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Development Tutorial</div>                        
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between mt-3 align-items-center">
                    <Col sm="3" className="d-flex align-items-center ">
                        <div className="footer-phone ">
                            
                        </div>                        
                    </Col>
                    <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Works </div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Terms & conditions</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Orders</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">How To - Blog</div>                        
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between mt-3 align-items-center">
                    <Col sm="3" className="d-flex align-items-center ">
                        <div className="footer-phone ">
                            
                        </div>                        
                    </Col>
                    <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Career </div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Privacy Policy</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Payments</div>                        
                    </Col> <Col sm="2" className="d-flex align-items-center ">
                        <div className="footer-phone ">Youtube Playlist</div>                        
                    </Col>
                </Row>
                <hr className='mt-5'></hr>
                <Row className='d-flex justify-content-between  align-items-center'>
                <Col sm="4" className="d-flex align-items-center ">
                        <div className="footer-phone ">   Infinity Growth.co © 2000-2023, All Rights Reserved
                        </div>                        
                    </Col> <Col sm="3" className="d-flex align-items-center ">
                        <div className="footer-phone ">
                        <i class="fa-brands fa-cc-visa fs-1"></i>
                        <i class="fa-brands fa-cc-mastercard fs-1 mx-3"></i>
                        <i class="fa-brands fa-apple-pay fs-1 "></i>
                        <i class="fa-brands fa-google-pay fs-1 mx-3"></i>
                            </div>                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
