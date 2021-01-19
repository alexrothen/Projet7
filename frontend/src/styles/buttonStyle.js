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
  border: 2px solid ${Color.red};
  color: ${Color.red};
  background-color: #fff;
  outline : ${Color.red};
  width: 130px;
  height : 35px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 180ms;
  color: #fff;
  background-color: ${Color.red};
    &:hover {
      background-color: transparent;
      color: ${Color.red};
    }
    &:focus{
      outline: 0;
    }
`
export const ButtonProfilWrapper = styled.button`
  display: flex;
  background: center / contain no-repeat url(${ProfilImg});
  width : 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  border-radius: 50%;
  border: 2px solid ${Color.bgColor};
  color: ${Color.red};
  background-color: #fff;
  outline : ${Color.red};
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
