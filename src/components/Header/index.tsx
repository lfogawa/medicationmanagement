import { useState } from "react";
import logo from "../../assets/svg/logo.svg"
import { HeaderDivStyled, HeaderStyled } from "./styled";
import { Link } from "react-router-dom";

function Header() {
  // Check if the compacted menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  // Removes the user from local storage
  const handleLogout = () => {
    localStorage.removeItem('user');
  }

  return (
    <>
      <HeaderStyled $menuOpen={menuOpen}>
        <a href="/pharmacyMap"><img src={logo} alt="Logo." /></a>
        <nav>          
          <ul>
            <li><Link to="/pharmacyMap">Pharmacy Map</Link></li>
            <li><Link to="/pharmacyRegistration">Pharmacy Registration</Link></li>
            <li><Link to="/medicineList">Medicine List</Link></li>
            <li><Link to="/medicineRegistration">Medicine Registration</Link></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
        {/* Compacted menu */}
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </HeaderStyled>
      <HeaderDivStyled />
    </>
  )
}

export { Header }