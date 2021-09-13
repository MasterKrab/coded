import styled, { css } from 'styled-components'
import visuallyHidden from 'utils/visuallyHidden'

const flex = css`
  display: flex;
  align-items: center;
`

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 1rem 1.5rem;
  z-index: 1000;
  box-shadow: 0 0 2.5px ${({ theme }) => theme.shadow};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.textColor};
  }
`

export const Figure = styled.figure`
  ${flex};
  gap: 1rem;
  margin: 0;
`

export const Figcaption = styled.figcaption`
  position: relative;
  ${flex};
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;

  &:after {
    content: url('/assets/illustrations/heart.svg');
    position: absolute;
    top: 1.5px;
    right: -30px;
  }
`

export const HiddenText = styled.span`
  ${visuallyHidden};
`
