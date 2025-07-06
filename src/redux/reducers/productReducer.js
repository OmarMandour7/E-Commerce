import {  GET_ERROR,GET_ALL_PRODUCT,GET_ALL_PRODUCTS_CATEGORY,DELETE_PRODUCT,UPDATE_PRODUCT, CREATE_PRODUCT , GET_ALL_PRODUCTS_BRAND ,GET_PRODUCT_LIKE,GET_PRODUCT_DETAILS } from '../type'

const inital = {
    products: [],
    allProducts: [],
    oneProduct : [],
    productLike: [],
    deleteProducts :[],
    updateProducts:[],
    allProductCat:[],
    allProductBrand: [],
    loading: true,
}
const productsReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
            case GET_PRODUCT_DETAILS:
            return {
                oneProduct: action.payload,
                loading: false,
            }
            case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
            case DELETE_PRODUCT:
            return {
                ...state,
                deleteProducts: action.payload,
                loading: false,
            }
            case UPDATE_PRODUCT:
            return {
                ...state,
                updateProducts: action.payload,
                loading: false,
            }
            case GET_ALL_PRODUCTS_CATEGORY:
                return {
                    ...state,
                    allProductCat: action.payload,
                    loading: false,
                }
                case GET_ALL_PRODUCTS_BRAND:
                    return {
                        loading: true,
                        allProductBrand: action.payload,
                    }
        
        case GET_ERROR:
            return {
                loading: true,
                products: action.payload,
            }
        default:
            return state;
    }
}
export default productsReducer