import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars, getCarById, getBrands } from "../api/api.js";

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async (filters, thunkAPI) => {
        try {
            const data = await getCars(filters);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

export const fetchCarById = createAsyncThunk(
    'cars/fetchCarById', 
    async (id, thunkAPI) => {
        try {
            const data = await getCarById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchBrands = createAsyncThunk(
    'cars/fetchBrands',
    async (_, thunkAPI) => {
        try {
            const data = await getBrands();
            return data;
            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);