export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const delWithToken = async (url, options = {}) => {
  const token = getCookie("token");

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    method: "DELETE",
    ...options,
    headers,
  });

  if (!res.ok) throw new Error(`Failed request: ${res.status}`);

  return true
};
