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

// Update a product
export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, productData }) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data;
});


// Delete a product
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await api.delete(`/products/${id}`);
  return id;
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
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
