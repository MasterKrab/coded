import { Buttons, Button } from './styles'
import PrevIcon from '@icons/PrevIcon'
import NextIcon from '@icons/NextIcon'

const ChangePosts = ({
  setCurrentPage,
  currentPage,
  isFirstPage,
  isLastPage,
}) => {
  const handleNextPosts = () => setCurrentPage(currentPage + 1)
  const handlePrevPosts = () => setCurrentPage(currentPage - 1)

  return (
    <Buttons>
      <Button onClick={handlePrevPosts} disabled={isFirstPage}>
        <PrevIcon aria-hidden="true" width={20} height={20} />
        Anterior
      </Button>
      <Button onClick={handleNextPosts} disabled={isLastPage}>
        Siguiente
        <NextIcon aria-hidden="true" width={20} height={20} />
      </Button>
    </Buttons>
  )
}

export default ChangePosts
