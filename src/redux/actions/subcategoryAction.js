import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../type";

export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subcategories`, data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
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
// get subcategory by id
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await  useGetData (
      `/api/v1/categories/${id}/subcategories`
    );

    dispatch({
      type: GET_SUB_CATEGORY,
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
export default createSubCategory;
