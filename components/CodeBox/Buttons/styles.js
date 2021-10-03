import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 768px) {
    position: ${({ isFullScreen }) => (isFullScreen ? 'relative' : 'absolute')};
    background-color: ${({ theme, isFullScreen }) =>
      isFullScreen ? theme.backgroundColor : 'none'};
  }
`

export const Button = styled.button`
  position: relative;
  font-size: 0.9rem;
  padding: 0.75rem 0.75rem 0.5rem;
  margin: 0.25rem;
  color: ${({ theme }) => theme.backgroundColor};
  opacity: var(--button-opacity);
  transition: transform 0.2s, opacity 0.2s;

  &:focus,
  &:focus-visible {
    outline-color: ${({
      theme: { textColor, codeboxButtonOutline },
      isFullScreen,
    }) => (isFullScreen ? textColor : codeboxButtonOutline)};
    outline-offset: -5px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0.5rem;
    margin-right: 0.5rem;

    &:not(:focus):focus-visible {
      outline: none;
    }

    &:not(:hover):focus-visible {
      --button-opacity: 1;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const CopyButton = styled(Button)`
  @media screen and (min-width: 768px) {
    &:focus,
    &:focus-visible {
      --button-opacity: ${({ isCopied }) => (isCopied ? '1' : '0')};
    }
  }

  &::before,
  &::after {
    content: '';
    top: 35px;
    right: 15px;
    position: absolute;
    opacity: ${({ isCopied }) => (isCopied ? '1' : '0')};
    transition: opacity 0.15s;
  }

  &::before {
    border-right: 5px solid ${({ theme }) => theme.backgroundColor};
    border-bottom: 5px solid ${({ theme }) => theme.backgroundColor};
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
  }

  &::after {
    content: 'Copied';
    top: 45px;
    right: 15px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    padding: 0.25rem;
  }
`
