import * as Yup from 'yup';
import {email, password} from '../../lib/form-validations';
import {authenticateUser} from '../../api/authentication';

export const validationSchema = Yup.object(({
  email,
  password
}));

export const handleSubmit = async (values, {setSubmitting}, {setAuth, pushHistory}) => {
  try {
    const castValues = validationSchema.cast(values);
    const data = await authenticateUser(castValues);
    setAuth(data);
    setSubmitting(false);
    pushHistory('/user/profile');
  } catch (error) {}
  setSubmitting(false);
};
