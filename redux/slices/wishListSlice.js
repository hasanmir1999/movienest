import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithToken } from "@/utils/fetchWithToken";
import { delWithToken } from "@/utils/delWithToken";
import { PostWithToken } from "@/utils/postWithToken";

export const fetchWishList = createAsyncThunk(
  "wishList/fetchWishListStatus",
  async () => {
    const res = await fetchWithToken(
      `https://movienest.liara.run/api/user/wishlist`
    );
    return res;
  }
);

export const addToWishList = createAsyncThunk(
  "wishList/addToWishListStatus",
  async ({ id }) => {
    const item = await PostWithToken(
      `https://movienest.liara.run/api/user/wishlist/${id}`
    );
    return item;
  }
);

export const deleteWishList = createAsyncThunk(
  "wishList/deleteWishListStatus",
  async ({ id }) => {
    const res = await delWithToken(
      `https://movienest.liara.run/api/user/wishlist/${id}`
    );
    return id;
  }
);

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    list: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.total = action.payload.length;
      })
      .addCase(fetchWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteWishList.fulfilled, (state, action) => {
        state.list = state.list.filter((movie) => movie.id !== action.payload);
        state.total -= 1;
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
          state.list.push(action.payload);
          state.total += 1;
      });
  },
});

export default wishListSlice.reducer;
