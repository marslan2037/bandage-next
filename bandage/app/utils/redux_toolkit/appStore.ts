import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/utils/redux_toolkit/cartSlice";
import wishListReducer from "@/app/utils/redux_toolkit/wishlistSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishListReducer
  },
});

export default appStore;
