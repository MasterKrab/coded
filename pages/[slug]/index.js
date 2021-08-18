import { useEffect, useRef } from 'react'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from 'lib/mdx'
import MDXComponents from 'components/MDXComponents'
import PostIndex from 'components/PostIndex'
import {
  Article,
  Header,
  Image,
  Title,
  Text,
  Time,
  ReadTime,
  Content,
} from './styles'
import Calendar from '@icons/CalendarIcon'
import BookIcon from '@icons/BookIcon'
import formatDate from 'utils/formatDate'

const Post = ({ source, frontmatter, headings }) => {
  const { title, description, date, readTime, image, alt } = frontmatter
  const contentNode = useRef(null)

  useEffect(() => {
    const headingsElements = contentNode.current.querySelectorAll('h2, h3')

    headingsElements.forEach((element, index) => {
      element.id = headings[index].link.replace('#', '')
    })
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Article>
        <Header>
          <Title>{title}</Title>
          <Text>
            <Time dateTime={date}>
              <Calendar aria-hidden="true" width={21} height={21} />
              {formatDate(date)}
            </Time>
            <ReadTime>
              {readTime} {readTime === 1 ? 'minuto' : 'minutos'} de lectura
              <BookIcon aria-hidden="true" width={21} height={21} />
            </ReadTime>
          </Text>
        </Header>
        <Image src={image} alt={alt || ''} />
        {headings.length && <PostIndex headings={headings} />}
        <Content ref={contentNode}>
          <MDXRemote {...source} components={MDXComponents} />
        </Content>
      </Article>
    </>
  )
}

export default Post

export const getStaticProps = async ({ params }) => {
  const { source, frontmatter, headings } = await getFileBySlug(params.slug)

  return {
    props: {
      source,
      frontmatter,
      headings: JSON.parse(JSON.stringify(headings)),
    },
  }
}

export const getStaticPaths = async () => {
  const posts = await getFiles()

  const paths = posts.map((post) => ({
    params: {
      slug: post.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
