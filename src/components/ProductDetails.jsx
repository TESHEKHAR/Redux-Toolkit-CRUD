import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../redux/productsSlice';
import ProductForm from './ProductForm';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true); 
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id))
        .then(() => {
          dispatch(getProducts());
        })
        .catch((err) => {
          console.error("Error deleting product:", err);
        });
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const refreshProducts = () => {
    dispatch(getProducts());
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
                {product.image ? (
                  <img src={product.image} alt={product.productName} className="h-12 w-12 object-cover" />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td className="whitespace-nowrap px-4 py-2">{product.productName}</td>
              <td className="whitespace-nowrap px-4 py-2">{product.category?.name}</td>
              <td className="whitespace-nowrap px-4 py-2">${product.price}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <button
                  className="mr-2 text-blue-600 hover:underline"
                  onClick={() => handleUpdateClick(product)}
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
        <ProductForm
          product={selectedProduct}
          closeModal={closeModal}
          onSuccess={refreshProducts}
        />
      )}
    </div>
  );
};

export default ProductDetails;
