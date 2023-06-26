import VALIDATION_MESSAGES from '../../../utils/validation-messages';

const schemaNameTest = (Yup) => ({
  email: Yup.string()
    .email(VALIDATION_MESSAGES.user.email.invalid)
    .required(VALIDATION_MESSAGES.user.email.required),
});

export { schemaNameTest };
