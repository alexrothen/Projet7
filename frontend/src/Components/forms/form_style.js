import styled from 'styled-components'
import { Color } from '../../utils/styles/color'

export const Form = styled.form`
  margin: auto;
  color: ${Color.bgColorDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 540px;
  width: 100%;
  border: none;
  background-color: ${Color.bgGrey};
`
export const Img = styled.img`
    width: 280px;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
  `
