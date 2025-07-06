import React , {useRef} from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupon/add-coupon-hook';
import AdminCouponCard from './AdminCouponCard';

function AdminAddCoupon() {
    const dateRef = useRef();
    const[coupnName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, coupons] = AddCouponHook();
  return (
    <div>
    <Row className="justify-content-start ">
      <div className="admin-content-text pb-4 fon fs-1">  Copouns</div>
        <Col sm="8">
            <input
            value={coupnName}
            onChange={onChangeName}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" Copoun Name" 
            />
        </Col>
        <Col sm="8">
            <input
            ref={dateRef}
            value={couponDate}
            onChange={onChangeDate}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" Expire Date " 
                onFocus={()=> dateRef.current.type="date"}
                onBlur={()=> dateRef.current.type="text"}
            />
        </Col>
        <Col sm="8">
            <input
             value={couponValue}
             onChange={onChangeValue}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="%" 
               
            />
        </Col> 
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSubmit} className="btn-save d-inline mt-2 ">Add Copoun  </button>
        </Col>
        <Row>
            <Col sm="8">
            {
                 coupons ? (coupons.map((item, index) => {
                    return <AdminCouponCard key={index} coupon={item} />
                })) : <h6> Empty </h6>
            }
            </Col>
        </Row>
    <ToastContainer />
    </Row>
   
</div>
  )
}

export default AdminAddCoupon