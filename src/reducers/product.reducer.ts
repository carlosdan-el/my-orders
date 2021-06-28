import { createReducer, on } from '@ngrx/store';
import { CartModel } from '../entities/CartModel';
import { add, remove, update } from '../actions/product.actions';

export const initialState: CartModel = new CartModel();

const _productReducer = createReducer(
  initialState,
  on(add, (state, action) => {

    const data = state.products.map((value) => value.id === action.id ?
    {...value, quantity: value.quantity + action.quantity} : value);
    const index = data.findIndex(item => item.id === action.id);

    if(data.length > 0 && index > -1) {
      state = {...state, products: data}
    } else {
      state = {...state, products: [...state.products, action]}
    }
    
    return state;
  }),
  on(update, (state, action) => {
    const data = state.products.map((value) => value.id === action.id ?
    {...value, quantity: action.quantity} : value);

    state = {...state, products: data}
    console.log(state);
    return state;
  }),
  on(remove, (state, action) => {
    return {
      ...state,
      products: state.products.filter(item => item.id != action.id)
    }
  })
);

export function productReducer(state: any, action: any) {
  return _productReducer(state, action);
}