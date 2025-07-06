import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import deleteicon from '../../images/delete.png'
import editicon from '../../images/edit.png'
import CouponCardHook from '../../hook/coupon/coupon-card-hook'

const AdminCouponCard = ({coupon}) => {
    const [formatDate, dateString, show, handleClose, handleShow, handelDelete] = CouponCardHook(coupon)
    console.log(coupon)
  return (
    <div className="user-address-card my-3 px-2">
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className="font bg-white">Confirm Delete </div></Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font bg-white"> You Will Delete Coupon </div> </Modal.Body>
        <Modal.Footer>
          <Button  className="font "  variant="success" onClick={handleClose}>
            Back
          </Button>
          <Button   className="font" variant="danger" onClick={handelDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2 fs-2 mon">{coupon.name}</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                    <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: 'none' }}>
                            <div className="d-flex mx-2">
                                <img
                                    alt=""
                                    className="mx-1 mt-2"
                                    src={editicon}
                                    height="17px"
                                    width="15px"
                                />
                                <p className="item-delete-edit"> Edit</p>

                            </div>
                        </Link>
                        <div onClick={handleShow} className="d-flex ">
                            <img
                                alt=""
                                className="mx-2 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                       Expire Date :
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                      {formatDate(dateString)}
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                       Discount rate:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                       {coupon.discount}%
                    </div>
                </Col>
            </Row>
        </div>
  )
}

export default AdminCouponCard