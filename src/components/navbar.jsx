import React from 'react';
import CartWidget from './CartWidget';

function Navbar({hola}) {
  return (
    <nav class='navbar'>
      
        <a href="/" class='boton'>Inicio</a>
        <a href="/acerca" class='boton'>Acerca de</a>
        <a href="/contacto" class='boton'>Contacto</a>
      <CartWidget saludo={hola}/>
    </nav>
  );
}

export default Navbar;