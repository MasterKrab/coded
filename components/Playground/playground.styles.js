import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 0;
  display: flex;

  flex-wrap: wrap;
  width: 100%;
  padding-top: ${({ completeScreen }) => (completeScreen ? '75px' : '50px')};

  @media screen and (min-width: 500px) {
    padding: 50px;
  }
`

export const Top = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 2rem;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: ${({ completeScreen }) => (completeScreen ? '75px' : '50px')};
  padding-bottom: 0.25rem;

  @media screen and (min-width: 500px) {
    height: 50px;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.textColor};
`

export const ButtonMobileOnly = styled(Button)`
  ${({ completeScreen }) =>
    completeScreen &&
    css`
      @media screen and (min-width: 1024px) {
        display: none;
      }
    `}
`
