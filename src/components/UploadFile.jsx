import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://ec2-13-201-104-191.ap-south-1.compute.amazonaws.com:8080/pricing/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data);
      setError('');
    } catch (err) {
      setError('Error uploading file');
      setMessage('');
    }
  };

  return (
    <div>
      <h1 style={{ color: 'orange' }}>Upload Pricing Records</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        style={{ backgroundColor: 'pink', color: 'white', marginLeft: '10px' }}
      >
        Upload
      </button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UploadFile;