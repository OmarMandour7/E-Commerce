import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'
import { ToastContainer } from 'react-toastify'

const AdminAllProducts = ({products}) => {
    return (
        <div>
            <div className='admin-content-text fon'> All Products </div>
            <Row className='justify-content-start'>

                {
                    products ? (
                        products.map((item,index) => <AdminAllProductsCard key={index} item={item} />)

                    ) : <h4> No Products </h4>
                }


               
                
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAllProducts
