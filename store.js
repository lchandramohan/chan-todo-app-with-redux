import {createStore} from 'redux';
import {ADDITEM} from './actions';
const initialState = {
  items : []
}

export function reducer(state =initialState , action){
  switch(action.type){
    case ADDITEM:

      return { 
             ...state,
             items:[...state.items, action.payload.payload]
        }

    return state;
      default :
      return state;
  }
}

export const store  =   createStore(reducer);