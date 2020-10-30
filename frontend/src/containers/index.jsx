import React from 'react';
import styled from 'styled-components';
import Header from './header';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;


const Homepage = (props) =>{
  return (
    <PageContainer>
      <Header/>

    </PageContainer>
  )
}

export default Homepage;