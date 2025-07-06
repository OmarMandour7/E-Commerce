import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import rate from "../../images/rate.png";
import deleteicon from "../../images/delete.png";
import edit from "../../images/edit.png";
import { useDispatch } from "react-redux";
import notify from "./../../hook/useNotifaction";
import ReactStars from 'react-rating-stars-component'
import { deleteProduct } from "../../redux/actions/productsAction";
import { ToastContainer } from "react-toastify";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import EditRateHook from "../../hook/review/edit-rate-hook";
const RateItem = ({ review }) => {
    const  [isUser, handelDelete, handleShow, handleClose, showDelete] = DeleteRateHook(review);
    const [showEdit, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue] = EditRateHook(review)
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: newRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            OnChangeRateValue(newValue);
        }
    };
  return (
    <div>
        <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className="font bg-white mon"> Delete Comment</div></Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font mon bg-white">Confirm Delete ?   </div> </Modal.Body>
        <Modal.Footer>
          <Button  className="font "  variant="success" onClick={handleClose}>
            Keep
          </Button>
          <Button   className="font" variant="danger" onClick={handelDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header >
                    <Modal.Title> <div className='font'> Edit Comment</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactStars {...setting} />
                    <input
                        onChange={onChangeRateText}
                        value={newRateText}
                        type="text"
                        className='font w-100'
                        style={{ border: 'none' }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleCloseEdit}>
                        Back
                    </Button>
                    <Button className='font' variant="dark" onClick={handelEdit}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name mon d-inline mx-3">{review.user.name} </div>
    
          <div className="cat-rate  d-inline ">{review.rating}<i class="fa-solid fa-star"></i></div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{review.review}</div>
          {isUser === true ? (
            <div className="d-inline d-flex justify-content-end ">
              <img
              onClick={handleShow}
                className="mx-2"
                width="20px"
                height="20px"
                src={deleteicon}
                alt="delete"
                style={{ cursor: "pointer" }}
              />
              <img src={edit} onClick={handleShowEdit} width="20px" height="20px" style={{ cursor: "pointer" }} alt="delete" />

            </div>
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItem;
