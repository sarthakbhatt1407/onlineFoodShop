import { createStore } from "redux";
const defaultState = {
  items: [],
  totalAmount: 0,
  emptyCart: true,
};
const storeReducer = (state = defaultState, action) => {
  if (action.type == "add") {
    const updatedAmount =
      state.totalAmount + action.meal.amount * action.meal.price;

    let updatedItems = [];
    const existingItemIndex = state.items.findIndex(
      (i) => i.id == action.meal.id
    );
    const existingItem = state.items[existingItemIndex];
    if (existingItemIndex >= 0) {
      let updatedItem;
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.amountValue,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      return {
        ...state,
        emptyCart: false,
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    } else {
      let meal = action.meal;
      let updatedItem = {
        ...meal,
        amount: action.amountValue,
      };
      updatedItems = [...state.items, updatedItem];

      return {
        ...state,
        emptyCart: false,
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
  } else if (action.type == "remover") {
    let updatedAmount = state.totalAmount;

    let updatedItems = state.items.filter((item) => {
      return action.item != item;
    });
    if (updatedItems.length >= 1) {
      const itemAmount = action.item.amount * action.item.price;
      updatedAmount -= itemAmount;
    } else {
      return {
        ...defaultState,
      };
    }
    return {
      ...state,
      emptyCart: false,
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return state;
};
const store = createStore(storeReducer);

export default store;
