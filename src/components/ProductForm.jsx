import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct, getProducts } from '../redux/productsSlice';
import { getCategory } from '../redux/categorySlice';

const ProductForm = ({ closeModal, product, onSuccess }) => {
  const dispatch = useDispatch();
  const { items: categories } = useSelector((state) => state.category);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stockStatus, setStockStatus] = useState('In Stock');

  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setCategory(product.category ? product.category._id : '');
      setPrice(product.price);
      setDescription(product.description);
      setStockStatus(product.stockStatus);
      setImagePreview(product.image);
    } else {
      setImagePreview('');
    }
    dispatch(getCategory());
  }, [dispatch, product]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('stockStatus', stockStatus);
    if (image) formData.append('image', image);

    const action = product
      ? updateProduct({ id: product._id, productData: formData })
      : addProduct(formData);

    try {
      await dispatch(action).unwrap();
      if (!product) {
        await dispatch(getProducts()); 
      }
      closeModal();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{product ? 'Update Product' : 'Create Product'}</h2>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Image</label>
            <input type="file" onChange={handleImageChange} className="w-full" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="h-20 mt-2" />}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {product ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
