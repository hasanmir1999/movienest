import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWithToken } from "@/utils/fetchWithToken";
import { delWithToken } from "@/utils/delWithToken";
import { putWithToken } from "@/utils/putWithToken";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMoviesStatus",
  async ({ page, searchInput }) => {
    const query =
      searchInput && searchInput.trim() !== ""
        ? `&search=${encodeURIComponent(searchInput.trim())}`
        : "";

    const movies = await fetchWithToken(
      `https://movienest.liara.run/api/admin/movies?page=${page}&page_size=10${query}`
    );
    return movies;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovieStatus",
  async (id) => {
    const res = await delWithToken(
      `https://movienest.liara.run/api/admin/movies/${id}`
    );
    return id;
  }
);

export const updateMovie = createAsyncThunk(
  "movies/updateMovieStatus",
  async ({ id, newData }) => {
    const res = await putWithToken(
      `https://movienest.liara.run/api/admin/movies/${id}`,
      newData
    );
    return res;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.total = action.payload.total;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.list = state.list.filter((movie) => movie.id !== action.payload);
      })

      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default moviesSlice.reducer;
