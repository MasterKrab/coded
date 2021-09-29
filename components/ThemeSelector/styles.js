import styled from 'styled-components'
import visuallyHidden from 'utils/visuallyHidden'

const LEFT_BY_THEME = {
  light: '0',
  device: '42.5px',
  dark: '85px',
}

export const Fieldset = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: 32.5px;
    left: 0;
    z-index: 10000;
    background-color: ${({ theme }) => theme.active};
    width: 30px;
    height: 2px;
    border-radius: 50%;
    transform: translate(
      ${({ selectedTheme }) => LEFT_BY_THEME[selectedTheme] || 0},
      0
    );
    transition: transform 0.5s;
  }
`

export const Legend = styled.legend`
  ${visuallyHidden}
`
