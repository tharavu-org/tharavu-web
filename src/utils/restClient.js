import { path } from 'ramda';

import camelToSnakeCase from './caseHelpers';

export async function postAPI(currentUser, url = '', data = {}, patch = false) {
  const authToken = path(['authToken'], currentUser);
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: patch ? 'PATCH' : 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken,
    },
    body: JSON.stringify(camelToSnakeCase(data)),
  });
  return response;
}

export async function getAPI(currentUser, url = '', del = false) {
  const authToken = path(['authToken'], currentUser);
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: del ? 'DELETE' : 'GET',
    headers: {
      Authorization: authToken,
    },
  });
  return response;
}
