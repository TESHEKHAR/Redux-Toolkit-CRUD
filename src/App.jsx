// App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <div className="flex justify-end p-4">
        <a
          className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
        >
          <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
            Create Product
          </span>
        </a>
      </div>
      <ProductDetails />
      {isModalOpen && <ProductForm closeModal={closeModal} />}
    </>
  );
}

export default App;
