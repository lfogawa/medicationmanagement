import logo from "../../assets/svg/logo.svg"
import { LoginHeaderStyled } from "./styled"

function LoginHeader() {
  return (
    <>
      <LoginHeaderStyled>
        <img src={logo} alt="logo"/>
        <p>Medication Management</p>
      </LoginHeaderStyled>
    </>
  )
}

export { LoginHeader }