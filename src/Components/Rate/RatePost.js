import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddRatehook from "../../hook/review/add-rate-hook";
import { useParams } from "react-router-dom";

const RatePost = () => {
  const {id} =useParams() ;
  const [onChangeRateText, onChangeRateValue, rateText, rateValue, user , onSubmit] =
    AddRatehook(id);


    var name = "" 
    if (user.name) {
      name = user.name
    }else{
      name = "#  برجاء تسجيل الدخول  #"
    }
     const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
     onChangeRateValue(newValue);
    },
  };
  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 mx-4 mon ">{name}</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
          onChange={onChangeRateText}
          value={rateText}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder=" Comment Here...."
          />
          <div className=" d-flex justify-content-end al">
            <div onClick={onSubmit} className="product-cart-add  mon px-3  py-2 text-center d-inline">
               Add Comment
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;
