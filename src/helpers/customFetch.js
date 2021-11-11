/* eslint-disable no-undef */
import { getToken } from './localStorage';

const customFetch = async(url, method, data, isUpload) => {
  const headers = {};

  // if (!url.includes('login') && !url.includes('forgot-password')) {
  //   if (!isUpload) {

  //   }
  // }

  if (isUpload) {
    // headers['Accept'] = 'multipart/form-data';
    // headers['Content-Type'] = 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW';
    // headers['Accept'] = '*/*';
  } else {
    headers['Accept'] = '*/*';
    headers['Content-Type'] = 'application/json';
    // headers['Accept'] = 'application/json; charset=utf-8';
    // headers['Content-Type'] = 'application/json; charset=utf-8';
  }
  headers['Authorization'] = getToken();
  // headers['Access-Control-Allow-Origin'] = '*';
  // headers['Access-Control-Allow-Methods'] = 'DELETE, POST, GET, PUT, OPTIONS';
  // headers['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';
  // headers['X-Channel'] = 'web_katagamer_channel';

  try {
    const sendData = isUpload
    ? data
    : method !== 'GET'
      ? JSON.stringify(data)
      : undefined;

    const response = await fetch(url, {
      method: method || 'GET',
      body: sendData,
      mode: 'cors',
      headers,
    });

    switch (response.status) {
      case 500:
        // window.location.replace('/server-attacked');
        break;

      case 404:
        // window.location.replace('/not-found');
        return await response;
        break;

      case 403:
        // window.location.replace('/403');
        break;
      case 401:
        // if (!window.location.pathname.includes('performance-mc')) {
        //   localStorage.removeItem('token');
        //   localStorage.removeItem('userId');
        //   window.location.reload();
        // } else {
        //   window.location.replace('/401');
        // }
        return await response;
        break;

      case 400:
        // const res = await response.json();
        // if (res.stat_msg.toLowerCase() === 'invalid token') {
        //   localStorage.removeItem('token');
        //   localStorage.removeItem('userId');
        //   window.location.replace('/signin');
        // } else {
        //   return res;
        // }
        return await response;
        // break;

      default:
        return await response;
    }
  } catch (err) {
    throw err;
  }
};
export default customFetch;
