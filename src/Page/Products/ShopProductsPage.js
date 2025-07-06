import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import ViewSearchProductsHook from '../../hook/product/view-search-product'

const ShopProductsPage = () => {

    const [items, pagination, getPage,getProduct , results] = ViewSearchProductsHook()
    if(pagination){
        var pageCount = pagination ; 
    }
    else{
        pageCount = 0 ;  // default value
    }
    
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult onClick={getProduct} title={`${results} Search Results `} />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <CardProductsContainer products = {items} title="" btntitle=""/>
                    </Col>
                </Row>
                {
                pageCount > 0 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
            }
            </Container>
        </div>
    )
}

export default ShopProductsPage
