import React from 'react';
import styled from 'styled-components';
import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-black.svg'
import Button from '../components/buttons';


const HeaderContainer = styled.div`
    display : flex;
    align-items : center;
    height : 50px;
    width : 100%;
    padding : 0 10px;
    background-color: #fff;
    

`;

const GroupomaniaLogo = styled.img`
    height : 60%;
`


const Header = (props) =>{
    return (
    <HeaderContainer>
        <GroupomaniaLogo src={GroupomaniaLogoUrl}/>
        <Button>log in</Button>
        <Button>log in</Button>
    </HeaderContainer>
    );
};

export default Header;