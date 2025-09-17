import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithToken } from "@/utils/fetchWithToken";
import { delWithToken } from "@/utils/delWithToken";
import { PostWithToken } from "@/utils/postWithToken";

export const fetchCart = createAsyncThunk("cart/fetchCartStatus", async () => {
  const res = await fetchWithToken(`https://movienest.liara.run/api/user/cart`);
  return res;
});

export const addToCart = createAsyncThunk(
  "cart/addToCartStatus",
  async ({ id }) => {
    const item = await PostWithToken(
      `https://movienest.liara.run/api/user/cart/${id}`
    );
    return item;
  }
);

export const deleteCart = createAsyncThunk(
  "cart/deleteCartStatus",
  async ({ id }) => {
    await delWithToken(`https://movienest.liara.run/api/user/cart/${id}`);
    return id;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    total: 0,
    loading: false,
    totalPrice: 0,
    error: null,
  },
  reducers: {
    resetCart: (state) => {
      state.list = [];
      state.total = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload || [];
        state.total = state.list.length;
        state.totalPrice = state.list.reduce((sum, item) => {
          return sum + (Number(item.price) || 0);
        }, 0);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to load cart";
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        const id = action.payload;
        const idx = state.list.findIndex((movie) => movie.id === id);
        if (idx !== -1) {
          const removedPrice = Number(state.list[idx].price) || 0;
          state.list.splice(idx, 1);
          state.total = state.list.length;
          state.totalPrice = Math.max(0, state.totalPrice - removedPrice);
        }
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const item = action.payload;
        if (!item) return;
        state.list.push(item);
        state.total = state.list.length;
        state.totalPrice += Number(item.price) || 0;
      });
  },
});
export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;
