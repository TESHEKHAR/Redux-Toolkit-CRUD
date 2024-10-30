// UserDetails.jsx
import React from 'react';

const UserDetails = () => {
  return (
    <>
      <div className="overflow-x-auto py-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Category</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Stock Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 1</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Electronics</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$299.99</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">In Stock</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                >
                  View
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 2</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Home Appliances</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$199.99</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Out of Stock</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                >
                  View
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 3</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Fashion</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$49.99</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">In Stock</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                >
                  View
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDetails;
