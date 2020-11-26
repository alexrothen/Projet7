// Imports

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import ImgLogo from '../../assets/icon-left-font copie.png'
import { Margin } from '../../components/Margin'
import { Color } from '../../color'
import '../../index.css'

// Styled components

const FormContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 470px;
  border-radius: 10px;
  box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
`

const Input = styled.input`
  font-weight: bold;
  display: block;
  margin: auto;
  width: 250px;
  line-height: 1.4;
`

const Img = styled.img`
  margin: auto;
  display: flex;
  height: 65px;
`

const SignUpButton = styled.button`
  display: block;
  margin: auto;
  font-weight: black;
  cursor: pointer;
  border: transparent;
  outline: none;
  border-radius: 4px;
  transition: ease-in-out all 180ms;
  background-color: ${Color.red};
  color: white;
  font-weight: bold;
  width: 115px;

  height: 2.5em;
  :hover {
    opacity: 0.75;
  }
`

export function LoginScreen () {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = data => console.log(data)

  const SetInput = ({ name, type, placeholder }) => {
    return (
      <>
        <label htmlFor={name} />
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          ref={register({ required: true })}
        />

      </>
    )
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Img src={ImgLogo} />
        <Margin direction='vertical' margin='4em' />
        <SetInput
          htmlFor='email'
          name='email'
          type='email'
          placeholder='E-MAIL'
        />

        <Margin direction='vertical' margin='0.5em' />

        <SetInput
          htmlFor='username'
          name='username'
          type='text'
          placeholder="NOM D'UTILISATEUR"
        />
        <Margin direction='vertical' margin='0.5em' />

        <SetInput
          htmlFor='password'
          name='password'
          type='password'
          // onChange={(e) => setPassword(e.target.value)}
          placeholder='MOT DE PASSE'
        />
        <Margin direction='vertical' margin='0.5em' />

        <Input
          htmlFor='passwordConf'
          name='passwordConf'
          type='password'
          // onChange={(e) => setPassword(e.target.value)}
          placeholder='CONFIRMER LE MOT DE PASSE'
        />
        <Margin direction='vertical' margin='5em' />
        <SignUpButton type='submit'>S'INSCRIRE</SignUpButton>
      </form>
    </FormContainer>
  )
}
