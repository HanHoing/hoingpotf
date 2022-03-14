import React, { Component } from 'react';
import './App.css';

import Main from 'Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HHY from 'HHY/Hhy';
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main  />}></Route>
      <Route path="/hhy" element={<HHY />}></Route>
        </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;

