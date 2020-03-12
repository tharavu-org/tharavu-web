import { path, map } from 'ramda';
import UAParser from 'ua-parser-js';

import fingerprint from './fingerprint';
import { postAPI } from './restClient';

function getDevice(parser) {
  const devObj = parser.getDevice();
  const fn = value => value || 'Unknown';
  return map(fn, devObj);
}

export default async function logUser() {
  const locationFetch = await fetch('https://api.ipdata.co/?api-key=test', {
    mode: 'cors',
  });
  const location = await locationFetch.json();
  const fingerprintData = await fingerprint();
  const filtered = fingerprintData.meta.filter(i =>
    ['language', 'timezone'].includes(i.key),
  );
  const parser = new UAParser();
  const meta = { userAgent: parser.getUA() };
  filtered.forEach(i => {
    meta[i.key] = i.value;
  });
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const tharavuUserId = path(['id'], currentUser);
  const response = await postAPI(currentUser, '/tharavu/user-access-logs', {
    tharavu_user_id: tharavuUserId,
    fingerprint: fingerprintData.hash,
    ip_address: location.ip,
    browser: parser.getBrowser(),
    device: getDevice(parser),
    platform: parser.getOS(),
    location,
    meta,
  });
  if (response.ok) {
    sessionStorage.setItem('userAccessLog', true);
  }
}
