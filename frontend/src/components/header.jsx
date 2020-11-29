import React from 'react'
import styled from 'styled-components'
import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-black.svg'
import Button from '../components/buttons'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  justify-content: space-between;
`

const GroupomaniaLogo = styled.img`
  height: 60%;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`

const Header = props => {
  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <ButtonWrapper>
        <Button>Nom</Button>
      </ButtonWrapper>
    </HeaderContainer>
  )
}

export default Header
