import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById, fetchBrands } from "./operations.js";

const loadFavorites = () => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const initialState = {
  cars: [],
  brands: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
    limit: 16,
    page: 1,
  },
  favorites: loadFavorites(),
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearCars(state) {
      state.cars = [];
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((favId) => favId != id);
      } else {
        state.favorites.push(id);
      }
      saveFavorites(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        if (state.filters.page === 1) {
          state.cars = action.payload;
        } else {
          state.cars = {
            ...action.payload,
            cars: [...(state.cars?.cars || []), ...action.payload.cars],
          };
        }
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to load cars list. Please try again later.";
      })
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to load the car details. Please try again later.";
      });
  },
});

export const { setFilters, clearCars, toggleFavorite } = carsSlice.actions;
export default carsSlice.reducer;
