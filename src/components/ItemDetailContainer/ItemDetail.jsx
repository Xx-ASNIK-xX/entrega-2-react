import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ( { producto } ) => {

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador }

    console.log(productoCarrito)
  }

  return (
    <div>
      <img src={producto.imagen} alt="" />
      <h2>{producto.nombre}</h2>

      <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};
export default ItemDetail;