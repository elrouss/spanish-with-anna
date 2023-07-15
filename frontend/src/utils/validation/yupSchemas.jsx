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

export const schemaPhoneFeedback = (Yup) => ({
  phone: Yup.string()
    .matches(PHONE_REGEX, VALIDATION_MESSAGES.user.phone.invalid)
    .when('preferred_communication', {
      is: 'phone',
      then: () =>
        Yup.string()
          .matches(PHONE_REGEX, VALIDATION_MESSAGES.user.phone.invalid)
          .required(VALIDATION_MESSAGES.user.phone.required),
    }),
});

export const schemaPreferredCommunication = (Yup) => ({
  preferred_communication: Yup.string().required().oneOf(['email', 'phone']),
});

export const schemaMessageFeedback = (Yup) => ({
  message: Yup.string().required().min(1).max(1024),
});

export const schemaPersonalDataConsent = (Yup) => ({
  is_agree: Yup.bool().required().oneOf([true]),
});
