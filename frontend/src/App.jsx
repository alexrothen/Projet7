import React from 'react';
import styled from 'styled-components';
import { Margin } from './components/Margin';
import { LoginScreen } from './containers/LoginScreen/LoginScreen';

const Wrapper = styled.div`
    display :flex;
    margin : auto;
    flex-direction : column;
    justify-content : center;
    align-items : center;

`;


export function App(){
    return (
        <>
        <Margin direction="vertical" margin="10vh"/>
         <LoginScreen /> 
         </>   
           )
   
};

