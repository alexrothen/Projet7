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
// export const BlockInput = styled.div`
//   display: flex;
//   color: ${Color.bgColorDark};
//   height: 190px;
//   margin-top: 25%;
//   flex-direction: column;
//   justify-content: center;
// `

// export const Input = styled.input`
//   margin: 0.5em auto;
//   font-weight: bold;
//   color: ${Color.bgColorDark};
//   font-size: 1em;
//   display: flex;
//   width: 250px;
//   border: none;
//   border-bottom: 1px dashed ${Color.bgHeader};
//   outline: none;
//   background-color: ${Color.bgGrey};

//   &:focus {
//     outline: 0;
//       background-color: ${Color.bgGrey};

//   }
//   ::placeholder {
//     font-weight: lighter;
//     font-size: 1em;
//   }
// `
// export const Span = styled.span`
//   margin: auto;
//     color: ${Color.red};

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `
// export const SpanMessage = styled.span`
//   display: inline-flex;
//     color: ${Color.bgColorDark};

//   margin: 0 auto;
//   width: fit-content;
//   flex-direction: column;
//   align-items: center;
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline 2px ${Color.accent};
//   }
// `
