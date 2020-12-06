import * as yup from 'yup'

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
  username: yup.string().required("Nom d'utilisateur requis"),
  password: yup.string().required('Mot de passe requis')
})
