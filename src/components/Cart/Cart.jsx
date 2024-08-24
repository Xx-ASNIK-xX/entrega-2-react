import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { BiSolidTrash } from "react-icons/bi";
import './Cart.css';

const Cart = () => {
  const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

  //Early return o return temprano
  if (carrito.length === 0) {
    return (
      <div className="empty-cart">
        <h2>El carrito esta vacio 😥</h2>
        <Link to="/" className="button-empty-cart">
          Ver mas productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <ul className="cart-list">
        {carrito.map((productoCarrito) => (
          <li className="cart-item">
            <img width={150} src={productoCarrito.imagen} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio c/u: $ {productoCarrito.precio.toLocaleString('es-ES')}</p>
            <p>Precio parcial: $ {(productoCarrito.cantidad * productoCarrito.precio).toLocaleString('es-ES')}</p>
            <BiSolidTrash className='iconoEliminarCarrito1' size={40} onClick={() => borrarProducto(productoCarrito.id)} />
          </li>
        ))}
      </ul>

      <div className="cart-controls">
        <div className="buttons">
        <h2>Precio Total: {precioTotal().toLocaleString('es-ES')}</h2>
          <button className="button-cart" onClick={vaciarCarrito}>
          <BiSolidTrash className='iconoEliminarCarrito2' size={20} color="92c7ff" />
            <p>Vaciar el Carrito</p>
          </button>
          <Link className="button-cart" to="/checkout">
            Continuar con la compra
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;