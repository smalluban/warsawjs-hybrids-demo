const API_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1";

function handleError(res) {
  if (!res.ok) throw Error(res.status);
  return res.json();
}

export function api(url) {
  return fetch(`${API_URL}${url}`).then(handleError);
}
