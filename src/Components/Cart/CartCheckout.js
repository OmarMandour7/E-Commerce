import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import DeleteCartHook from '../../hook/cart/delete-cart-hook'
import { ToastContainer } from 'react-toastify'
import ApplayCouponHook from '../../hook/cart/apply-coupon-hook'
import CartItem from './CartItem'
import notify from '../../hook/useNotifaction'

const CartCheckout = ({couponNameRes ,cartItems, totalCartPrice ,totalCartPriceAfterDiscount }) => {
    const [handelDeleteCart, show, handleClose, handleShow, handelDeleteItem, itemCount, onChangeCount, handeleUpdateCart] = DeleteCartHook()
    const [couponName, onChangeCoupon, handelSubmitCoupon ,handelCheckOut] = ApplayCouponHook(cartItems)
    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes)
        }
    }, [couponNameRes])

   
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout ">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                     value={couponName}
                     onChange={(e) => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline fs-5 text-center "
                        placeholder="Redeem Code"
                    />
                    <button onClick={handelSubmitCoupon} className="copon-btn d-inline fs-4 ">Add</button>
                </div>
                <div className="product-price d-inline w-100 my-2  border">
                    {
                        totalCartPriceAfterDiscount >= 1 ?
                           (<div className='dark fs-3'>
                            <span
                              style={{ textDecorationLine: "line-through", color: "red" }}
                            >
                              {totalCartPrice}
                            </span>{" "}
                            {totalCartPriceAfterDiscount}
                           
                          </div>):
                            `${totalCartPrice}`
                    }
                </div>
                <div className='my-2'>
                <button onClick={handelCheckOut} className=" d-inline product-cart-buy mon  ">Order Now</button>
                <button onClick={handelDeleteCart } className="product-cart-add  mon bg-danger ">Empty Cart</button>
                
                </div>
               

                   
             
            </Col>
            <ToastContainer/>
        </Row>
    )
}

export default CartCheckout
