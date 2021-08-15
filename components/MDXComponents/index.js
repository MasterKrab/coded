import CodeBox from 'components/CodeBox'
import Link from './Link'
import Title from './Title'
import SubTitle from './SubTitle'

const MDXComponents = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBox {...props} />,
  a: Link,
  h2: Title,
  h3: SubTitle,
}

export default MDXComponents
