import styled from 'styled-components'
import { Color } from '../color'

export const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 470px;
  width: 400px;
  border: none;
  background-color: transparent;
`
export const BlockInput = styled.div`
  display: flex;
  height: 190px;
  margin-top: 25%;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  margin: 0.5em auto;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  width: 250px;
  border: none;
  border-bottom: 1px dashed ${Color.grey};
  outline: none;
  &:focus {
    outline: 0;
  }
  ::placeholder {
    color: ${Color.grey};
    font-weight: lighter;
    font-size: 1em;
  }
`
export const Img = styled.img`
  width: 280px;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
`
export const Span = styled.span`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${Color.red};
`
export const SpanMessage = styled.span`
  display: inline-flex;
  margin: 0 auto;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline 2px ${Color.red};
  }
`
