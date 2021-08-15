import Link from 'next/Link'
import { useRouter } from 'next/router'
import { nanoid as id } from 'nanoid'
import { Card, Title, Footer, Text, Time, List, Item } from './styles'
import TagIcon from '@icons/TagIcon'
import formatDate from 'utils/formatDate'

const PostCard = ({ title, slug, date, readTime, tags }) => {
  const router = useRouter()
  const postUrl = `/${slug}`

  const handleClick = () => router.push(postUrl)

  return (
    <Card onClick={handleClick}>
      <Title>
        <Link href={postUrl}>
          <a aria-label={`Go to post ${title}`}>{title}</a>
        </Link>
      </Title>
      <Footer>
        <Text>
          {readTime} minutos de lectura
          <Time dateTime={date}>{formatDate(date)}</Time>
        </Text>
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
