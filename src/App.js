import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/HomePage.js'
import Generation from './pages/Gens/Generation/GenerationPage.js';
import GenerationII from './pages/Gens/GenerationII/GenerationII.js';
import GenerationIII from './pages/Gens/GenerationIII/GenerationIII.js';
import GenerationIV from './pages/Gens/GenerationIV/GenerationIV.js';

import CategoryGrass from './pages/Categorys/Grass/CategoryGrass';
import CategoryFire from './pages/Categorys/Fire/CategoryFire';
import CategoryWater from './pages/Categorys/Water/CategoryWater';
import CategoryLightning from './pages/Categorys/Lightning/CategoryLightning';







class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/generation/1' element={<Generation />} />
          <Route exact path='/generation/2' element={<GenerationII />} />
          <Route exact path='/generation/3' element={<GenerationIII />} />
          <Route exact path='/generation/4' element={<GenerationIV />} />

          <Route exact path='/category/grass' element={<CategoryGrass />} />
          <Route exact path='/category/fire' element={<CategoryFire />} />
          <Route exact path='/category/water' element={<CategoryWater />} />
          <Route exact path='/category/lightning' element={<CategoryLightning />} />
        </Routes>

      </div>
    );
  }
}

export default App;