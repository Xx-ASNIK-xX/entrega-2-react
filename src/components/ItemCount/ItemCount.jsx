import { useState } from "react"
import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {/*Aqui se agrega el stock del producto para generar un contador*/ 
  const [count, setCount] = useState(1)

  const aumentar = () => { /*contador aumentar*/
    if(count < stock){
      setCount( count + 1)
    }
  }

  const disminuir = () => { /*contador disminuir*/
    if(count > 1) {
      setCount( count - 1 )
    }
  }

  return (
    <div>
      <div className="bontonMm">
        <button onClick={disminuir} >-</button>
        <p>{count}</p>
        <button onClick={aumentar} >+</button>
      </div>
      
      <div className="bontonAgre">
        <button onClick={ () => agregarAlCarrito(count) } > Agregar  </button>
      </div>

    </div>
  )
}
export default ItemCount