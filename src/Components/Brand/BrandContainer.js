import React from 'react'
import BrandCard from './BrandCard'

import { Container, Row, Spinner } from 'react-bootstrap';

const BrandContainer = ({data , loading}) => {
 
    return (
        <Container>
            <div className="admin-content-text mt-2 fon my-3 ">All Brands </div>
            <Row className='my-1 d-flex justify-content-between'>

             
                {
                    loading === false ? (
                       data ? (
                            data.map((item, index) => {
                                return (<BrandCard key={index} id={item._id} img={item.image} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }
            </Row>
        </Container>
    )
}

export default BrandContainer
