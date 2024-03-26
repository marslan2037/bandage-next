import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartMenuOpen: false,
    items: [],
    itemsCount: {}
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // if()
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      state.items.length = 0; // originalState = []

    //   return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
    toggleCartMenu: (state) => {
        state.isCartMenuOpen = !state.isCartMenuOpen;
    }
  },
});

export const { addItem, removeItem, clearCart, toggleCartMenu } = cartSlice.actions;

export default cartSlice.reducer;
