import { configureStore } from "@reduxjs/toolkit";
import profileSliceReducer from "@/redux/slices/profileSlice";
import usersSliceReducer from '@/redux/slices/usersSlice'
import moviesSliceReducer from '@/redux/slices/moviesSlice'
import wishListSliceReducer from '@/redux/slices/wishListSlice'
import moviesWTSliceReducer from '@/redux/slices/moviesWTSlice'
import cartSliceReducer from '@/redux/slices/cartSlice'
import subSliceReducer from '@/redux/slices/subSlice'
import librarySliceReducer from '@/redux/slices/librarySlice'

export const store = configureStore({
  reducer: {
    profile: profileSliceReducer,
    users: usersSliceReducer,
    movies: moviesSliceReducer,
    moviesWT: moviesWTSliceReducer,
    wishList: wishListSliceReducer,
    cart: cartSliceReducer,
    sub: subSliceReducer,
    library: librarySliceReducer
  },
});
