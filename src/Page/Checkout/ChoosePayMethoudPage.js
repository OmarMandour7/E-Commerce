import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethoud from '../../Components/Checkout/ChoosePayMethoud'
import GetAllUserCart from '../../hook/cart/get-all-user-cart';

const ChoosePayMethoudPage = () => {
    const  [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCart();
    return (
        <Container style={{minHeight:'670px'}}>
           <ChoosePayMethoud  totalCartPrice ={totalCartPrice} totalCartPriceAfterDiscount ={totalCartPriceAfterDiscount} />
        </Container>
    )
}

export default ChoosePayMethoudPage
