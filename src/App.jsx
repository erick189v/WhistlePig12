import { useState } from 'react'

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import WhistlePig from './components/Whistlepig';
import Ingredients from './components/Ingredients';
import Story from './components/Story';
// import { Routes,Route } from "react-router-dom";



import './App.css'
import Maps from './components/Maps';
import Experiencing from './components/Experiencing';

function App() {
  return (
    <>
    <Header />
    <div class="fixed bottle">
      <img class="fluid" src="src/assets/WhistlePig12bottle.png" alt="bottle"/>
    </div>
    <div className='App'>
      <WhistlePig/>
      <Ingredients/>
      <Story/>
      <Experiencing/>
      <Maps />

    </div>
    <Footer/>

    </>
  )
}

export default App;
