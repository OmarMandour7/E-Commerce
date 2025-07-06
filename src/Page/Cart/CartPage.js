import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'
import GetAllUserCart from '../../hook/cart/get-all-user-cart'
import cartt from '../../images/cartt.png'
const CartPage = () => {
    const  [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCart();

    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title fon mt-4'>Cart</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                   {
                    cartItems.length >=1 ?  (cartItems.map((item ,index) => {
                    return ( <CartItem key={index} item={item} />)  
                    })) : <img src={cartt}/>
                   }
                    
                </Col>

                <Col xs="6" md="3" className='p-1'>
                    <CartCheckout couponNameRes={couponNameRes} cartItems={cartItems} totalCartPrice ={totalCartPrice} totalCartPriceAfterDiscount ={totalCartPriceAfterDiscount}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage
