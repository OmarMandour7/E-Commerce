import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productsAction";
import load from "../../images/load.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";
const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productLike)
  // to show product item
  let item = [];
  if (oneProducts.data) {
    item = oneProducts.data;
  } else {
    item = [];
  }

  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand));
    }
    if (item.category) {
      dispatch(getProductLike(item.category));
    }
  }, [item]);

  // to show category item
  let cat = [];
  if (oneCategory.data) {
    cat = oneCategory.data;
  } else {
    cat = [];
  }
  //to show brand item
  let brand = [];
  if (oneBrand.data) brand = oneBrand.data;
  else brand = [];

  // to view images galary

  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: `${load}` }];
  }
  let prod = []
  if (productLike)
      prod = productLike.data;
  else
      prod = []
  return [item, images, cat, brand ,prod];
};

export default ViewProductDetailsHook;
