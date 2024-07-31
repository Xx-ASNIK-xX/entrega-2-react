import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  
  return (
    <div className=" card"  >
      <img width={200} src={producto.imagen} alt="" />
      <br></br><br></br>
      <h3>{producto.nombre}</h3>
      <br></br>
      <p>{producto.descripcion}</p>
      <br></br>
      <br></br>
      <Link to={"/detalle/" + producto.id}>
        Ver detalles
      </Link>
    </div>
  );
};
export default Item;