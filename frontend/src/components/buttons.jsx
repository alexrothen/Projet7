import React from "react";
import styled from "styled-components";


const ButtonWrapper = styled.button`
    border-radius : 5px;
    padding: 7px 16px;
    font-size: 1em;
    border : 1px solid #c2c2c2;
    color : #000;
    background-color :  #fff;

`;

function Button({children}){
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

export default Button;