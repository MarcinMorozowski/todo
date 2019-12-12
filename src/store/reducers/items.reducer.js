import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/items.actions';

const initialState = {
  items: [
    {id: 1, text: 'First thing to do', status: false},
    {id: 2, text: 'Second thing to do', status: false}
  ]
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, items: [...state.items, action.item] };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    case TOGGLE_TODO:
      const updatedItems = state.items.map((item) => (
        item.id === action.id ? {...item, status: !item.status} : item
      ))
      return {
        ...state, items: updatedItems
      }
    default:
      return state;
  }
};
