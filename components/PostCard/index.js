import { useRouter } from 'next/router'
import Link from 'next/link'
import { nanoid as id } from 'nanoid'
import { Card, Title, Footer, Text, Time, List, Item } from './styles'
import TagIcon from '@icons/TagIcon'
import formatDate from 'utils/formatDate'

const PostCard = ({ title, slug, date, readTime, tags }) => {
  const router = useRouter()

  const handleCardClick = () => router.push(`/${slug}`)

  return (
    <Card onClick={handleCardClick}>
      <Title>
        <Link href={`/${slug}`}>{title}</Link>
      </Title>
      <Footer>
        <Text>
          {readTime} {readTime === 1 ? 'minuto' : 'minutos'} de lectura
        </Text>
        <Time dateTime={date}>{formatDate(date)}</Time>
        <List>
          {tags?.map((tag) => (
            <Item key={id()}>
              <TagIcon aria-hidden="true" />
              {tag}
            </Item>
          ))}
        </List>
      </Footer>
    </Card>
  )
}

export default PostCard
