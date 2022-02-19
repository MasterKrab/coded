import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  gap: 0.5rem;
`

const showInput = css`
  & + label {
    transform: translate(-5%, -25px) scale(0.9);
  }
`

export const Input = styled.input`
  font-size: 0.9em;
  background-color: transparent;
  width: 250px;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0 0 0 30px white ${({ theme }) => theme.secondaryColor};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.active};
    ${showInput};
  }

  ${({ text }) => text.length && showInput};
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 2rem;
  padding-left: 30px;
  background-color: ${({ theme }) => theme.aside};
  text-align: start;
  transition: transform 0.3s;

  &::after {
    content: url('/assets/icons/newsletter.svg');
    position: absolute;
    top: -5px;
    left: 0;
  }
`
