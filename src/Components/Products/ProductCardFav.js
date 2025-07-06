
import React, { useState, useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'

import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import ProductCardHook from '../../hook/product/product-card-hook';


const ProductCardFav = ({ item, favProd }) => {


    const [removeToWishListData, addToWishListData, handelFav, favImg] = ProductCardHook(item, favProd)

    return (
        <Col xs="10" sm="10" md="6" lg="3" className="d-flex">

        <Card
            className="my-2 hov d-flex">
            <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
            <Card.Img style={{ height: "228px", width: "100%" }}  src={`http://127.0.0.1:8000/products/${item.imageCover}`} />
            </Link>
           
            <Card.Body>
                <Card.Title>
                    <div className="card-title my-2">
                        {item.title}
                    </div>
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
                    className="text-center my-3"
                    style={{
                        height: "24px",
                        width: "26px",
                        cursor: 'pointer'
                    }}
                />
            </div>
                    </div>
                    <div>
                    <div className="d-flex">
                        <div className="card-price">
                                {item.priceAfterDiscount >= 1 ?
                                    (<div> {item.priceAfterDiscount}  <span style={{ textDecorationLine: 'line-through', color:"gray" }}>{item.price}</span></div>)
                                    : item.price}
                            </div>
                       
                            {item.priceAfterDiscount >= 1 ?
                                    (<span className='dis mx-2 '>{Math.round(((item.price)-(item.priceAfterDiscount))/(item.price)*100)} % </span>)
                                    : " "}
                        </div>
                    </div>
                </Card.Text>
            
            </Card.Body>
        </Card>
        <ToastContainer />
    </Col>
    )
}

export default ProductCardFav