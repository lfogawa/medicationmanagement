import logo from "../../assets/svg/logo.svg"

function Header() {
  const handleLogout = () => {
    localStorage.removeItem('user');
  }

  return (
    <>
      <header>
        <img src={logo} alt="logo" width={50}/>
        <nav>
          <ul>
            <li><a href="/map">Map</a></li>
            <li><a href="/medicinelist">Medicine List</a></li>
            <li><a href="/medicineregistration">Medicine Registration</a></li>
            <li><a href="/pharmacyregistration">Pharmacy Registration</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Header }