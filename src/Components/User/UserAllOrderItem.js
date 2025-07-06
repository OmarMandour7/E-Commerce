import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({orderItem}) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-order mt-2">
        <Row>
            <div className="py-2 order-title">Order Number   #{orderItem.id || 0} ........ In  {formatDate(orderItem.createdAt)}</div>
        </Row>
        {
            orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                return <UserAllOrderCard key={index} item={item} />
            })) : null
        }

        <Row className="d-flex justify-content-between">
            <Col xs="10" className="d-flex">
                <div>
                    <div className="d-inline mx-2"> Delivery</div>
                    <div className="d-inline mx-1 stat">{orderItem.isDelivered === true ? 'Done  ' : 'Not Yet'}</div>
                </div>
                <div>
                    <div className="d-inline mx-2"> Paid  </div>
                    <div className="d-inline mx-1 stat">{orderItem.isPaid === true ? ' Done' : 'Not Yet'}</div>
                </div>

                <div>
                    <div className="d-inline"> Paid By  </div>
                    <div className="d-inline mx-1 stat">{orderItem.paymentMethodType === 'cash' ? 'Cash' : 'Visa '}</div>
                </div>
            </Col>
            <Col xs="2" className="d-flex justify-content-end">
                <div>
                    <div className="barnd-text fon fs-3 ">{orderItem.totalOrderPrice || 0}</div>
                </div>
            </Col>
        </Row>
    </div>
    )
}

export default UserAllOrderItem
