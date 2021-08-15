import PostCard from 'components/PostCard'
import { Section, ContainerPosts } from './styles'

const Posts = ({ posts }) => (
  <Section>
    <h1>Últimos Artículos</h1>
    <ContainerPosts>
      {posts?.map(({ title, slug, date, readTime, tags }) => (
        <PostCard
          key={slug}
          title={title}
          slug={slug}
          date={date}
          readTime={readTime}
          tags={tags}
        />
      ))}
    </ContainerPosts>
  </Section>
)

export default Posts
