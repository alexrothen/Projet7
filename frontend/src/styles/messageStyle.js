import styled from 'styled-components'
import { Color } from './color'

export const Count = styled.span`
    display: flex;
    justify-content : flex-end;
    margin-right: 0.9em;
`
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
  color: black;
  &:placeholder {
    color: ${Color.grey};
    font-size: 1em;
  }
`
export const BlockBottom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

`
