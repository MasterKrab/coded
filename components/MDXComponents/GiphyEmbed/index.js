import { Container, IframeContainer, Iframe } from './styles'

const GiphyEmbed = ({ image }) => (
  <Container>
    <IframeContainer>
      <Iframe
        src={`https://giphy.com/embed/${image}`}
        width="100%"
        height="100%"
        frameBorder="0"
        className="giphy-embed"
        loading="lazy"
        allowFullScreen
      ></Iframe>
    </IframeContainer>
    <p>
      <a href={`https://giphy.com/gifs/${image}`}>via GIPHY</a>
    </p>
  </Container>
)

export default GiphyEmbed
