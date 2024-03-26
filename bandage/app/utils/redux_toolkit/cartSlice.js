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
      if(state.itemsCount[`${action.payload.id}`]) {
        state.itemsCount[`${action.payload.id}`]++;
      } else {
        state.items.push(action.payload);
        state.itemsCount[`${action.payload.id}`] = 1;
      }
    },
    removeItem: (state, action) => {
      if(state.itemsCount[`${action.payload.id}`]) {
        state.itemsCount[`${action.payload.id}`]--;
        let indexToRemove = items.findIndex(item => item.id === action.payload.id);
        if (indexToRemove !== -1) {
            array.splice(indexToRemove, 1);
        }
      } else {
        console.log('no item found')
      }
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
