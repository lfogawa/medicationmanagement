import { Button } from "../Button"
import { InputField } from "../InputField"
import { SearchFieldDivStyled } from "./styled"

function SearchField() {
  return (
    <SearchFieldDivStyled>
      <form>
        <input
          
        />
        <Button type="submit">
          Search
        </Button>
      </form>
    </SearchFieldDivStyled>
  )
}

export { SearchField }