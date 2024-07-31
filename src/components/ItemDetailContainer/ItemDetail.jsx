import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

const ItemDetail = ( { producto } ) => {

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador }

    console.log(productoCarrito)

  }
  
  
  
  return (
    <div className="descripcion">
        <div className="descripcion2">
            <img src={producto.imagen} alt="" />
        </div>
        <div className="descripcion3">
            <h2>{producto.nombre}</h2>
            <p className="parrafo2">{producto.descripcion}</p>
            <h4> $ {producto.precio}</h4> {/* Aquí mostramos el precio formateado */}
            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
        </div>
    </div>
  );
};
export default ItemDetail;