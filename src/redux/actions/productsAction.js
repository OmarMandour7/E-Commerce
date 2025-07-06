import UseDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import {
  GET_ERROR,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_PRODUCT_LIKE,
  CREATE_PRODUCT,
  GET_PRODUCT_DETAILS,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
} from "../type";

export const getAllProduct = (limit) => async (dispatch) => {
  try {
    const response = await  useGetData (`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const getAllProductsByCategory = (page, limit, categoryID) => async (dispatch) => {
  try {
      const response = await useGetData(`/api/v1/products?limit=${limit}&category=${categoryID}&page=${page}`);
      dispatch({
          type: GET_ALL_PRODUCTS_CATEGORY,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ALL_PRODUCTS_CATEGORY,
          payload: e.response,
      })
  }
}
//get all products by brand
export const getAllProductsByBrand = (page, limit, brandID) => async (dispatch) => {
  try {
      const response = await useGetData(`/api/v1/products?limit=${limit}&brand=${brandID}&page=${page}`);
      dispatch({
          type: GET_ALL_PRODUCTS_BRAND,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ALL_PRODUCTS_BRAND,
          payload: e.response,
      })
  }
}
export const getAllProductPage = (page, limit) => async (dispatch) => {
  try {
    const response = await  useGetData (
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await  useGetData (`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createProduct = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/products`, data);
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await  useGetData (`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// update product
export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// query string
export const getAllProductSearch = (queryString) => async (dispatch) => {
  try {
    const response = await  useGetData (`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
