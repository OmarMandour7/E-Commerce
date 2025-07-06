import{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getAllProductPage } from "../../redux/actions/productsAction";
const ViewProductsAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct(9));
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  const getPage = async(page) => {
    await dispatch(getAllProductPage(page,9));
     
 }
let items = [];
let pagination = [];
try{
  if (allProducts.data) {
    items = allProducts.data;
}
else{
    items = [];
}

if (allProducts.paginationResult)
    pagination = allProducts.paginationResult.numberOfPages;
else
    pagination = []

}
catch(e){

}


  
  return [items ,pagination ,getPage];
};

export default ViewProductsAdminHook;
