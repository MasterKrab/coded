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
  font-size: 0.9rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.backgroundColor};
  opacity: var(--button-opacity);
  transition: transform 0.2s, opacity 0.2s;

  @media screen and (min-width: 768px) {
    padding-top: 1rem;
    padding-right: 1rem;
  }

  &:focus-visible {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    &:focus {
      --button-opacity: ${({ isHover, isCopied }) =>
        isHover ? '1' : isCopied ? '1' : '0'};
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const CopyButton = styled(Button)`
  &::before,
  &::after {
    content: '';
    bottom: 5px;
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
    bottom: -17.5px;
    right: 15px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    padding: 0.25rem;
  }
`
