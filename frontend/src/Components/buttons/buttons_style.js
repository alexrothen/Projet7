import styled from 'styled-components'
import { Color } from '../../utils/styles/color'
import ProfilImg from '../../assets/unnamed.jpg'

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
