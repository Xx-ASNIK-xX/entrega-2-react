import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  
    // Formatear el precio con puntos como separadores de miles
    const precioFormateado = producto.precio.toLocaleString();

  return (
    <div className=" card"  >
      <img width={200} src={producto.imagen} alt="" />
      <br></br><br></br>
      <h3>{producto.nombre}</h3>
      <br></br>
      <p>{producto.descripcion}</p>
      <br></br>
      <h4>{precioFormateado}</h4> {/* Aquí mostramos el precio formateado */}
      <br></br>
      <Link to={"/detalle/" + producto.id}>
        Ver detalles
      </Link>
    </div>
  );
};
export default Item;