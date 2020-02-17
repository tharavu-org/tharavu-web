export async function postAPI(url = '', data = {}) {
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export async function getAPI(url = '') {
  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}
