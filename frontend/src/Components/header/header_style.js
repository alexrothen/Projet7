import styled from 'styled-components'
import { Color } from '../../utils/styles/color'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0;
  background-color: ${Color.bgHeader};
  justify-content: space-between;
`

export const GroupomaniaLogo = styled.img`
  height: 60%;
  padding-left:1%;
`
export const BlockHeader = styled.div`
  display : flex;
  flex-direction : row;
  justify-content: space-around;
  align-items: center;
`
