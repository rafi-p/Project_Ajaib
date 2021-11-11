/* eslint-disable no-undef */
export function clearToken() {
  return localStorage.removeItem('token');
}

export function getRememberMe() {
  return localStorage.getItem('remember');
}
export function setRememberMe(email) {
  return localStorage.setItem('remember', email);
}
export function clearStorageRnDRemember() {
  localStorage.removeItem('remember');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function getUserStorage() {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
}

export function setTokenUser(token) {
  return localStorage.setItem('token', token);
}

export function setUserStorage(user) {
  return localStorage.setItem('user', JSON.stringify(user));
}

export function clearStorage() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}
export function clearStorageUser() {
  localStorage.removeItem('user');
}