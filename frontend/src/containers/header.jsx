import React from 'react';
import styled from 'styled-components';
import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-black.svg'


const HeaderContainer = styled.div`
    display : flex;
    align-items : center;
    height : 50px;
    width : 100%;
    padding : 0 10px;

`;

const GroupomaniaLogo = styled.img`
    height : 60%;
`
const LoginBtn = styled.button`
    
`;

const Header = (props) =>{
    return (
    <HeaderContainer>
    <GroupomaniaLogo src={GroupomaniaLogoUrl}/>
    </HeaderContainer>
    );
};

export default Header;