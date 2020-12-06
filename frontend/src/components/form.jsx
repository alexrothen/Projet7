import styled from 'styled-components'
import { Color } from '../color'
import * as yup from 'yup'

export const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 470px;
  border: none;
  background-color: transparent;
`

export const Input = styled.input`
  margin: 0 auto;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  width: 250px;
  border: none;
  border-bottom: 1px dashed ${Color.grey};
  outline: none;
  &:focus {
    outline: 0;
  }
  ::placeholder {
    color: ${Color.grey};
    font-weight: lighter;
    font-size: 1em;
  }
`

export const Img = styled.img`
  margin: auto;
  display: flex;
  width: 280px;
`

export const Span = styled.span`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${Color.red};
`

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse e-mail doit être valide")
    .required('Email requis'),
  username: yup
    .string()
    .required("Nom d'utilisateur requis")
    .matches(
      /^[A-Za-zéèàê0-9(-.')]+$/,
      "Le nom d'utilisateur ne doit pas contenir de caractères spéciaux"
    ),
  password: yup
    .string()
    .required('Mot de passe requis')
    .min(6, 'Le mot de passe doit comporter au moins 6 caractères'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Les mots de passe ne correspondent pas'
    )
})

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required('Mot de passe requis')
})

export const SpanMessage = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

`
