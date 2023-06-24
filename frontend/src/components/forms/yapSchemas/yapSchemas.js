const schemaNameTest = (Yup) => ({
  name: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .required('Name field is required'),
});

export { schemaNameTest };
