import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api/apiConfig';

//fatch category
export const getCategory = createAsyncThunk('category/getCategory', async () => {
    const response = await api.get('/categories');
    return response.data;
});


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(getCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(getCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default categorySlice.reducer;