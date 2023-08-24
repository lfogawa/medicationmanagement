import { Link } from "react-router-dom"
import { SocialMedia } from "../SocialMedia"
import { FooterDivContainerStyled } from "./styled"
import logoFooter from "../../assets/svg/logoFooter.svg"

function Footer() {
  const handleLogout = () => {
    localStorage.removeItem('user');
  }

  return (
    <>
      <FooterDivContainerStyled>
        <a href="/pharmacyMap"><img src={logoFooter} alt="logo" width={50}/></a>
        <div>
          <ul>Pharmacy</ul>
            <li><Link to="/pharmacyMap">Pharmacy Map</Link></li>
            <li><Link to="/pharmacyRegistration">Pharmacy Registration</Link></li>
        </div>
        <div>
          <ul>Medicine</ul>
            <li><Link to="/medicineList">Medicine List</Link></li>
            <li><Link to="/medicineRegistration">Medicine Registration</Link></li>
        </div>
        <div>
          <ul>Account</ul>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>        
        </div>
      </FooterDivContainerStyled>
      <SocialMedia />
    </>
  )
}

export { Footer }