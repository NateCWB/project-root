import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList.js';
import AddProduct from './components/AddProduct.js';
import EmployeePanel from './components/EmployeePanel.js';
import Login from './components/Login.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/employee" element={<EmployeePanel />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;