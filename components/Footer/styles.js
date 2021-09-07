import styled, { css } from 'styled-components'
import visuallyHidden from 'utils/visuallyHidden'

const flex = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.footer};
  margin-top: auto;
  padding: 1rem 1.5rem;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.textColor};
  }
`

export const Figure = styled.figure`
  ${flex};
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
