import React from 'react';
import './app.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  const saludo='holis'

  return(
    <BrowserRouter>
    <Navbar hola='hola'/>
    <ItemListContainer greeting='Bienvenidos a PRUNE' saludo={saludo}/>
    <h1>Bienvenidos a mi primer intento de hacer una pagina con react!</h1>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/pokemons" element={<Pokemons />} />
      <Route exact path="/pokemon/:pokemonId" element={<Pokemons />} />
      <Route exact path="/category/:categoryId" element={<Category />} />
      <Route path="/pokemons/*" element={<h1>Wildcard</h1>} />
      </Routes>
      </BrowserRouter>
  )
}

