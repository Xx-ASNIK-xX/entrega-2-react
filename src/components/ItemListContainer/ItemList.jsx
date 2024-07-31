import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div style={{display:"flex", flexWrap: "wrap", justifyContent:"center"  }}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;