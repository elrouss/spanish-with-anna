const schemaNameTest = (Yup) => ({
  email: Yup.string().email('Must be').required('Name field is required'),
});

export { schemaNameTest };
