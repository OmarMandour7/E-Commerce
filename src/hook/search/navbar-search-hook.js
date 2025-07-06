import React, { useEffect, useState } from "react";
import ViewSearchProductsHook from "../product/view-search-product";

const NavbarSearchHook = () => {
    const  [items, pagination, getPage,getProduct] = ViewSearchProductsHook();

  const [searchWord, setSearchWord] = useState(" ");
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord",e.target.value );
    setSearchWord(e.target.value);
    const path = window.location.pathname ;
    if(path != '/products'){
      window.location.href = "/products"
    }
  };

  useEffect(() => {
   setTimeout(() => {
    getProduct();
   }, 1000); 
    
   
  }, [searchWord])
  
  return [OnChangeSearch, searchWord];
};

export default NavbarSearchHook;
