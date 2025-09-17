export const validation = (formData) => {
  if (!formData.username.match(/^[a-zA-Z][a-zA-Z0-9_]{3,24}$/)) {
    return {
      stat: true,
      message:
        "Username must start with a letter and be 4–25 characters long, containing only letters, numbers, or _ .",
    };
  }
  if (
    !formData.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
  ) {
    return {
      stat: true,
      message: "email invalied",
    };
  }
  return {
    stat: false,
    message: "ok",
  };
};
