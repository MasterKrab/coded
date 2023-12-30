import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import PostMeta from 'components/PostMeta'
import MDXComponents from 'components/MDXComponents'
import PostIndex from 'components/PostIndex'
import PostComments from 'components/PostComments'
import {
  Article,
  Header,
  ImageContainer,
  Title,
  Text,
  Time,
  ReadTime,
  Content,
} from 'styles/pages/[slug].styles'
import Calendar from '@icons/CalendarIcon'
import BookIcon from '@icons/BookIcon'
import formatDate from 'utils/formatDate'
import blurImage from 'utils/blurImage'

const Post = ({ source, frontmatter, headings }) => {
  const { title, description, date, readTime, image, alt, slug } = frontmatter
  const contentNode = useRef(null)

  useEffect(() => {
    const headingsElements = contentNode.current.querySelectorAll('h2, h3')

    for (let i = 0; i < headings.length; i++) {
      headingsElements[i].id = headings[i].link.replace('#', '')
    }

    const hash = window.location.hash.substring(1)

    document.getElementById(hash)?.scrollIntoView()
  }, [contentNode])

  return (
    <>
      <PostMeta
        title={title}
        description={description}
        image={image}
        slug={slug}
      />
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
        {image && (
          <ImageContainer>
            <Image
              src={`/${image}`}
              alt={alt || ''}
              placeholder="blur"
              blurDataURL={blurImage}
              priority={true}
              width={3456}
              height={1728}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </ImageContainer>
        )}
        {headings.length && <PostIndex headings={headings} />}
        <Content ref={contentNode}>
          <MDXRemote {...source} components={MDXComponents} />
        </Content>
      </Article>
      <PostComments title={title} />
    </>
  )
}

export default Post

export const getServerSideProps = async ({ params }) => {
  const { getFileBySlug } = await import('lib/mdx.mjs')

  const file = await getFileBySlug(params.slug)

  if (!file) return { notFound: true }

  return {
    props: file,
  }
}
