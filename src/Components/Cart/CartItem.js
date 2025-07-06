import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import GetAllUserCart from "../../hook/cart/get-all-user-cart";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import { ToastContainer } from "react-toastify";
const CartItem = ({ item }) => {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = DeleteCartHook(item);
console.log(item)
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Remove Item </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font"> You Will Remove Item From Cart </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            Back
          </Button>
          <Button className="font bg-danger" onClick={handelDeleteItem}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="px-3 ">
        <img
          width="160px"
          height="197px"
          src={
            item.product
              ? `http://127.0.0.1:8000/products/${item.product.imageCover}`
              : mobile
          }
          alt=""
        />
      </div>

      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline cat-text">
              {item.product.category.name || ""}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-3 "
              style={{ cursor: "pointer" }}
            >
              <div className="cat-text m-0 d-inline ">Delete</div>
              <i class="fa-solid fa-delete-left fs-4"></i>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline fs-3">{item.product.title}</div>
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="mt-1">
            <div className="cat-text d-inline">Brand :</div>
            <div className="barnd-text d-inline mx-1">
              {item.product.brand.name || ""}
            </div>
          </Col>
          <Col sm="4" className="mt-1 d-flex">
            {item.color === "" ? null : (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between my-1">
          <Col sm="8" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-4 d-flex">
              <div className=" mon  fs-4 mx-2 d-inline">Quantity</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="fs-4 "
                type="number"
                style={{ width: "40px", height: "25px" }}
              />
              <button
                onClick={handeleUpdateCart}
                className="copon-btn1 d-inline fs-4 fon "
              >
                Add
              </button>
            </div>
          </Col>
          <Col sm="4" className=" ter  ">
         
            <div className="d-inline fon fs-2   ">
              
              {item.priceAfterDiscount >= 1 ? (
                <div>
                  <span
                    style={{ textDecorationLine: "line-through", color: "red" }}
                  >
                    {item.price}
                  </span>{" "}
                  {item.priceAfterDiscount}
                </div>
              ) : (
                item.price
              )}
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </Col>
  );
};

export default CartItem;
