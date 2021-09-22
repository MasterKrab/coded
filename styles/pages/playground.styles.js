import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'

export const Container = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 75px;

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
  height: 75px;
  padding-bottom: 0.25rem;

  @media screen and (min-width: 500px) {
    height: 50px;
  }
`

export const Title = styled.h1`
  ${centerIcon};
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.textColor};
`

export const ButtonMobileOnly = styled(Button)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const ButtonRight = styled(Button)`
  position: absolute;
  top: 10px;
  right: 20px;

  @media screen and (min-width: 500px) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:focus {
    position: absolute;
  }
`
