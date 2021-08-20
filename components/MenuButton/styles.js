import styled from 'styled-components'

export const Button = styled.button`
  display: grid;
  place-items: center;
  margin-right: auto;
  height: 30px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const ButtonBar = styled.span`
  position: relative;
  transform: rotate(${({ isMenu }) => (isMenu ? '45deg' : 0)});

  &,
  &::before,
  &::after {
    width: 25px;
    height: 2px;
    background-color: ${({ theme }) => theme.textColor};
    transition: transform 0.35s, background-color 0.25s;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
  }

  &::before {
    ${({ isMenu }) => isMenu && 'transform: rotate(90deg) translateX(-6px)'};
  }

  &::after {
    top: -6px;
    transition: opacity 0.25s, transform 0.25s, background-color 0.25s;
    opacity: ${({ isMenu }) => (isMenu ? '0' : '1')};
  }
`
