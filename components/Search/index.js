import { Container, Title, Input } from './styles'
import SearchIcon from '@icons/SearchIcon'

const Search = ({ search, handleInput }) => (
    <Container>
      <Title>
        <SearchIcon
          aria-hidden="true"
          width={25}
          height={25}
          fill="currentColor"
        />
        Buscar
      </Title>
      <Input
        onInput={handleInput}
        type="search"
        aria-label="Buscar articulo"
        placeholder="Buscar..."
        maxlength="250"
        value={search}
      />
    </Container>
  )


export default Search
