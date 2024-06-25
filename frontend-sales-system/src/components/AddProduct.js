import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', { name, price });
      alert('Product added successfully');
      setName('');
      setPrice('');
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
