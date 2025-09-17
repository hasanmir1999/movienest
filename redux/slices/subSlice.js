import { fetchWithToken } from "@/utils/fetchWithToken";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSub = createAsyncThunk(
  "sub/fetchSubStatus",
  async () => {
    const sub = await fetchWithToken('https://movienest.liara.run/api/user/subscriptions/history');
    return sub;
  }
);


const subSlice = createSlice({
  name: "sub",
  initialState: {
    subPlan: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSub.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSub.fulfilled, (state, action) => {
        state.loading = false;
        state.subPlan = action.payload.history.find(item => item.is_active === true);        
      })
      .addCase(fetchSub.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default subSlice.reducer;
