import styled, { css } from 'styled-components'
import resetList from 'utils/resetList'

const flex = css`
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  box-shadow: 5px 0 15px ${({ theme }) => theme.shadow};
  transition: box-shadow 0.2s;
`

export const StyledHeader = styled.header`
  ${flex};
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`

export const Button = styled.button`
  display: grid;
  place-items: center;
  height: 15px;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ButtonIcon = styled.span`
  position: relative;

  &,
  &::before,
  &::after {
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.textColor};
    transition: transform 0.5s, background-color 0.5s;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
  }

  &::after {
    top: -6px;
    transition: opacity 0.5s, transform 0.5s, background-color 0.2s;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(45deg);

      &,
      &::before,
      &::after {
        background-color: #fff;
      }

      &::before {
        transform: rotate(90deg) translateX(-6px);
      }

      &::after {
        opacity: 0;
      }
    `}
`

export const MenuContainer = styled.div`
  ${flex};
  gap: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.2s, visibility 0.2s;
  }
`

export const Navigation = styled.nav`
  width: 100%;
  margin-right: 1rem;
`

export const List = styled.ul`
  ${resetList};
  ${flex};
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
`

export const StyledLink = styled.a`
  ${flex};
  gap: 0.5rem;
`
