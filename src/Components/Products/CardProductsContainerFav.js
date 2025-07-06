import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'

import CardContainerHook from '../../hook/product/card-container-hook'
import ProductCardFav from './ProductCardFav'

const CardProductsContainerFav = ({title ,btntitle,pathText,products}) => {
    const [favProd] = CardContainerHook()

    return (
        <Container>
            {products ? (<SubTiltle title={title} btntitle={btntitle} pathText={pathText} />) : null}
            <Row className='my-2 d-flex justify-content-between'>
                {
                    products ? (
                        products.map((item, index) => <ProductCardFav favProd={favProd} key={index} item={item} />)
                    ) : null

                }

            </Row>
        </Container>
    )
}

export default CardProductsContainerFav
