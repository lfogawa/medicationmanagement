import { useState } from "react";
import logo from "../../assets/svg/logo.svg"
import { HeaderStyled } from "./styled";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
  }

  return (
    <>
      <HeaderStyled menuOpen={menuOpen}>
        <a href="/map"><img src={logo} alt="logo" width={50}/></a>
        <nav>
          <ul>
            <li><Link to="/pharmacymap">Pharmacy Map</Link></li>
            <li><Link to="/pharmacyregistration">Pharmacy Registration</Link></li>
            <li><Link to="/medicinelist">Medicine List</Link></li>
            <li><Link to="/medicineregistration">Medicine Registration</Link></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </HeaderStyled>
    </>
  )
}

export { Header }