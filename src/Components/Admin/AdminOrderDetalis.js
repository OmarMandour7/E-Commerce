import React from 'react'
import { Row,Col } from 'react-bootstrap'

import { useParams } from 'react-router-dom'
import GetOrderDetalisHook from '../../hook/admin/get-order-details-hook'
import UserAllOrderItem from '../User/UserAllOrderItem'
import ChangeOrderStatusHook from '../../hook/admin/change-order-status-hook'
import { ToastContainer } from 'react-toastify'

const AdminOrderDetalis = () => {

    const {id} = useParams();
   const [orderData, cartItems] = GetOrderDetalisHook(id)
   const [formatDate, onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder] = ChangeOrderStatusHook(id)

   console.log(orderData)
    return (
        <div>
            <div className='admin-content-text fon fs-3 my-2'> Order Details  </div>
            <UserAllOrderItem orderItem={orderData} />

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2 fon"> Customer Details</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                       className='mon'>
                        Name:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.name : '' : ''}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                       className='mon'>
                       Phone : 
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.phone : '' : ''}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                       className='mon'>
                        Email :
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.email : '' : ''}
                    </div>
                </Col>
                <div className="d-flex mt-2 justify-content-start">
                    <Col sm="6">
                    <select
                            name="pay"
                            id="paid"
                            onChange={onChangePaid}
                            className="select input-form-area mt-1  text-center w-50">
                            <option value="0">Paid</option>
                            <option value="true">Done</option>
                            <option value="false">Not Yet</option>
                        </select>
                        <button onClick={changePayOrder} className="btn-a px-2 d-inline mx-3 fon">Save </button>
                    </Col>
                  <Col sm = "6">
                  <select
                            onChange={onChangeDeliver}
                            name="deliver"
                            id="deliver"
                            className="select input-form-area mt-1  text-center  w-50">
                            <option value="0">Delivery</option>
                            <option value="true">Done</option>
                            <option value="false">Not Yet</option>
                        </select>
                        <button onClick={changeDeliverOrder} className="btn-a px-2 d-inline mx-3 fon ">Save </button>
                  </Col>
                </div>
            </Row>
            <ToastContainer />

        </div>
    )
}

export default AdminOrderDetalis
