import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import EditAddressHook from '../../hook/user/edit-address-hook'

const UserEditAddress = () => {
    const { id } = useParams()
    const [handelEdit, alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone] = EditAddressHook(id)
    return (
        <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-2">Edit Address </div>
            <Col sm="8">
                <input
                    value={alias}
                    onChange={onChangeAlias}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder=
                    "(HOME - WORK )"
                />
                <textarea
                    value={details}
                    onChange={onChangeDetails}
                    className="input-form-area p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder=" Address"
                />
                <input
                    value={phone}
                    onChange={onChangePhone}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Phone"
                />
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button onClick={handelEdit} className="btn-save d-inline mt-2 mon fs-5 ">Edit Address </button>
            </Col>
        </Row>
        <ToastContainer />
    </div>
    )
}

export default UserEditAddress
