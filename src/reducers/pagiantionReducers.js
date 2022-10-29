import { CHANGE_PAGE_PAGINATION, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from "../constants/pagination";

const limit = 6;

const initialState = {
  products: [],
  pending: false,
  noPage: 1,
  error: '',
  currentPage: 1
}

export default function paginationReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data.slice((state.currentPage - 1) * limit, state.currentPage * limit),
        noPage: Math.ceil(action.data.length / limit),
        pending: false
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false
      };
    case CHANGE_PAGE_PAGINATION:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state;
  }
}