import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';

import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';

import { useParams } from 'react-router-dom';
import AdminEditProductsHook from '../../hook/product/edit-product-hook';

const AdminEditProducts = () => {
  const{id} = useParams();
  const [CatID,subCatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName] =
        AdminEditProductsHook(id);
  
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text mon pb-4">   Edit  -{prodName}</div>
                <Col sm="8">
                <div className=" pb-2 mon"> Product Photos</div>


                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />

                    <input
                        value={prodName}
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product  "
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Decription "
                        value={prodDescription}
                        onChange={onChangeDesName}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" priceBefore "
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" priceAftr "
                        value={priceAftr}
                        onChange={onChangePriceAfter}
                    />
                    <input
                   
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Quantity "
                        value={qty}
                        onChange={onChangeQty}
                    />
                    <select
                        name="cat"
                        value={CatID}
                        onChange={onSeletCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0"> Category</option>
                        {
                            category.data ? (category.data.map((item) => {
                                return (
                                    <option value={item._id}>{item.name}</option>
                                )
                            })) : null

                        }
                    </select>

                    <Multiselect
                       
                        className="mt-2 text-end"
                        placeholder=" Subcategory"
                        value={subCatID}
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                     value={BrandID}
                        name="brand"
                        onChange={onSeletBrand}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Brand </option>
                        {
                            brand.data ? (brand.data.map((item ,index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null

                        }
                    </select>
                    <div className=" mt-3 fon my-2">Colors   </div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}></div>
                                    )
                                })

                            ) : null
                        }

                        <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                        }

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 fon"> Edit Product</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
  )
}

export default AdminEditProducts