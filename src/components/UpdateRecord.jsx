import React, { useState } from 'react';
import axios from 'axios';

const UpdateRecord = () => {
  const [id, setId] = useState('');
  const [storeId, setStoreId] = useState('');
  const [sku, setSku] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    if (!id) {
      setError('Please enter the record ID');
      return;
    }

    const updatedRecord = { storeId, sku, productName, price, date };

    try {
      const response = await axios.put(`http://ec2-13-201-104-191.ap-south-1.compute.amazonaws.com:8080/pricing/${id}`, updatedRecord);
      setMessage('Record updated successfully');
      setError('');
    } catch (err) {
      setError('Error updating record');
      setMessage('');
    }
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>Update Pricing Record</h1>
      <div>
        <input
          type="text"
          placeholder="Record ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Store ID"
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <button
          onClick={handleUpdate}
          style={{ backgroundColor: 'pink', color: 'white', marginTop: '10px' }}
        >
          Update
        </button>
      </div>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UpdateRecord;