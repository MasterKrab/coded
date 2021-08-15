import styled, { css } from 'styled-components'

const centerIcon = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Article = styled.article`
  max-width: 800px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  --padding: min(1.5rem, 2.5vw);

  @media screen and (min-width: 768px) {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled.header`
  padding-bottom: 1.5rem;
  border-bottom: 3px solid #000;
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
`

export const Time = styled.time`
  ${centerIcon}
`

export const ReadTime = styled.span`
  ${centerIcon}
`

export const Content = styled.div`
  font-size: min(1.25rem, 5vw);
  padding: 0.25rem var(--padding);
`
