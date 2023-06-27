import VALIDATION_MESSAGES from '../../../utils/validation-messages';
import { EMAIL_REGEX } from '../../../utils/constants';

const schemaEmail = (Yup) => ({
  email: Yup.string()
    .matches(EMAIL_REGEX, VALIDATION_MESSAGES.user.email.invalid)
    .required(VALIDATION_MESSAGES.user.email.required),
});

const schemaPassword = (Yup) => ({
  password: Yup.string()
    .min(8, VALIDATION_MESSAGES.user.password.invalid)
    .required(VALIDATION_MESSAGES.user.password.required),
});

const schemaName = (Yup) => ({
  name: Yup.string().required(VALIDATION_MESSAGES.user.name.required),
});

export { schemaName, schemaEmail, schemaPassword };
