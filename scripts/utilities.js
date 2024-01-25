const convertFormDataToJson = (formData) => {
  const data = Object.fromEntries(formData.entries());
console.log('data', data);

  return data;
};

export { convertFormDataToJson };
