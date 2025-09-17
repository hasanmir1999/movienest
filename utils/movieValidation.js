export const movieValidation = (formData) => {
  if (!formData.title.match(/^[a-zA-Z][a-zA-Z0-9 ]{3,24}[a-zA-Z0-9]$/)) {
    return {
      stat: true,
      message:
        "Title must start with a letter and be 4–25 characters long, containing only letters, numbers.",
    };
  }
  if (!String(formData.time).match(/^(25[0]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)$/)) {
    return {
      stat: true,
      message: "Time must be a number between 1 and 250.",
    };
  }
  if (!String(formData.price).match(/^\d+\.\d{2}$/)) {
    return {
      stat: true,
      message: "Price invalied.",
    };
  }
  if (!String(formData.imdb_rate).match(/^(10(\.0{1,2})?|([0-9]|([0-9]\.[0-9]{1,2})))$/)) {
    return {
      stat: true,
      message: "Imdb invalied.",
    };
  }
  return {
    stat: false,
    message: "ok",
  };
};
