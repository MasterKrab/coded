import styled from 'styled-components'

const Progress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.225rem;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.active};
    opacity: ${({ progress }) => (progress ? 1 : 0)};
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    transition: width 0.25s ease-in-out, opacity 0.15s ease-in-out;
`

export default Progress
