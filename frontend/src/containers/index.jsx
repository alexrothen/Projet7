import React from 'react';
import styled from 'styled-components';
import Header from './header';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


const Homepage = (props) =>{
  return (
    <PageContainer>
      <Header/>

    </PageContainer>
  )
}

export default Homepage;