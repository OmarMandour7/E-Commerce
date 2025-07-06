import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";
import AddToCartHook from "../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductDetailsHook(id);
const [colorClick,indexColor , addToCartHandel] = AddToCartHook(id,item)


  return (
    <div>
    
      <Row className="justify-content-between">
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
           
          </div>
        </Col>
        <Col md="2"><div className="cat-rate d-inline mx-3">{item.ratingsAverage} <i class="fa-solid fa-star bg-warn"></i></div></Col>
      </Row>
      <Row className="mt-2">
        <div className="cat-text"><span className="fon fs-4 mx-2">category :</span> {cat.name}</div>
      </Row>
      <Row>
        <Col md="8" className="mt-3">
          <div className="cat-text fon fs-4 d-inline">Brand :</div>
          <div className="cat-text d-inline mx-2">{brand.name} </div>
        </Col>
      </Row>
      <Row className="my-4"> <div className="d-flex">
                            <div className="card-price">
                                    {item.priceAfterDiscount >= 1 ?
                                        (<div className="mx-2"> {item.priceAfterDiscount}  <span className="mx-2" style={{ textDecorationLine: 'line-through', color:"gray" }}>{item.price}</span></div>)
                                        : item.price}
                                </div>
                           
                                {item.priceAfterDiscount >= 1 ?
                                        (<span className='dis mx-2 '>{Math.round(((item.price)-(item.priceAfterDiscount))/(item.price)*100)} % </span>)
                                        : " "}
                            </div></Row>
                            
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
        <Col md = "10">
        <hr></hr></Col>
      </Row>
     
      <Row className="my-4">

        <Col md="8" className=" d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => colorClick(index , color)}
                    className="color ms-2 "
                    style={{ backgroundColor: color , border: indexColor === index ? '3px solid gray' : 'none' }}
                  ></div>
                );
              })
            : null}
           
        </Col>
        <Col>  <div className="cat-text  d-inline ">Quantity: {item.quantity} </div>
        </Col>
        <Col md = "10">
        <hr></hr></Col>
      </Row>

      
      <Row className="my-4">
        <Col sm="12">
          <div onClick={addToCartHandel} className="product-cart-addd  d-inline">
            Add To Cart 
          </div>
        </Col>
      </Row>
     
    </div>
  );
};

export default ProductText;
