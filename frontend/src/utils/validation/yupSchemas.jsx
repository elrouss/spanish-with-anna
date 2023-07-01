import VALIDATION_MESSAGES from './validation-messages';
import { EMAIL_REGEX, NAME_REGEX, PHONE_REGEX } from '../constants';

export const schemaEmail = (Yup) => ({
  email: Yup.string()
    .matches(EMAIL_REGEX, VALIDATION_MESSAGES.user.email.invalid)
    .required(VALIDATION_MESSAGES.user.email.required),
});

export const schemaPassword = (Yup) => ({
  password: Yup.string()
    .min(8, VALIDATION_MESSAGES.user.password.invalid)
    .required(VALIDATION_MESSAGES.user.password.required),
});

export const schemaName = (Yup) => ({
  name: Yup.string()
    .matches(NAME_REGEX, VALIDATION_MESSAGES.user.name.invalid)
    .required(VALIDATION_MESSAGES.user.name.required),
});

export const schemaPhone = (Yup) => ({
  phone: Yup.string()
    .matches(PHONE_REGEX, VALIDATION_MESSAGES.user.phone.invalid)
    .required(VALIDATION_MESSAGES.user.phone.required),
});

export const schemaPreferredCommunication = (Yup) => ({
  preferredCommunication: Yup.string().required().oneOf(['email', 'phone']),
});

export const schemaFeedbackMessage = (Yup) => ({
  message: Yup.string().required().min(1).max(1024),
});

export const schemaPersonalDataConsent = (Yup) => ({
  personalDataConsent: Yup.bool().required().oneOf([true]),
});
