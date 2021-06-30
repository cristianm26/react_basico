import React, { useState } from 'react'
import Carrito from './components/Carrito';
import Footer from './components/Footer'
import Header from './components/Header'
import Producto from './components/Producto';

const App = () => {

  //CREAR LISTADO DE PRODUCTOS
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa React Js', precio: 50 },
    { id: 2, nombre: 'Camisa Vue Js', precio: 40 },
    { id: 3, nombre: 'Camisa Node Js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular Js', precio: 20 },
  ]);

  //Sate para un carrito de compras
  const [carrito, setCarrito] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();



  return (
    <div>
      <Header titulo='Tienda Virtual' />
      <h1>Listado de productos</h1>
      {
        productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))
      }
      <Carrito carrito={carrito} setCarrito={setCarrito} />
      <Footer fecha={fecha} />
    </div>
  )
}

export default App
