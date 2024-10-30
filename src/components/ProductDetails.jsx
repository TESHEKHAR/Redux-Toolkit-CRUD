import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productsSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();

  // Access products and loading state from Redux
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts()); // Fetch products on component mount
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Category</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Stock Status</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.productName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.category ? product.category.name : 'N/A'}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">${product.price}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.stockStatus}</td>
              <td className="whitespace-nowrap px-4 py-2 rounded-md ">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2">View</a>
                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2">Edit</a>
                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
