import { GET_PRODUCT_ITEM, GET_ALL_PRODUCTS, GET_PRODUCT_FILTER_ITEM, GET_PRODUCTS_PENDING } from "../constants/getAllProducts";

export const getProductItemAction = (value) => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(
            `https://timekeeper-back-end.herokuapp.com/products/${value}`, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: GET_PRODUCT_ITEM,
            payload: data
        });
    } catch (err) {
        alert(err);
    }

}

export const getProductsFilterAction = (dataFilter) => async dispatch => {
    const { limit, productName, promotionPrice } = dataFilter
    const minPrice = dataFilter.promotionPrice[0]
    const maxPrice = dataFilter.promotionPrice[1]
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(
            `https://timekeeper-back-end.herokuapp.com/products?limit=${limit}&productName=${productName}&minPrice=${minPrice}&maxPrice=${maxPrice}`, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: GET_PRODUCT_FILTER_ITEM,
            payload: data
        });
    } catch (err) {
        alert(err);
    }

}

export const getAllProductsAction = (value) => async dispatch => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    await dispatch({
        type: GET_PRODUCTS_PENDING
    });

    try {
        const response = await fetch(
            `https://timekeeper-back-end.herokuapp.com/allProducts?limit=${value}`, requestOptions
        );

        const data = await response.json();
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data.products
        });
    } catch (err) {
        alert(err);
    }
};