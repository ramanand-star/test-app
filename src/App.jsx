import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UploadFile from './components/UploadFile.jsx';
import SearchRecords from './components/SearchRecords.jsx';
import UpdateRecord from './components/UpdateRecord.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Pricing Records Management</h1>
      <p className='subtitle'>This is a sample application</p>
         <UploadFile />
         <SearchRecords />
         <UpdateRecord />
    </div>
  );
};

export default App
