import "./NavBar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/two_wheeler_24dp.svg";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaMotorcycle } from "react-icons/fa6";
import { GiScooter } from "react-icons/gi";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="" />
        <h1>MotoStyle</h1>
      </Link>

      <ul className="categories">
        <Link to="/categoria/Calle" className="category">
          <p>Calle</p>
          <div className="img-category">
            <RiMotorbikeFill size={30} />
          </div>
        </Link>

        <Link to="/categoria/Scooter" className="category">
          <p>Scooter</p>
          <div className="img-category">
            <GiScooter  size={30} />
          </div>
        </Link>
        
        <Link to="/categoria/Enduro" className="category">
          <p>Enduro</p>
          <div className="img-category">
            <FaMotorcycle  size={30} />
          </div>
        </Link>

      </ul>
        {}


      <CartWidget />
    </nav>
  );
};

export default NavBar;