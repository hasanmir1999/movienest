import { getCookie } from "cookies-next";

export const putWithToken = async (url, body, options = {}) => {
  const token = getCookie("token");

  let headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };

  let finalBody = body;

  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    finalBody = JSON.stringify(body);
  }

  const res = await fetch(url, {
    method: "PUT",
    body: finalBody,
    ...options,
    headers,
  });

  if (!res.ok) throw new Error(`Failed request: ${res.status}`);

  return res.json();
};
