import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse e-mail doit être valide")
    .required('Adresse e-mail requise'),
  password: yup
    .string()
    .required('Mot de passe requis')
    .min(6, 'Le mot de passe doit comporter au moins 6 caractères'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null]
      // 'Les mots de passe ne correspondent pas'
    )

})

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse e-mail doit être valide")
    .required('Adresse e-mail requise'),
  password: yup
    .string()
    .required('Mot de passe requis')
    .min(6, 'Le mot de passe comporte au moins 6 caractères')
})
