import { createSlice, current } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    isWishlistMenuOpen: false,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
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
