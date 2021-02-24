import styled from 'styled-components'
import { Color } from '../../utils/styles/color'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  padding-top: 0;
  /* background-color: ${Color.bgColorDark}; */
  justify-content: space-between;
  padding-top:10px;
`

export const GroupomaniaLogo = styled.img`
  height: 60%;
  padding-left:4%;
`
export const BlockHeader = styled.div`
  display : flex;
  flex-direction : row;
  justify-content: space-around;
  align-items: center;
  padding-right: 5%;
`
