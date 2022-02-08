import CodeBox from 'components/CodeBox'
import Link from './Link'
import Title from './Title'
import SubTitle from './SubTitle'
import Image from './Image'
import GiphyEmbed from './GiphyEmbed'

const MDXComponents = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBox {...props} />,
  a: Link,
  h2: Title,
  h3: SubTitle,
  img: Image,
  GiphyEmbed,
}

export default MDXComponents
