import styled from 'styled-components'

export const StyledLink = styled.a`
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: #000;
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  visibility: ${({ isScroll }) => (isScroll ? 'visible' : 'hidden')};
  opacity: ${({ isScroll }) => (isScroll ? '1' : '0')};
  transition: visibility 0.2s, opacity 0.2s;

  @media screen and (min-width: 768px) {
    transition: visibility 0.5s, opacity 0.5s, background-color 0.5s, color 0.5s;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`
