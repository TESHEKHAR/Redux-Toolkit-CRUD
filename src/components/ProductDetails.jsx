import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../redux/productsSlice';
import ProductForm from './ProductForm'; // Import the ProductForm component

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    dispatch(getProducts()); // Fetch products on component mount
  }, [dispatch]);

  const handleUpdateClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  const closeModal = () => {
    setSelectedProduct(null); // Clear the selected product
    setIsModalOpen(false); // Close the modal
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Category</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="whitespace-nowrap px-4 py-2">
                {product.image ? ( // Check if the image exists
                  <img src={product.image} alt={product.productName} className="h-12 w-12 object-cover" />
                ) : (
                  <span>No Image</span> // Fallback if no image is available
                )}
              </td>
              <td className="whitespace-nowrap px-4 py-2">{product.productName}</td>
              <td className="whitespace-nowrap px-4 py-2">{product.category?.name}</td>
              <td className="whitespace-nowrap px-4 py-2">${product.price}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <button
                  className="mr-2 text-blue-600 hover:underline"
                  onClick={() => handleUpdateClick(product)} // Open modal for editing
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handleDeleteClick(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <ProductForm product={selectedProduct} closeModal={closeModal} /> // Pass selected product to form
      )}
    </div>
  );
};

export default ProductDetails;
