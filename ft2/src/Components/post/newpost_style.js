import styled from 'styled-components'
import { Color } from '../../utils/styles/color'

export const Count = styled.span`
    display: flex;
    justify-content : flex-end;
    padding: 1.5em 0.9em 1.5em;
    color: ${Color.bgColorDark};
    background-color: ${Color.bgGrey};

`
export const TextArea = styled.textarea`
  margin: auto;
  padding:1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border : none;
  min-width: 100%;
  min-height: 20vh;
  font-size: 1em;
  outline : none;
  resize: none;
  color: ${Color.bgColorDark};
  background-color: ${Color.bgGrey};
  &:placeholder {
    color: ${Color.bgGrey};
    font-size: 1em;
  }
`
export const BlockBottom = styled.div`
    display: flex;
    background-color: ${Color.bgGrey};
    align-items: flex-start;
    justify-content: space-around;

`
