import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
const AdminAllOrdersItem = ({orderItem}) => {
  return (
    <Col sm="12">
            <Link to={`/admin/orders/${orderItem._id}`}
                className="cart-item-body-admin my-2 px-1 d-flex px-2"
                style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">Order {orderItem.id}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline mon cat-title">
                             {orderItem.user.name || ''}
                            </div>
                            
                        </Col>
                        <Col sm="12" className="d-flex flex-row justify-content-start">
                        <div style={{ color: 'black' }} className="d-inline mon  fs-2 ">  {orderItem.user.email || ''}</div></Col>
                    </Row>

                    <Row className="d-flex justify-content-between">
                        <Col xs="6" className="d-flex">
                            <div>
                                <div style={{ color: 'black' }} className="d-inline"> Delivery</div>
                                <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? 'Done' : 'Not Yet  '}</div>
                            </div>
                            <div>
                                <div style={{ color: 'black' }} className="d-inline"> Paid</div>
                                <div className="d-inline mx-2 stat">{orderItem.isPaid === true ?'Done' : 'Not Yet  '}</div>
                            </div>

                            <div>
                                <div style={{ color: 'black' }} className="d-inline">Pay With</div>
                                <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? 'Cash' : 'Visa '}</div>
                            </div>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end">
                            <div>
                                <div className="barnd-text fon">{orderItem.totalOrderPrice || 0}</div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Link>
        </Col >
  );
};

export default AdminAllOrdersItem;
