import Link from 'next/Link'
import { useRouter } from 'next/router'
import { Content, Card, Title, Image } from './styles'
import formatDate from 'utils/formatDate'

const PostCard = ({ title, slug, date }) => {
  const router = useRouter()
  const postUrl = `/${slug}`

  const handleClick = () => router.push(postUrl)

  return (
    <Card onClick={handleClick}>
      <Content>
        <Title>
          <Link href={postUrl}>
            <a aria-label={`Go to post ${title}`}>{title}</a>
          </Link>
        </Title>
        <time dateTime={date}>{formatDate(date)}</time>
      </Content>
    </Card>
  )
}

export default PostCard
