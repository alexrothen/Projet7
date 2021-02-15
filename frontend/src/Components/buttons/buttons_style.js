import styled from 'styled-components'
import { Color } from '../../utils/styles/color'
import ProfilImg from '../../assets/unnamed.jpg'

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
  color: ${Color.bgGrey};
  background-color: ${Color.accent};
    &:hover {
      background-color: transparent;
      border: 2px solid ${Color.accent};
        color: ${Color.accent};
    }
    &:focus{
      outline: 0;
    }
`
export const ButtonProfilWrapper = styled.button`
  background: url(${ProfilImg});
  background-position: 50% 50%;
  background-size: cover;
  width : 55px;
  height: 55px;
  margin-right: 25px;
    margin-left: 25px;

  border-radius: 50%;
  border: 1px solid ${Color.bgColorDark};
  background-color: ${Color.bgColorDark};  
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
     &:hover {
      opacity : 0.7;
    }
    &:focus{
      outline: 0;
    }
`
