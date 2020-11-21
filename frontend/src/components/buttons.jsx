import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    border-radius : 5px;
    padding: 7px 16px;
    font-size: 1.05em;
    border : 2px solid #fc3109;
    outline: none;
    color : #fc3109;
    background-color : #fff;
    width : 100px;
    margin-right : 10px;
    font-weight : bold;
    cursor: pointer;
    transition : all ease-in-out 180ms;
    &:hover{
        color : rgba(252, 49, 9, 0.5);
        border : 2px solid rgba(252, 49, 9, 0.5);
    }
    &:last-of-type{
        color : #fff;
        background-color : #fc3109;
        &:hover{
        background-color: transparent;
        color: #fc3109;
    };
   

  
    }

`

function Button ({ children }) {
  return (
    <ButtonWrapper>{children}</ButtonWrapper>
  )
}

// const ButtonWrapper = styled.button`
//   padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
//   border-radius: 5px;
//   background-color: ${theme.primary};
//   color: #fff;
//   font-weight: bold;
//   font-size: ${({ small }) => (small ? "12px" : "16px")};
//   outline: none;
//   border: 2px solid transparent;
//   transition: all 220ms ease-in-out;
//   cursor: pointer;
//   &:hover {
//     background-color: transparent;
//     border: 2px solid ${theme.primary};
//   }
// `;

// export function Button(props) {
//   return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
// }

export default Button
