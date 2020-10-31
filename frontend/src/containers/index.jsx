import React from 'react';
import styled from 'styled-components';
import Header from './header';
import BackgroundImg from '../assets/icon.png'

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding : 0;
  background: no-repeat center/50% url(${BackgroundImg})
`;

const BackgroundGrey = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(245, 245, 245, 0.7);
`;


const Homepage = (props) =>{
  return (
    <PageContainer>
     <BackgroundGrey>
       <Header/>
      </BackgroundGrey> 
    </PageContainer>
  )
}

export default Homepage;