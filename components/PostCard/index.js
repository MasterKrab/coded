import Link from 'next/Link'
import { nanoid as id } from 'nanoid'
import { Card, Title, Footer, Text, Time, List, Item } from './styles'
import TagIcon from '@icons/TagIcon'
import formatDate from 'utils/formatDate'

const PostCard = ({ title, slug, date, readTime, tags }) => (
  <Card>
    <Title>
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
    </Title>
    <Footer>
      <Text>{readTime} minutos de lectura</Text>
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

export default PostCard
