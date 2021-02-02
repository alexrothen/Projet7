import React from 'react'
import { ButtonSelect as Button } from './buttons'
import { makeStyles } from '@material-ui/core/styles'
import { Color } from '../styles/color'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import '../index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}))

export const FileUploader = () => {
  const classes = useStyles()

  return (
    <>
      <input
        accept='image/*' className={classes.input}
        id='icon-button-file' type='file'
      />
      <label htmlFor='icon-button-file'>
        <IconButton id="IconButton" aria-label='upload picture' component='span'>
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  )
}
