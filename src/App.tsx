import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slidebar from './Components/Navigation/Nav';
import Selection from './Components/Selection/Selection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='col-sm-2' ><Slidebar/></div>
        <div className='col-sm-8' ><Content/></div>
        <div className='col-sm-2' ><Selection/></div>
      </div> 
    </div>
  );
}

export default App;
