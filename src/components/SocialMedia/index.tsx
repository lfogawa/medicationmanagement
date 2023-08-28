import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import tiktok from "../../assets/svg/tiktok.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import { SocialMediaDivStyled } from "./styled"

function SocialMedia() {
  return (
    <>
      <SocialMediaDivStyled>
        <a href="https://instagram.com"><img src={instagram} alt="Link to DEVinPharmacy instagram." /></a>
        <a href="https://facebook.com"><img src={facebook} alt="Link to DEVinPharmacy facebook." /></a>
        <a href="https://www.linkedin.com"><img src={linkedin} alt="Link to DEVinPharmacy linkedin." /></a>
        <a href="https://www.tiktok.com"><img src={tiktok} alt="Link to DEVinPharmacy tiktok." /></a>
      </SocialMediaDivStyled>
    </>
  )
}

export { SocialMedia }