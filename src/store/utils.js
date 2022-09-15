const API_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1";

export async function api(url) {
  const result = await fetch(`${API_URL}${url}`);

  if (!result.ok) {
    throw Error(`${result.status}: ${await result.text()}`);
  }

  return await result.json();
}
