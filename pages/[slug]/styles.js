import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'
import addOpacityToColor from 'utils/addOpacityToColor'

export const Article = styled.article`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor};
  max-width: 800px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  --padding: min(1.5rem, 2.5vw);

  @media screen and (min-width: 768px) {
    box-shadow: 0 0 5px ${({ theme }) => theme.shadow};
  }
`

export const Header = styled.header`
  padding-bottom: 1.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.textColor};
`

export const Image = styled.img`
  margin-top: 1rem;
  border-radius: 0.25rem;
`

export const Title = styled.h1`
  font-size: min(3rem, 7.25vw);
  margin-bottom: 0.5rem;
  padding-left: var(--padding);
`

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  padding-left: var(--padding);
  padding-right: var(--padding);

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const Time = styled.time`
  ${centerIcon}
`

export const ReadTime = styled.span`
  ${centerIcon}

  @media screen and (max-width: 500px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`

export const Content = styled.div`
  font-size: min(1.25rem, 5vw);
  padding: 0.25rem var(--padding);
`
