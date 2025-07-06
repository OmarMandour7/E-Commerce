import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetalis from "../../Components/Products/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);
  if (prod) var items = prod.slice(0, 4);
  if (item) {
    var rateAvg = item.ratingsAverage
    var rateQty = item.ratingsQuantity
  }
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis /> 
        <RateContainer rateAvg={rateAvg}  rateQty={rateQty} />
        <CardProductsContainer products={items} title="Products You May Like" />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ProductDetalisPage;
