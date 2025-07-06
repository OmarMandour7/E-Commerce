
import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import ViewAddressesHook from './../../hook/user/view-addresses-hook';

import { ToastContainer } from 'react-toastify';
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook';
import OrderPayCardHook from '../../hook/checkout/order-pay-card-hook';
import notify from '../../hook/useNotifaction';

const ChoosePayMethoud = ( {totalCartPrice , totalCartPriceAfterDiscount} ) => {

    const [res] = ViewAddressesHook()
    const [handelChooseAddress, addressDetalis,handelCreateOrderCash] = OrderPayCashHook()
    const [handelCreateOrderCARD] = OrderPayCardHook(addressDetalis)
    const [type, setType] = useState('')
    const changeMathoud = (e) => {
        setType(e.target.value)
    }

    const handelPay = () => {
        if (type === "CARD") {
            console.log('order card')
            handelCreateOrderCARD()
        } else if (type === "CASH") {
            console.log('order cash')
            handelCreateOrderCash();
        } else {
            notify("Choose Way To Pay", "warn")
        }
    }

    return (
        <div>
            <div className="admin-content-text pt-5 mon  ">Choose Pay Way  </div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                    <input
                            onChange={changeMathoud}
                            style={{ cursor: 'pointer' }}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CARD"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2 mon" for="group1">
                        Payment by Visa
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="12" className="d-flex">
                    <input style={{ cursor: 'pointer' }}
                            onChange={changeMathoud}
                            name="group"
                            id="group2"
                            type="radio"
                            value="CASH"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2 mon" for="group2">
                        Cash on delivery
                        </label>
                    </Col>
                </Row>


                <Row className="mt-2">
                    <Col xs="4" className="d-flex">
                        <select name="address" id="address" className="select mt-1 px-2 " onChange={handelChooseAddress}  >
                            <option value="0">Select Address </option>
                            {
                                res ? (res.map((item, index) => {
                                    return( <option key={item._id} value={item._id}>{item.alias}</option>)
                                })) : <option key={0} value={0}> There is no Address</option>
                            }

                        </select>
                    </Col>
                </Row>



            </div>

            <Row >
                <Col xs="4" className="d-flex ">
                    <div className=" d-inline w-100 fon  ">  
                        {
                        totalCartPriceAfterDiscount >= 1 ?
                           (<div className='dark product-price border fs-6'>
                            <span
                              style={{ textDecorationLine: "line-through", color: "red" }}
                            >
                              {totalCartPrice}
                            </span>{" "}
                            {totalCartPriceAfterDiscount}
                           
                          </div>):
                            `${totalCartPrice}`
                    } </div>
                    
                </Col> <Col xs="4" className="d-flex ">
                   <div onClick={handelPay} className="product-cart-add px-3 pt-2 d-inline mon ">Order Now </div>
                </Col> 
            </Row>
            <ToastContainer />
        </div>
    )
}

export default ChoosePayMethoud