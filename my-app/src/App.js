
import React from 'react';
import CarouselComponent from './components/CarouselComponent';
import FormComponent from './components/FormComponent';
import AvatarScrollComponent from './components/AvatarScrollComponent';
import ImagesScrollComponent from './components/ImagesScrollComponent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <CarouselComponent />
      <FormComponent />
      <div className="section">
        <AvatarScrollComponent />
        <ImagesScrollComponent />
      </div>
    </div>
  );
}

export default App;
