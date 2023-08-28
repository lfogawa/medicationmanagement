import { Button } from "../Button"
import { SearchFieldDivStyled } from "./styled"

function SearchField() {
  return (
    <SearchFieldDivStyled>
      <form>
        <input
          placeholder="Type your search"
        />
        <Button type="submit">
          Search
        </Button>
      </form>
    </SearchFieldDivStyled>
  )
}

export { SearchField }