import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../hook/category/add-category-hook'
import { ToastContainer} from 'react-toastify';
const AdminAddCategory = () => {

    const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] =AddCategoryHook();


    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text fon  pb-4"> Add New Category </div>
                <Col sm="8">
                    <div className="text-form pb-2">Category Logo </div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>

                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" Category"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 fon">Add Category </button>
                </Col>
            </Row>

            {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4> Done</h4> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminAddCategory
