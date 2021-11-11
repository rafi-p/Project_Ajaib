// import Config from './Config';

let endpoint = {
  url: process.env.REACT_APP_URL,
  param: {
    forgotPass: '/v1/auth/forgot-password',
  }
};
export default endpoint;
