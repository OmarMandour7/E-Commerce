import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

import rate from "../../images/rate.png";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../hook/product/product-card-hook";

const ProductCard = ({ item, favProd }) => {
  const [removeToWishListData, addToWishListData, handelFav, favImg] =
    ProductCardHook(item, favProd);
  console.log(item);
  return (
    <Col xs="10" sm="10" md="6" lg="3" className="d-flex">
      <Card className="my-2 hov d-flex">
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{
              height: "208px",
              width: "80%",
              marginLeft: "30px",
              marginTop: "30px",
              display: "flex",
            }}
            src={item.imageCover}
          />
        </Link>

        <Card.Body>
          <Card.Title>
            <div className="card-title my-2">{item.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingsAverage || 0}</div>
              </div>
              <div className="d-flex">
                <img
                  src={favImg}
                  alt=""
                  onClick={handelFav}
                  className="text-center"
                  style={{
                    height: "24px",
                    width: "26px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <Row className="justify-content-between">
              <Col sm="9" className="card-price ">
                {item.priceAfterDiscount >= 1 ? (
                  <div>
                    {" "}
                    {item.priceAfterDiscount}{" "}
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        color: "gray",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                ) : (
                  item.price
                )}
              </Col>
              <Col sm="5" className="d-flex">
                {item.priceAfterDiscount >= 1 ? (
                  <span className="dis ">
                    {Math.round(
                      ((item.price - item.priceAfterDiscount) / item.price) *
                        100
                    )}{" "}
                    %{" "}
                  </span>
                ) : (
                  " "
                )}
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default ProductCard;
