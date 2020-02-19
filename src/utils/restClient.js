import { path } from 'ramda';
import signout from './session';

class APIError extends Error {
  constructor(data, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, APIError);
    }

    this.name = 'APIError';
    // Custom debugging information
    this.data = data;
  }
}

export async function postAPI(url = '', data = {}) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const authToken = path(['authToken'], currentUser);
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken,
    },
    body: JSON.stringify(data),
  });
  if (response.status === 401) {
    signout();
  }
  if (!response.ok) {
    throw new APIError({
      status: response.status,
      statusText: response.statusText,
      errors: await response.json(),
    });
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
