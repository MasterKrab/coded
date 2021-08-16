import styled from 'styled-components'

export const PostIndexContainer = styled.section`
  font-size: min(1.25rem, 4vw);
  padding: var(--padding);

  @media screen and (min-width: 1300px) {
    position: fixed;
    top: 65px;
    right: 15px;
    font-size: 0.9rem;
    padding: 1rem;
    width: 17.5vw;
  }
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & > svg {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1300px) {
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: min(3rem, 10vw);

  @media screen and (min-width: 1300px) {
    padding-left: 0;
    list-style: none;
  }
`

export const Item = styled.li`
  margin-left: ${({ typeHeading }) => (typeHeading === '###' ? '1rem' : '0')};
`

export const Link = styled.a`
  width: min-content;
  z-index: 10;

  @media screen and (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`
