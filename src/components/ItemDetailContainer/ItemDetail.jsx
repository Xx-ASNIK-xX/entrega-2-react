import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };

    agregarProducto(productoCarrito);

    //ocultamos el componente ItemCount
    setMostrarItemCount(false);
  };

  return (
    <div className="descripcion">
        <div className="descripcion2">
            <img src={producto.imagen} alt="" />
        </div>
        <div className="descripcion3">
            <h2>{producto.nombre}</h2>
            <p className="parrafo2">{producto.descripcion}</p>

            { producto.precio && (
            <h4> $ {producto.precio.toLocaleString()}</h4>  /* Aquí se muestra el formateo del precio con puntos integrados */
            )}
            {mostrarItemCount ? (
            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
            ) : (
            <Link to="/cart" className="button-detail">
              Ir al carrito
            </Link>
        )}
            
        </div>
    </div>
  );
};
export default ItemDetail;