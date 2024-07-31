import "./NavBar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/image/moto1.jpg";
import { FaBasketballBall } from "react-icons/fa";
import { GiCrossbow } from "react-icons/gi";
import { LiaMountainSolid } from "react-icons/lia";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="" />
      </Link>

      <ul className="categories">
        <Link to="/categoria/deportes" className="category">
          <p>Deportes</p>
          <div className="img-category">
            <FaBasketballBall size={40} />
          </div>
        </Link>

        <Link to="/categoria/aventura" className="category">
          <p>Aventura</p>
          <div className="img-category">
            <LiaMountainSolid size={40} />
          </div>
        </Link>
      </ul>
        {/* 
          <div className="category">
          <p>Acción</p>
          <div className="img-category">
            <GiCrossbow size={40} />
          </div>
        </div>
          */}


      <CartWidget />
    </nav>
  );
};

export default NavBar;