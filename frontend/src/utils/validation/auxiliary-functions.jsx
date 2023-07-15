import { DOUBLE_SPACE_REGEX } from '../constants';

const filterFormValues = (values) => {
  const copyValues = { ...values };

  Object.keys(copyValues).map((key) => {
    if (typeof copyValues[key] === 'string') {
      copyValues[key] = copyValues[key].trim().replace(DOUBLE_SPACE_REGEX, ' ');
    }

    return copyValues;
  });

  return copyValues;
};

export default filterFormValues;
