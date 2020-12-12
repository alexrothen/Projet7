import React from 'react'

import styled from 'styled-components'
import GroupomaniaLogoUrl from './assets/icon-left-font-monochrome-black.svg'
import { useModal } from './useModal'
import { Modal } from './modal'
import { ButtonProfil } from './buttons'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0;
  background-color: #fff;
  justify-content: space-between;
`
const GroupomaniaLogo = styled.img`
  height: 60%;
`
const Header = () => {
  const { isOpen, toggle } = useModal()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
        <ButtonProfil type='button' onClick={toggle}>
          
        </ButtonProfil>
        <Modal open={isOpen} close={toggle} />
    </HeaderContainer>
  )
}

export default Header
