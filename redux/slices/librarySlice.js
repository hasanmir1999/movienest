import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithToken } from "@/utils/fetchWithToken";
import { PostWithToken } from "@/utils/postWithToken";
import { resetCart } from "./cartSlice";

export const fetchLibrary = createAsyncThunk(
  "library/fetchLibraryStatus",
  async () => {
    const library = await fetchWithToken(
      `https://movienest.liara.run/api/user/library`
    );
    return library;
  }
);

export const addToLibrary = createAsyncThunk(
  "library/addToLibraryStatus",
  async (_ ,thunkAPI) => {
    thunkAPI.dispatch(resetCart())
    const items = await PostWithToken(
      `https://movienest.liara.run/api/user/cart/purchase`
    );
    return items;
  }
);

const librarySlice = createSlice({
  name: "library",
  initialState: {
    list: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibrary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.total = action.payload.length;
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToLibrary.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload.purchased_movies];
        state.total += action.payload.length;
      });
  },
});

export default librarySlice.reducer;
