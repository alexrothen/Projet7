import styled from 'styled-components'
import { Color } from '../styles/color'
import '../index.css'


export const TextArea = styled.textarea`
  margin: auto;
  padding:1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  width: 35vw;
  height : 15vh;
  font-size: 1em;
  border: none;
  outline : none;
  resize: none;
  &:placeholder {
    color: ${Color.grey};
    font-size: 1em;
  }

`
