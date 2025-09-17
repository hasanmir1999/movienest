export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const PostWithToken = async (url, data , options = {}) => {
  const token = getCookie("token");

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(url, {
    method: "POST",
    body: data,
    ...options,
    headers,
  });

  if (!res.ok) throw new Error(`Failed request: ${res.status}`);
   
  return res.json()
};
