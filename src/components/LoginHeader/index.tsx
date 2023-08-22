import logo from "../../assets/svg/logo.svg"

function LoginHeader() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" width={50} />
        <p>Medication Management</p>
      </header>
    </>
  )
}

export { LoginHeader }