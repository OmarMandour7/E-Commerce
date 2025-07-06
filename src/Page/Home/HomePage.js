import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import ViewHomeProductsHook from '../../hook/product/view-home-products-hook';
const HomePage = () => {

     const [items] = ViewHomeProductsHook()




    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer products = {items} title="TOP Selling " btntitle="More" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products = {items} title=" New Arrivals" btntitle="More" pathText="/products" />
            <BrandFeatured title="Top Brands" btntitle="More"  />

        </div>
    )
}

export default HomePage
