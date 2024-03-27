import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/utils/redux_toolkit/cartSlice";
import wishListReducer from "@/utils/redux_toolkit/wishlistSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishListReducer
  },
});

export default appStore;
