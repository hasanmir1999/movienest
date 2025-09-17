import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithToken } from "@/utils/fetchWithToken";
import { delWithToken } from "@/utils/delWithToken";
import { putWithToken } from "@/utils/putWithToken";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsersStatus",
  async ({ page, searchInput }) => {
    const query =
      searchInput && searchInput.trim() !== ""
        ? `&search=${encodeURIComponent(searchInput.trim())}`
        : "";

    const users = await fetchWithToken(
      `https://movienest.liara.run/api/admin/users?page=${page}&page_size=10${query}`
    );
    return users;
  }
);


export const deleteUser = createAsyncThunk(
  "users/deleteUserStatus",
  async (id) => {
    const res = await delWithToken(
      `https://movienest.liara.run/api/admin/users/${id}`
    );
    return id;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUserStatus",
  async ({id , newData}) => {
    const res = await putWithToken(
      `https://movienest.liara.run/api/admin/users/${id}`,
      newData
    );
    return res;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.total = action.payload.total
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((user) => user.id === action.payload);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default usersSlice.reducer;
