import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import CardProductsContainerFav from '../Products/CardProductsContainerFav';

const UserFavoriteProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.addToWishListReducer.allWishList)
    useEffect(() => {
        if (loading === false) {
            if (res.data)
                setItems(res.data)
            console.log(res.data)
        }
    }, [loading])

    return (
        <div>
            <div className="admin-content-text pb-4 fon fs-4">Favourite List </div>
            <Row className='justify-content-start'>
            {
                    items.length <= 0 ? (<h6 className='fon fs-1'> There Is no Items Here </h6>) : <CardProductsContainerFav products={items} title="" btntitle="" />
                }
            </Row>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct
