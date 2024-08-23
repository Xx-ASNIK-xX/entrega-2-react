import { TbShoppingBag } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)
  let cantidad = cantidadTotal()
    
  return (
    <Link to="/cart" className="cartwidget">
      <TbShoppingBag  size={35} className={ cantidad === 0 ? "iconRed" : "iconGreen"}/>
      <p>{cantidad > 0 && cantidad}</p>
    </Link>
  )
}
export default CartWidget