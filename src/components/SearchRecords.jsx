import React, { useState } from 'react';
import axios from 'axios';

const SearchRecords = () => {
  const [storeId, setStoreId] = useState('');
  const [sku, setSku] = useState('');
  const [productName, setProductName] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://ec2-13-201-104-191.ap-south-1.compute.amazonaws.com:8080/pricing/search', {
        params: { storeId, sku, productName, date }
      });
      setResults(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Search Pricing Records</h1>
      <div>
        <input
          type="text"
          placeholder="Store ID"
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
        />
        <input
          type="text"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={handleSearch}
          style={{ backgroundColor: 'pink', color: 'white' }}
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {results.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Store ID</th>
                <th>SKU</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((record, index) => (
                <tr key={record.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                  <td>{record.storeId}</td>
                  <td>{record.sku}</td>
                  <td>{record.productName}</td>
                  <td>{record.price}</td>
                  <td>{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchRecords;