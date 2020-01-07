import * as Yup from 'yup';

const MIN = 5;

export const email = Yup
  .string()
  .trim()
  .email('Invalid e-mail')
  .required('E-mail is a required field');

export const password = Yup
  .string()
  .trim()
  .min(MIN, `Password must be at least ${MIN} characters`)
  .required('Password is a required field');
