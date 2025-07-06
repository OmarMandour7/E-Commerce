import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'

import HomeBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeatured = ({ title, btntitle }) => {
    const [brand, loading]= HomeBrandHook();
  
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>

                {
                    loading === false ? (
                        brand.data ? (
                            brand.data.slice(0, 5).map((item, index) => {
                                return (<BrandCard key={index} id={item._id} img={item.image} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

            </Row>
        </Container>
    )
}

export default BrandFeatured
