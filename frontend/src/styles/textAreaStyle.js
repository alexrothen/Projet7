import styled from 'styled-components'
import { Color } from '../styles/color'

export const TextArea = styled.textarea`
  margin: auto;
  padding:1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  min-width: 430px;
  min-height: 120px;
  font-size: 1em;
  border: none;
  outline : none;
  resize: none;
  &:placeholder {
    color: ${Color.grey};
    font-size: 1em;
  }

`
