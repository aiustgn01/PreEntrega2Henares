import React from 'react';
import './app.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const saludo='holis'
  return (
    <div>
      <Navbar hola='hola'/>
      <ItemListContainer greeting='Bienvenidos a PRUNE' saludo={saludo}/>
     <h1>Bienvenidos a mi primer intento de hacer una pagina con react!</h1>
    </div>
  );
}

export default App;
