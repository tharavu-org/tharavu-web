import snakeCase from 'just-snake-case';

export default function camelToSnakeCase(object) {
  if (typeof object === 'object' && Array.isArray(object)) {
    return object.map(obj => camelToSnakeCase(obj));
  }
  if (typeof object === 'object' && object === null) {
    return object;
  }
  if (typeof object === 'object') {
    const newObj = {};
    Object.keys(object).forEach(key => {
      newObj[snakeCase(key)] = camelToSnakeCase(object[key]);
    });
    return newObj;
  }
  return object;
}
