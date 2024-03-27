import { createSlice, current } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    isWishlistMenuOpen: false,
    items: [],
    itemExist: {}
  },
  reducers: {
    addItem: (state, action) => {
      if(!state.itemExist[`${action.payload.id}`]) {
        state.itemExist[`${action.payload.id}`] = true;
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      if(state.itemExist[`${action.payload.id}`]) {
        delete state.itemExist[`${action.payload.id}`];
        let indexToRemove = items.findIndex(item => item.id === action.payload.id);
        if (indexToRemove !== -1) {
            array.splice(indexToRemove, 1);
        }
      } else {
        console.log('no item found')
      }
    },
    clearWishlist: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      state.items.length = 0; // originalState = []

    //   return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
    toggleWishlistMenu: (state) => {
        state.isWishlistMenuOpen = !state.isWishlistMenuOpen;
    }
  },
});

export const { addItem, removeItem, clearWishlist, toggleWishlistMenu } = wishlistSlice.actions;

export default wishlistSlice.reducer;
