import logo from "../../assets/svg/logo.svg"
import { LoginHeaderStyled } from "./styled"

function LoginHeader() {
  return (
    <>
      <LoginHeaderStyled>
        <img src={logo} alt="Logo of DEVinPharmacy."/>
        <h1>PharmaSol</h1>
      </LoginHeaderStyled>
    </>
  )
}

export { LoginHeader }