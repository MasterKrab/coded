import CodeBox from 'components/CodeBox'
import Link from './Link'
import Title from './Title'
import SubTitle from './SubTitle'
import Image from './Image'
import GiphyEmbed from './GiphyEmbed'
import Playground from './Playground'
import Sass from 'components/Playground/PlaygroundSass'
import Pug from 'components/Playground/PlaygroundPug'

const MDXComponents = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBox {...props} />,
  a: Link,
  h2: Title,
  h3: SubTitle,
  img: Image,
  GiphyEmbed,
  PlaygroundSass: (props) => <Playground Component={Sass} {...props} />,
  PlaygroundPug: (props) => <Playground Component={Pug} {...props} />,
}

export default MDXComponents
