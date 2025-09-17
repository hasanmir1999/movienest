import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoviesWT = createAsyncThunk(
  "moviesWT/fetchMoviesWTStatus",
  async ({ page, genre }) => {
    const query =
      genre  !== ""
        ? `&genre=${genre}`
        : "";

    const res = await fetch(
      `https://movienest.liara.run/api/movie/all_movies?page=${page}&page_size=10&sort_by=created_at&sort_order=desc${query}`
    );
    
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    const movies = await res.json()
    return movies;
  }
);




const moviesWTSlice = createSlice({
  name: "moviesWT",
  initialState: {
    list: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesWT.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoviesWT.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.total = action.payload.total;
      })
      .addCase(fetchMoviesWT.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default moviesWTSlice.reducer;
