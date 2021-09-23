import CodeBox from 'components/CodeBox'
import Link from './Link'
import Title from './Title'
import SubTitle from './SubTitle'
import GiphyEmbed from './GiphyEmbed'
import PlaygroundSass from './PlaygroundSass'

const MDXComponents = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBox {...props} />,
  a: Link,
  h2: Title,
  h3: SubTitle,
  img: (props) => <img loading="lazy" {...props} />,
  GiphyEmbed,
  PlaygroundSass,
}

export default MDXComponents
