import { fetchWithToken } from "@/utils/fetchWithToken";
import { putWithToken } from "@/utils/putWithToken";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfileStatus",
  async (arg, thunkAPI) => {
    const token = getCookie("token"); 
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      const decode = jwtDecode(token);
      const data = await fetchWithToken(
        decode.role == 'admin' 
          ? 'https://movienest.liara.run/api/admin/get_me'
          : "https://movienest.liara.run/api/user/me"
      );
      const subInfo = await fetchWithToken('https://movienest.liara.run/api/user/subscriptions/history')
      return data 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk( "profile/updateProfileStatus" ,async({data})=>{
  const updatedUser = await putWithToken('https://movienest.liara.run/api/user/editme' , data )
  return updatedUser 
})




const profileSlice = createSlice({
  name: "profile",
  initialState:  {
    user: null,
    sub:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(updateProfile.fulfilled , (state, action) => {
        state.user = action.payload

      })
  }
});

export default profileSlice.reducer