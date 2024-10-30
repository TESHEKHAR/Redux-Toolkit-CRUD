import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/apiConfig';

// Fetch products
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await api.get('/products');
  return response.data;
});

// Create a new product
export const addProduct = createAsyncThunk('products/addProduct', async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload); 
      });
  },
});

export default productsSlice.reducer;
