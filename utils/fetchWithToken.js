export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const fetchWithToken = async (url, options = {}) => {
  const token = getCookie("token");

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    return { status: res.status, message: `Request failed with status: ${res.status}` };
  }

  return res.json();
};
