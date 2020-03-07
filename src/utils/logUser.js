import { path } from 'ramda';

import fingerprint from './fingerprint';
import { postAPI } from './restClient';

export default async function logUser() {
  const locationFetch = await fetch(
    'http://ip-api.com/json/?fields=status,country,countryCode,region,regionName,city,lat,lon,query',
  );
  const location = await locationFetch.json();
  const data = await fingerprint();
  const filtered = data.meta.filter(i =>
    ['userAgent', 'language', 'timezone', 'platform'].includes(i.key),
  );
  const meta = {};
  filtered.forEach(i => {
    meta[i.key] = i.value;
  });
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const tharavuUserId = path(['id'], currentUser);
  const response = await postAPI(currentUser, '/tharavu/user-access-logs', {
    tharavu_user_id: tharavuUserId,
    fingerprint: data.hash,
    meta,
    ip_address: location.query,
    location,
  });
  if (response.ok) {
    sessionStorage.setItem('userAccessLog', true);
  }
}
