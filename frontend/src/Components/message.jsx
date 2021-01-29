import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog } from '@material-ui/core'
import { Margin } from '../styles/margin'
import { Form, Input, Img, Span, SpanMessage, BlockInput } from '../styles/formStyle.js'
import '../index.css'
import { ButtonConnect } from './buttons'

export const Message = () => {
  return (
    <TextArea />

  )
}

const TextArea = () => {
  const [count, setCount] = useState(280)

  // if (count <= 0) {
  //   $('input').attr('disabled', true);
  // } else {
  //   $('input').attr('disabled', false);
  // }
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      style={{ backdropFilter: 'blur(0.5em)' }}
    >
      <p>Il vous reste {count} caractères</p>
      <textarea
          type='text'
          rows={5}
          onChange={e => setCount(count - e.target.value.length)}
        />
      <input type='submit' text='submit' />
    </Dialog>
  )
}
