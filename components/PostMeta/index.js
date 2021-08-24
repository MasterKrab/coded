import Head from 'next/head'

const PostMeta = ({ title, description, image, slug }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={`https://www.coded.tech/${image}`}
    />
    {image && <meta property="og:image" content={image} />}
    <meta property="og:url" content={`https://www.coded.tech/${slug}`}></meta>
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://www.coded.tech/${image}`} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
)

export default PostMeta
