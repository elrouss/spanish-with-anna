import VALIDATION_MESSAGES from '../../../utils/validation-messages';

const schemaEmail = (Yup) => ({
  email: Yup.string()
    .matches(/[^@\s]+@[^@\s]+\.[^@\s]+/, VALIDATION_MESSAGES.user.email.invalid)
    .required(VALIDATION_MESSAGES.user.email.required),
});

const schemaPassword = (Yup) => ({
  password: Yup.string()
    .min(8, VALIDATION_MESSAGES.user.password.tip)
    .required(VALIDATION_MESSAGES.user.password.required),
});

const schemaName = (Yup) => ({
  name: Yup.string().required(VALIDATION_MESSAGES.user.name.required),
});

export { schemaName, schemaEmail, schemaPassword };
