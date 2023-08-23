import { useState } from "react";
import logo from "../../assets/svg/logo.svg"
import { HeaderStyled } from "./styled";

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
            <li><a href="/map">Map</a></li>
            <li><a href="/medicinelist">Medicine List</a></li>
            <li><a href="/medicineregistration">Medicine Registration</a></li>
            <li><a href="/pharmacyregistration">Pharmacy Registration</a></li>
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