import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/productsAction";
const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);

let items = [];

if (allProducts.data) {
    items = allProducts.data.slice(0,4);
}
else{
    items = [];
}
  return [items];
};

export default ViewHomeProductsHook;
