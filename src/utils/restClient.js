import { path } from 'ramda';

import signout from './session';
import camelToSnakeCase from './caseHelpers';

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

async function handleInvalidResponse(response) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && response.status === 401) {
    signout();
  }

  if (!response.ok) {
    throw new APIError({
      status: response.status,
      statusText: response.statusText,
      errors: await response.json(),
    });
  }
}

export async function postAPI(url = '', data = {}, patch = false) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const authToken = path(['authToken'], currentUser);
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: patch ? 'PATCH' : 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken,
    },
    body: JSON.stringify(camelToSnakeCase(data)),
  });
  await handleInvalidResponse(response);
  return response.json();
}

export async function getAPI(url = '', del = false) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const authToken = path(['authToken'], currentUser);
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: del ? 'DELETE' : 'GET',
    headers: {
      Authorization: authToken,
    },
  });
  await handleInvalidResponse(response);
  return response.json();
}
