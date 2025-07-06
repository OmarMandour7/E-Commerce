import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import ee from '../../images/Infinity Growth.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook';
import { useParams } from 'react-router-dom';
const ProductGallery = () => {

    const {id} = useParams();
   const [item ,images] = ViewProductDetailsHook(id)
  
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={ee}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
