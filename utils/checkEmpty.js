export const checkEmpty = (formData) => {
  for (let key in formData) {
    const value = formData[key];
    if (!value || (typeof value === "string" && !value.trim())) {
      return true;
    }
  }
  return false;
};
