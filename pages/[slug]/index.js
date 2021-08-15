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
        <title>Blog | {frontmatter.title}</title>
      </Head>
      <Article>
        <Header>
          <Title>{frontmatter.title}</Title>
          <Text>
            <Time dateTime={frontmatter.date}>
              <Calendar aria-hidden="true" />
              {formatDate(frontmatter.date)}
            </Time>
            <ReadTime>
              {frontmatter.readTime} minutos de lectura
              <BookIcon aria-hidden="true" />
            </ReadTime>
          </Text>
        </Header>
        <Image src={frontmatter.image} alt={frontmatter.alt || ''} />
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
