import styled from 'styled-components'
import { Color } from './color'
import ProfilImg from '../assets/unnamed.jpg'

export const ButtonConnectWrapper = styled.button`
  display: flex;
  margin : 0 auto;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border-radius: 5px;
  padding: 7px 16px;
  font-size: 1.02em;
  border: 2px solid ${Color.accent};
  color: ${Color.accent};
  background-color: #fff;
  outline : ${Color.accent};
  width: 130px;
  height : 35px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 180ms;
  color: #fff;
  background-color: ${Color.accent};
    &:hover {
      background-color: transparent;
      color: ${Color.accent};
    }
    &:focus{
      outline: 0;
    }
`

export const ButtonProfilWrapper = styled.button`
  display: flex;
  background: center / contain no-repeat url(${ProfilImg});
  width : 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  border-radius: 50%;
  border: 2px solid ${Color.bgHeader};
  color: ${Color.accent};
  background-color: ${Color.bgColorDark};
  outline : ${Color.accent};
  cursor: pointer;
  transition: all ease-in-out 180ms;
  color: #fff;
    &:hover {
      opacity : 0.7;
    }
    &:focus{
      outline: 0;
    }
`

export const ButtonPostWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border-radius: 15px;
  padding: 7px 16px;
  font-size: 1.02em;
  border: 2px solid ${Color.accent};
  color: ${Color.accent};
  background-color: #fff;
  outline : ${Color.accent};
  width: 180px;
  height : 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 180ms;
  color: ${Color.bgGrey};
  background-color: ${Color.accent};
    &:hover {
      background-color: ${Color.bgGrey};
      color: ${Color.accent}
    }
    &:focus{
      outline: 0;
    }
`
